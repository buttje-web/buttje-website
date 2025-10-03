// Google Analytics conversion tracking utilities

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

// Track phone call conversions
export const trackPhoneCall = (phoneNumber: string, location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_call', {
      event_category: 'engagement',
      event_label: phoneNumber,
      custom_parameters: {
        location: location,
        phone_number: phoneNumber
      }
    });
    
    // Google Ads conversion tracking
    window.gtag('event', 'conversion', {
      send_to: 'AW-17533089249/phone_call',
      value: 1.0,
      currency: 'EUR'
    });
  }
};

// Track email clicks
export const trackEmailClick = (email: string, location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'email_click', {
      event_category: 'engagement',
      event_label: email,
      custom_parameters: {
        location: location,
        email: email
      }
    });
    
    // Google Ads conversion tracking
    window.gtag('event', 'conversion', {
      send_to: 'AW-17533089249/email_click',
      value: 1.0,
      currency: 'EUR'
    });
  }
};

// Track service page visits
export const trackServicePageVisit = (serviceName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'service_page_visit', {
      event_category: 'engagement',
      event_label: serviceName,
      custom_parameters: {
        service: serviceName
      }
    });
  }
};

// Track contact form interactions (if you add forms later)
export const trackContactFormSubmit = (formType: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'conversion',
      event_label: formType,
      custom_parameters: {
        form_type: formType
      }
    });
    
    // Google Ads conversion tracking
    window.gtag('event', 'conversion', {
      send_to: 'AW-17533089249/form_submit',
      value: 1.0,
      currency: 'EUR'
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'button_click', {
      event_category: 'engagement',
      event_label: buttonName,
      custom_parameters: {
        location: location,
        button: buttonName
      }
    });
  }
};
