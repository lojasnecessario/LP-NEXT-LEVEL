export const PIXEL_ID = (import.meta as any).env?.VITE_META_PIXEL_ID || '2027379061145709';

export const initMetaPixel = () => {
    if (!PIXEL_ID || typeof window === 'undefined') return;

    const scriptContent = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${PIXEL_ID}');
    fbq('track', 'PageView');
  `;

    const script = document.createElement('script');
    script.innerHTML = scriptContent;
    document.head.appendChild(script);

    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1" />`;
    document.head.appendChild(noscript);
};

export const trackMetaEvent = (eventName: string, eventData: Record<string, any> = {}) => {
    if (typeof window === 'undefined') return;

    // Generate a unique event ID for deduplication between Pixel and CAPI
    const eventId = crypto.randomUUID();

    // 1. Send to Client-Side Pixel
    if ((window as any).fbq) {
        (window as any).fbq('track', eventName, eventData, { eventID: eventId });
    }

    // 2. Send to Server-Side CAPI
    try {
        const payload = {
            eventName,
            eventData,
            eventId,
            sourceUrl: window.location.href,
        };

        fetch('/api/meta-capi', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).catch((err) => console.error('Error sending CAPI event:', err));
    } catch (error) {
        console.error('Failed to prepare CAPI event:', error);
    }
};
