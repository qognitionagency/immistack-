import React from 'react';

export type Page = 
  | 'HOME' 
  | 'FEATURES' 
  | 'INDUSTRIES' 
  | 'INDUSTRY_AGENTS'
  | 'INDUSTRY_EDUCATION'
  | 'INDUSTRY_CORPORATE'
  | 'PRICING' 
  | 'ABOUT' 
  | 'RESOURCES'
  | 'RESOURCE_ARTICLE'
  | 'FEATURE_CRM'
  | 'FEATURE_COMPLIANCE'
  | 'FEATURE_PORTAL'
  | 'FEATURE_STAFF_PORTAL'
  | 'FEATURE_ADMIN_PORTAL'
  | 'FEATURE_AI'
  | 'FEATURE_TRUST'
  | 'FEATURE_BILLING'
  | 'FEATURE_TASKS'
  | 'FEATURE_FORMS'
  | 'FEATURE_COMMISSION'
  | 'FEATURE_MULTIOFFICE';

export interface WaitlistFormData {
  email: string;
  firmName: string;
  firmSize: 'Solo' | 'Small (1-5)' | 'Medium (6-25)' | 'Enterprise (25+)';
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  span?: string;
}

export interface NavItem {
  label: string;
  page: Page;
}

export enum CRMStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}