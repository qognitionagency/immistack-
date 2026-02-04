import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { FeatureCRM } from './pages/FeatureCRM';
import { FeatureCompliance } from './pages/FeatureCompliance';
import { FeaturePortal } from './pages/FeaturePortal';
import { FeatureStaffPortal } from './pages/FeatureStaffPortal';
import { FeatureAdminPortal } from './pages/FeatureAdminPortal';
import { FeatureAI } from './pages/FeatureAI';
import { FeatureTrust } from './pages/FeatureTrust';
import { FeatureBilling } from './pages/FeatureBilling';
import { FeatureTasks } from './pages/FeatureTasks';
import { FeatureForms } from './pages/FeatureForms';
import { FeatureCommission } from './pages/FeatureCommission';
import { FeatureMultiOffice } from './pages/FeatureMultiOffice';
import { Pricing } from './pages/Pricing';
import { About } from './pages/About';
import { Industries } from './pages/Industries';
import { IndustryAgents } from './pages/IndustryAgents';
import { IndustryEducation } from './pages/IndustryEducation';
import { IndustryCorporate } from './pages/IndustryCorporate';
import { Resources } from './pages/Resources';
import { ResourceArticle } from './pages/ResourceArticle';
import { WaitlistModal } from './components/WaitlistModal';
import { WaitlistForm } from './components/WaitlistForm';
import { Shield, MapPin, Mail, Phone } from 'lucide-react';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('HOME');
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'HOME':
        return <Home onOpenWaitlist={() => setIsWaitlistOpen(true)} onNavigate={setCurrentPage} />;
      case 'FEATURES':
        return <Features onOpenWaitlist={() => setIsWaitlistOpen(true)} onNavigate={setCurrentPage} />;
      case 'FEATURE_CRM':
        return <FeatureCRM onOpenWaitlist={() => setIsWaitlistOpen(true)} />;
      case 'FEATURE_COMPLIANCE':
        return <FeatureCompliance onOpenWaitlist={() => setIsWaitlistOpen(true)} />;
      case 'FEATURE_PORTAL':
        return <FeaturePortal onOpenWaitlist={() => setIsWaitlistOpen(true)} />;
      case 'FEATURE_STAFF_PORTAL':
        return <FeatureStaffPortal onOpenWaitlist={() => setIsWaitlistOpen(true)} />;
      case 'FEATURE_ADMIN_PORTAL':
        return <FeatureAdminPortal onOpenWaitlist={() => setIsWaitlistOpen(true)} />;
      case 'FEATURE_AI':
        return <FeatureAI onOpenWaitlist={() => setIsWaitlistOpen(true)} />;
      case 'FEATURE_TRUST':
        return <FeatureTrust onOpenWaitlist={() => setIsWaitlistOpen(true)} />;
      case 'FEATURE_BILLING':
        return <FeatureBilling onOpenWaitlist={() => setIsWaitlistOpen(true)} />;
      case 'FEATURE_TASKS':
        return <FeatureTasks onOpenWaitlist={() => setIsWaitlistOpen(true)} />;
      case 'FEATURE_FORMS':
        return <FeatureForms onOpenWaitlist={() => setIsWaitlistOpen(true)} />;
      case 'FEATURE_COMMISSION':
        return <FeatureCommission onOpenWaitlist={() => setIsWaitlistOpen(true)} />;
      case 'FEATURE_MULTIOFFICE':
        return <FeatureMultiOffice onOpenWaitlist={() => setIsWaitlistOpen(true)} />;
      case 'PRICING':
        return <Pricing onOpenWaitlist={() => setIsWaitlistOpen(true)} />;
      case 'ABOUT':
        return <About />;
      case 'INDUSTRIES':
        return <Industries onOpenWaitlist={() => setIsWaitlistOpen(true)} onNavigate={setCurrentPage} />;
      case 'INDUSTRY_AGENTS':
        return <IndustryAgents onOpenWaitlist={() => setIsWaitlistOpen(true)} />;
      case 'INDUSTRY_EDUCATION':
        return <IndustryEducation onOpenWaitlist={() => setIsWaitlistOpen(true)} />;
      case 'INDUSTRY_CORPORATE':
        return <IndustryCorporate onOpenWaitlist={() => setIsWaitlistOpen(true)} />;
      case 'RESOURCES':
        return <Resources onNavigate={setCurrentPage} />;
      case 'RESOURCE_ARTICLE':
        return <ResourceArticle onOpenWaitlist={() => setIsWaitlistOpen(true)} />;
      default:
        return <Home onOpenWaitlist={() => setIsWaitlistOpen(true)} onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-navy overflow-x-hidden bg-slate selection:bg-gold/30">
      
      <Navbar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        onOpenWaitlist={() => setIsWaitlistOpen(true)} 
      />

      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Comprehensive Sitemap Footer */}
      <footer className="bg-white border-t border-gray-100 py-16 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            
            <div className="col-span-2 pr-8">
              <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => setCurrentPage('HOME')}>
                <div className="relative w-6 h-6 flex items-end justify-between">
                  <div className="w-1.5 bg-navy rounded-t-sm h-[40%]"></div>
                  <div className="w-1.5 bg-navy rounded-t-sm h-[70%]"></div>
                  <div className="w-1.5 bg-gold rounded-t-sm h-[100%]"></div>
                </div>
                <span className="font-heading font-bold text-lg text-navy">Immistack</span>
              </div>
              <p className="text-gray-500 mb-6 leading-relaxed">
                The operating system for modern global mobility. Built by migration lawyers for migration lawyers.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-gray-500">
                  <MapPin className="h-4 w-4" /> Sydney • London • Toronto
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Mail className="h-4 w-4" /> hello@immistack.com
                </div>
              </div>
              <div className="flex gap-4">
                 <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gold hover:text-navy transition-colors flex items-center justify-center cursor-pointer">in</div>
                 <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gold hover:text-navy transition-colors flex items-center justify-center cursor-pointer">X</div>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold text-navy mb-5 tracking-wide">Solutions</h5>
              <ul className="space-y-3 text-gray-500">
                <li><button onClick={() => setCurrentPage('INDUSTRY_AGENTS')} className="hover:text-goldDark hover:translate-x-1 transition-all text-left">Migration Agents</button></li>
                <li><button onClick={() => setCurrentPage('INDUSTRY_EDUCATION')} className="hover:text-techBlue hover:translate-x-1 transition-all text-left">Education Consultants</button></li>
                <li><button onClick={() => setCurrentPage('INDUSTRY_CORPORATE')} className="hover:text-navy hover:translate-x-1 transition-all text-left">Corporate HR</button></li>
                <li className="pt-2"><button onClick={() => setCurrentPage('INDUSTRIES')} className="font-bold text-navy hover:underline">View All Industries</button></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-navy mb-5 tracking-wide">Platform</h5>
              <ul className="space-y-3 text-gray-500">
                <li><button onClick={() => setCurrentPage('FEATURE_CRM')} className="hover:text-goldDark transition-colors text-left">CRM & Intake</button></li>
                <li><button onClick={() => setCurrentPage('FEATURE_COMPLIANCE')} className="hover:text-goldDark transition-colors text-left">Compliance & VEVO</button></li>
                <li><button onClick={() => setCurrentPage('FEATURE_AI')} className="hover:text-goldDark transition-colors text-left">AI Automation</button></li>
                <li><button onClick={() => setCurrentPage('FEATURE_PORTAL')} className="hover:text-goldDark transition-colors text-left">Client Portal</button></li>
                <li><button onClick={() => setCurrentPage('FEATURE_TASKS')} className="hover:text-goldDark transition-colors text-left">Task Management</button></li>
                <li><button onClick={() => setCurrentPage('FEATURE_FORMS')} className="hover:text-goldDark transition-colors text-left">Form Automation</button></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-navy mb-5 tracking-wide">Advanced Modules</h5>
              <ul className="space-y-3 text-gray-500">
                <li><button onClick={() => setCurrentPage('FEATURE_TRUST')} className="hover:text-goldDark transition-colors text-left">Trust Accounting</button></li>
                <li><button onClick={() => setCurrentPage('FEATURE_BILLING')} className="hover:text-goldDark transition-colors text-left">Billing & Invoicing</button></li>
                <li><button onClick={() => setCurrentPage('FEATURE_COMMISSION')} className="hover:text-goldDark transition-colors text-left">Commission Tracking</button></li>
                <li><button onClick={() => setCurrentPage('FEATURE_MULTIOFFICE')} className="hover:text-goldDark transition-colors text-left">Multi-Office</button></li>
                <li><button onClick={() => setCurrentPage('FEATURE_STAFF_PORTAL')} className="hover:text-goldDark transition-colors text-left">Staff Portal</button></li>
                <li><button onClick={() => setCurrentPage('FEATURE_ADMIN_PORTAL')} className="hover:text-goldDark transition-colors text-left">Admin Portal</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6">
              <p className="text-gray-400 hover:text-navy cursor-pointer">Privacy Policy</p>
              <p className="text-gray-400 hover:text-navy cursor-pointer">Terms of Service</p>
              <p className="text-gray-400 hover:text-navy cursor-pointer">Sitemap</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
               <Shield className="h-4 w-4 text-growth" />
               <span className="text-xs font-semibold">SOC2 Type II Compliant & ISO 27001 Certified</span>
            </div>
            <p className="text-gray-400">© 2024 Immistack Inc.</p>
          </div>
        </div>
      </footer>

      {/* The CRM Modal */}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)}>
        <WaitlistForm />
      </WaitlistModal>

    </div>
  );
};

export default App;