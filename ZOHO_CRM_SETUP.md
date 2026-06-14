# Zoho CRM Integration Setup

## Prerequisites

1. A Zoho CRM account
2. API access enabled in your Zoho account

## Step 1: Create a Zoho Application

1. Go to [Zoho API Console](https://api-console.zoho.com/)
2. Click "Add Client"
3. Choose "Server-based Application"
4. Fill in the details:
   - Client Name: Immistack Trial Form
   - Homepage URL: `http://localhost:3000` (or your production URL)
   - Authorized Redirect URIs: `http://localhost:3000` (or your production URL)

## Step 2: Get Your Credentials

After creating the application, you'll get:
- **Client ID**
- **Client Secret**

## Step 3: Generate Refresh Token

You'll need to generate a refresh token using OAuth flow. Here's how:

1. Visit this URL (replace with your actual Client ID):
```
https://accounts.zoho.com/oauth/v2/auth?scope=ZohoCRM.modules.ALL,ZohoCRM.settings.ALL&client_id=YOUR_CLIENT_ID&response_type=code&access_type=offline&redirect_uri=http://localhost:3000
```

2. Authorize the application
3. You'll be redirected to `http://localhost:3000/?code=YOUR_AUTH_CODE`
4. Copy the `code` parameter from the URL

5. Make a POST request to get the refresh token:
```bash
curl -X POST https://accounts.zoho.com/oauth/v2/token \
  -d "code=YOUR_AUTH_CODE" \
  -d "client_id=YOUR_CLIENT_ID" \
  -d "client_secret=YOUR_CLIENT_SECRET" \
  -d "redirect_uri=http://localhost:3000" \
  -d "grant_type=authorization_code"
```

6. Save the `refresh_token` from the response

## Step 4: Configure Environment Variables

Update your `.env` file with the credentials (these are used by the server-side API route):

```env
ZOHO_CLIENT_ID=your_actual_client_id
ZOHO_CLIENT_SECRET=your_actual_client_secret
ZOHO_REFRESH_TOKEN=your_actual_refresh_token
```

**Important**: These environment variables must also be set in your Vercel dashboard:
1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add the three variables above with your actual Zoho credentials

## Step 5: Test the Integration

1. Start your development server: `npm run dev`
2. Fill out the trial form
3. Check your Zoho CRM Leads module - a new lead should be created

## Troubleshooting

- **CORS Issues**: The new setup uses server-side API routes, so CORS issues are resolved
- **Environment Variables**: Make sure to set the environment variables in both your `.env` file (for local development) and your Vercel dashboard (for production)
- **Token Expiration**: Refresh tokens don't expire, but access tokens do. The service handles token refresh automatically
- **API Limits**: Check Zoho's API rate limits for your plan
- **Deployment**: Make sure your Vercel deployment includes the `api/` directory and `vercel.json` configuration

## What Gets Created in Zoho CRM

When a user submits the trial form, a new Lead is created with:
- **Company**: Firm name
- **Last Name**: Firm name (required field)
- **Email**: User's email
- **Description**: Firm size and source information
- **Lead Source**: "Immistack Website"
- **Lead Status**: "Not Contacted"