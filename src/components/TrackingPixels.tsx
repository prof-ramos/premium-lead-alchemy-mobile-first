import { useEffect } from "react";

const TrackingPixels = () => {
  useEffect(() => {
    // Facebook Pixel
    const initFacebookPixel = () => {
      // Replace 'YOUR_PIXEL_ID' with actual Facebook Pixel ID
      const pixelId = 'YOUR_PIXEL_ID';
      
      if (typeof window !== 'undefined' && !window.fbq) {
        const script = document.createElement('script');
        script.innerHTML = `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
        `;
        document.head.appendChild(script);

        // No script fallback
        const noscript = document.createElement('noscript');
        noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1" />`;
        document.head.appendChild(noscript);
      }
    };

    // Google Analytics 4
    const initGoogleAnalytics = () => {
      // Replace 'G-XXXXXXXXXX' with actual GA4 Measurement ID
      const measurementId = 'G-XXXXXXXXXX';
      
      if (typeof window !== 'undefined' && !window.gtag) {
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_title: 'Tráfego Imobiliário de Alta Performance - Landing Page',
            page_location: window.location.href,
            custom_map: {'custom_parameter_1': 'real_estate_course'}
          });
        `;
        document.head.appendChild(script2);

        // Set global gtag function
        window.gtag = function() {
          window.dataLayer.push(arguments);
        };
      }
    };

    // Google Tag Manager (Alternative to GA4)
    const initGoogleTagManager = () => {
      // Replace 'GTM-XXXXXXX' with actual GTM Container ID
      const containerId = 'GTM-XXXXXXX';
      
      if (typeof window !== 'undefined' && !window.google_tag_manager) {
        const script = document.createElement('script');
        script.innerHTML = `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${containerId}');
        `;
        document.head.appendChild(script);

        // No script fallback for body
        const noscript = document.createElement('noscript');
        noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${containerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
        document.body.appendChild(noscript);
      }
    };

    // Initialize tracking pixels
    initFacebookPixel();
    initGoogleAnalytics();
    // initGoogleTagManager(); // Use either GA4 or GTM, not both

    // Custom events for lead generation tracking
    const trackLeadEvent = (eventName: string, parameters?: any) => {
      // Facebook Pixel event
      if (window.fbq) {
        window.fbq('track', eventName, parameters);
      }
      
      // Google Analytics event
      if (window.gtag) {
        window.gtag('event', eventName, {
          event_category: 'lead_generation',
          event_label: 'real_estate_course',
          ...parameters
        });
      }
    };

    // Make tracking functions available globally
    window.trackLeadEvent = trackLeadEvent;

    // Track page view for the landing page
    trackLeadEvent('ViewContent', {
      content_type: 'landing_page',
      content_name: 'Tráfego Imobiliário de Alta Performance'
    });

  }, []);

  return null; // This component doesn't render anything
};

// Extend window interface for TypeScript
declare global {
  interface Window {
    fbq: any;
    gtag: any;
    google_tag_manager: any;
    dataLayer: any;
    trackLeadEvent: (eventName: string, parameters?: any) => void;
  }
}

export default TrackingPixels;