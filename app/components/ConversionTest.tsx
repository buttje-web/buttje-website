'use client';

import { trackPhoneCall, trackEmailClick, trackButtonClick } from '../utils/gtag';

export default function ConversionTest() {
  const testTracking = () => {
    console.log('Testing conversion tracking...');
    
    // Test phone call tracking
    trackPhoneCall('+4312366326442', 'test');
    
    // Test email tracking
    trackEmailClick('info@buttje.at', 'test');
    
    // Test button click tracking
    trackButtonClick('test_button', 'test_page');
    
    console.log('Conversion tracking test completed. Check Google Analytics and browser console.');
  };

  return (
    <div className="fixed bottom-4 left-4 bg-blue-500 text-white p-4 rounded-lg shadow-lg z-50">
      <h3 className="font-bold mb-2">Conversion Tracking Test</h3>
      <p className="text-sm mb-2">Click to test tracking functions</p>
      <button 
        onClick={testTracking}
        className="bg-white text-blue-500 px-3 py-1 rounded text-sm font-semibold hover:bg-gray-100"
      >
        Test Tracking
      </button>
    </div>
  );
}
