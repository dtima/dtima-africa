'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { MapPin, ChevronDown, X, Share2, Facebook, Twitter, Linkedin, Copy, Check, Link } from 'lucide-react';
import { 
  Dialog, 
  DialogContent,
  DialogClose
} from '@/components/ui/Dialog';

interface CouncilProps {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  region: string;
  intro: string;
  economicPotential: string;
  investmentOpportunities: string;
  investmentNeeds: string;
  contact: string;
  email: string;
}

export function CouncilCard({ council }: { council: CouncilProps }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'economic' | 'investment' | 'needs' | 'contact'>('economic');
  const [copied, setCopied] = useState(false);
  
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Check if this council is active based on URL parameters
  useEffect(() => {
    const councilId = searchParams.get('council');
    if (councilId === council.id && !isModalOpen) {
      setIsModalOpen(true);
    }
  }, [searchParams, council.id, isModalOpen]);
  
  // Handle modal open/close with URL parameter
  const handleOpenModal = () => {
    setIsModalOpen(true);
    updateUrlWithCouncil(council.id);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    updateUrlWithCouncil(null);
  };
  
  // Update URL when opening/closing the modal
  const updateUrlWithCouncil = (councilId: string | null) => {
    // Create a new URLSearchParams object
    const params = new URLSearchParams(searchParams.toString());
    
    if (councilId) {
      params.set('council', councilId);
    } else {
      params.delete('council');
    }
    
    // Update the URL without reloading the page
    const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
    router.push(newUrl, { scroll: false });
  };
  
  // Share functionality
  const getShareUrl = () => {
    return `${window.location.origin}${window.location.pathname}?council=${council.id}`;
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(getShareUrl());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl())}`, '_blank');
  };
  
  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(getShareUrl())}&text=${encodeURIComponent(`Check out ${council.name} in ${council.region}, ${council.country}`)}`, '_blank');
  };
  
  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getShareUrl())}`, '_blank');
  };

  return (
    <>
      <div 
        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
        onClick={handleOpenModal}
      >
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            {council.countryCode && (
              <div className="w-8 h-6 relative overflow-hidden rounded shadow-sm">
                <Image 
                  src={`/images/flags/${council.countryCode.toLowerCase()}.svg`}
                  alt={council.country}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/32x24?text=Flag';
                    target.onerror = null;
                  }}
                />
              </div>
            )}
            <h3 className="text-xl font-bold text-gray-900">{council.name}</h3>
          </div>
          
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{council.region}, {council.country}</span>
          </div>
          
          <p className="text-gray-700 line-clamp-3 mb-4">{council.intro}</p>
          
          <div className="flex justify-between items-center">
            <button 
              className="text-dtima-blue hover:text-dtima-blue-dark text-sm font-medium flex items-center"
              onClick={(e) => {
                e.stopPropagation();
                handleOpenModal();
              }}
            >
              View Details <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            
            <button
              className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
              onClick={(e) => {
                e.stopPropagation();
                copyToClipboard();
              }}
              title="Copy Link"
            >
              <Link className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-full max-w-3xl">
          <DialogClose className="absolute right-4 top-4 text-gray-500 hover:text-gray-700" onClick={handleCloseModal}>
            <X className="h-6 w-6" />
          </DialogClose>
          
          <div className="p-2 sm:p-4">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                {council.countryCode && (
                  <div className="w-10 h-7 relative overflow-hidden rounded shadow-sm">
                    <Image 
                      src={`/images/flags/${council.countryCode.toLowerCase()}.svg`}
                      alt={council.country}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/40x28?text=Flag';
                        target.onerror = null;
                      }}
                    />
                  </div>
                )}
                <h2 className="text-2xl font-bold text-gray-900">{council.name}</h2>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="relative">
                  <button 
                    className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                    onClick={copyToClipboard}
                    title="Copy link"
                  >
                    {copied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
                  </button>
                  {copied && (
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      Link copied!
                    </span>
                  )}
                </div>
                
                <button 
                  className="p-2 rounded-full text-blue-600 hover:bg-blue-50"
                  onClick={shareToFacebook}
                  title="Share on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </button>
                
                <button 
                  className="p-2 rounded-full text-sky-500 hover:bg-sky-50"
                  onClick={shareToTwitter}
                  title="Share on Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </button>
                
                <button 
                  className="p-2 rounded-full text-blue-700 hover:bg-blue-50"
                  onClick={shareToLinkedIn}
                  title="Share on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="flex items-center text-gray-600 mb-6">
              <MapPin className="h-5 w-5 mr-1" />
              <span>{council.region}, {council.country}</span>
            </div>
            
            <p className="text-gray-700 mb-8">{council.intro}</p>
            
            <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
              <button
                className={`px-4 py-2 text-sm font-medium ${activeTab === 'economic' ? 'text-dtima-blue border-b-2 border-dtima-blue' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('economic')}
              >
                Economic Potential
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium ${activeTab === 'investment' ? 'text-dtima-blue border-b-2 border-dtima-blue' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('investment')}
              >
                Investment Opportunities
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium ${activeTab === 'needs' ? 'text-dtima-blue border-b-2 border-dtima-blue' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('needs')}
              >
                Investment Needs
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium ${activeTab === 'contact' ? 'text-dtima-blue border-b-2 border-dtima-blue' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('contact')}
              >
                Contact
              </button>
            </div>
            
            <div className="min-h-[200px]">
              {activeTab === 'economic' && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Economic Potential</h3>
                  <p className="text-gray-700 whitespace-pre-line">{council.economicPotential}</p>
                </div>
              )}
              
              {activeTab === 'investment' && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Investment Opportunities</h3>
                  <p className="text-gray-700 whitespace-pre-line">{council.investmentOpportunities}</p>
                </div>
              )}
              
              {activeTab === 'needs' && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Council Investment Needs</h3>
                  <p className="text-gray-700 whitespace-pre-line">{council.investmentNeeds}</p>
                </div>
              )}
              
              {activeTab === 'contact' && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Location:</strong> {council.region}, {council.country}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Contact:</strong> {council.contact}
                  </p>
                  <p className="text-gray-700">
                    <strong>Email:</strong> {council.email}
                  </p>
                </div>
              )}
            </div>
            
            {/* Share link section */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-sm text-gray-500 flex items-center">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share this council with others
                </p>
                
                <div className="flex items-center gap-2">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      value={typeof window !== 'undefined' ? getShareUrl() : ''}
                      readOnly
                      className="w-full py-2 px-3 pr-10 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-1 focus:ring-dtima-blue focus:border-dtima-blue bg-gray-50"
                    />
                    <button
                      onClick={copyToClipboard}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
} 