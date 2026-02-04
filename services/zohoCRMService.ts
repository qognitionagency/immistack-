import { WaitlistFormData } from '../types';

interface ZohoTokenResponse {
  access_token: string;
  refresh_token?: string;
  expires_in: number;
}

interface ZohoLeadResponse {
  data: Array<{
    code: string;
    details: any;
    message: string;
    status: string;
  }>;
}

class ZohoCRMService {
  private clientId: string;
  private clientSecret: string;
  private refreshToken: string;
  private accessToken: string | null = null;
  private tokenExpiry: number | null = null;

  constructor() {
    this.clientId = import.meta.env.VITE_ZOHO_CLIENT_ID || '';
    this.clientSecret = import.meta.env.VITE_ZOHO_CLIENT_SECRET || '';
    this.refreshToken = import.meta.env.VITE_ZOHO_REFRESH_TOKEN || '';
  }

  private async getAccessToken(): Promise<string> {
    if (this.accessToken && this.tokenExpiry && Date.now() < this.tokenExpiry) {
      return this.accessToken;
    }

    const response = await fetch('https://accounts.zoho.com/oauth/v2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        client_id: this.clientId,
        client_secret: this.clientSecret,
        refresh_token: this.refreshToken,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to get access token: ${response.statusText}`);
    }

    const data: ZohoTokenResponse = await response.json();
    this.accessToken = data.access_token;
    this.tokenExpiry = Date.now() + (data.expires_in * 1000) - 60000; // 1 minute buffer

    return this.accessToken;
  }

  async createLead(formData: WaitlistFormData): Promise<void> {
    if (!this.clientId || !this.clientSecret || !this.refreshToken) {
      throw new Error('Zoho CRM credentials not configured. Please set VITE_ZOHO_CLIENT_ID, VITE_ZOHO_CLIENT_SECRET, and VITE_ZOHO_REFRESH_TOKEN environment variables.');
    }

    const accessToken = await this.getAccessToken();

    const leadData = {
      data: [{
        Company: formData.firmName,
        Last_Name: formData.firmName,
        Email: formData.email,
        Description: `Firm Size: ${formData.firmSize} - Source: Immistack Free Trial Modal`,
        Lead_Source: 'Immistack Website',
        Lead_Status: 'Not Contacted'
      }]
    };

    const response = await fetch('https://www.zohoapis.com/crm/v2/Leads', {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to create lead: ${errorData.message || response.statusText}`);
    }

    const result: ZohoLeadResponse = await response.json();

    if (result.data[0].status !== 'success') {
      throw new Error(`Zoho CRM error: ${result.data[0].message}`);
    }

    console.log('Lead created successfully:', result.data[0]);
  }
}

export const zohoCRMService = new ZohoCRMService();