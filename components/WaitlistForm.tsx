import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from './Button';
import { Input } from './Input';
import { WaitlistFormData, CRMStatus } from '../types';
import { generatePersonalizedWelcome } from '../services/geminiService';

export const WaitlistForm: React.FC = () => {
  const [formData, setFormData] = useState<WaitlistFormData>({
    email: '',
    firmName: '',
    firmSize: 'Small (1-5)'
  });
  const [status, setStatus] = useState<CRMStatus>(CRMStatus.IDLE);
  const [aiMessage, setAiMessage] = useState<string>('');

  const submitToZoho = async (data: WaitlistFormData) => {
    // Zoho CRM Integration Logic
    // Option 1: Use a middleware/proxy (Recommended for Security)
    // Option 2: Use Zoho Flow / Zapier Webhook (Recommended for Frontend-only)
    
    // Check for environment variable for the webhook URL
    const webhookUrl = process.env.ZOHO_WEBHOOK_URL;

    const payload = {
      Company: data.firmName,
      Last_Name: data.firmName, // Required field for Zoho Leads
      Email: data.email,
      Description: `Firm Size: ${data.firmSize} - Source: Immistack Free Trial Modal`,
      Lead_Source: "Immistack Website",
      Status: "Not Contacted"
    };

    console.log("Preparing Zoho CRM Payload:", payload);

    if (webhookUrl) {
      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          console.warn("Zoho Webhook submission failed", response.statusText);
          // We don't throw here to ensure the user still sees the success screen
          // In production, you might want to queue this for retry
        }
      } catch (err) {
        console.error("Network error submitting to Zoho:", err);
      }
    } else {
      // Simulation for demo purposes
      console.info("No ZOHO_WEBHOOK_URL provided. Simulating successful CRM entry.");
      await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network latency
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(CRMStatus.SUBMITTING);

    try {
      // 1. Submit to Zoho CRM
      await submitToZoho(formData);

      // 2. Call Gemini for dynamic welcome (Parallel execution could be faster, but sequential ensures CRM priority)
      const message = await generatePersonalizedWelcome(formData);
      setAiMessage(message);
      
      // 3. Set success
      setStatus(CRMStatus.SUCCESS);
    } catch (error) {
      console.error(error);
      // Even if AI fails, we likely want to show success if CRM worked, but for now generic error handling
      setStatus(CRMStatus.ERROR);
    }
  };

  if (status === CRMStatus.SUCCESS) {
    return (
      <div className="bg-white p-8 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-growth/10 mb-6 animate-scale-in">
          <CheckCircle className="h-10 w-10 text-growth" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-navy mb-2">Request Received</h3>
        <p className="text-gray-500 mb-8 max-w-xs mx-auto">One of our enterprise specialists will contact you at <span className="font-semibold text-navy">{formData.email}</span> within 24 hours.</p>
        
        <div className="bg-slate p-6 rounded-xl border border-gray-100 w-full text-left relative overflow-hidden">
           <div className="absolute top-0 left-0 w-1 h-full bg-gold"></div>
          <p className="text-[10px] uppercase tracking-wide text-gray-400 font-bold mb-2 flex items-center gap-1">
             <span className="w-1.5 h-1.5 rounded-full bg-growth animate-pulse"></span>
             Immistack AI Agent
          </p>
          <p className="text-navy font-medium leading-relaxed">"{aiMessage}"</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-heading font-bold text-navy mb-2">Get 30 Days Free</h3>
        <p className="text-gray-500 text-sm">Join 500+ firms automating their workflows. <br/>No credit card required for trial.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input 
          label="Work Email" 
          type="email" 
          required 
          placeholder="name@lawfirm.com"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        
        <Input 
          label="Firm Name" 
          type="text" 
          required 
          placeholder="Global Migration Partners"
          value={formData.firmName}
          onChange={(e) => setFormData({...formData, firmName: e.target.value})}
        />

        <div className="w-full">
          <label className="block text-sm font-medium text-navy/70 mb-1 pl-1">
            Firm Size
          </label>
          <select 
            className="block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold sm:text-sm bg-white"
            value={formData.firmSize}
            onChange={(e) => setFormData({...formData, firmSize: e.target.value as any})}
          >
            <option value="Solo">Solo Practitioner</option>
            <option value="Small (1-5)">Boutique Firm (1-5)</option>
            <option value="Medium (6-25)">Mid-Sized (6-25)</option>
            <option value="Enterprise (25+)">Enterprise / Network (25+)</option>
          </select>
        </div>

        <Button 
          type="submit" 
          variant="primary" 
          fullWidth 
          disabled={status === CRMStatus.SUBMITTING}
          className="mt-6 shadow-xl shadow-navy/20"
        >
          {status === CRMStatus.SUBMITTING ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Configuring Trial...
            </>
          ) : (
            <>
              Activate Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </form>
      <div className="text-center mt-4 text-[10px] text-gray-400">
        Syncs with Zoho CRM & HubSpot
      </div>
    </div>
  );
};