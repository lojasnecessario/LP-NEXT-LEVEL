export default async function handler(req: any, res: any) {
    // Configuração de CORS - permitindo todas as origens para facilidade (ajuste para produção)
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { eventName, eventData, eventId, sourceUrl } = req.body || {};

    // Em produção, use process.env para carregar variáveis de ambiente.
    // Valores default de fallback definidos pela requisição do usuário.
    const PIXEL_ID = process.env.VITE_META_PIXEL_ID || process.env.META_PIXEL_ID || '2027379061145709';
    const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN || 'EAADOLSqdIJcBQ6UZCqpXJO6lhzJncpGe0ygLj4vc2Od8EjppuPpBPlK4kQThHwk8ItnWoxPIWrNNfsNFZC8joNLFTGUXnIGC4W4g8mP0owqNzXmiR8PfTfHoBaQPld7472rv5SY3hi9cslDZBZCZC6Y78yU3pZC1PKejo2vaVKC8C1wtn4a2KfKNTCMxP7FAZDZD';

    if (!PIXEL_ID || !ACCESS_TOKEN) {
        console.error('Missing Meta CAPI credentials');
        return res.status(500).json({ error: 'Internal Server Error' });
    }

    const currentTimestamp = Math.floor(Date.now() / 1000);

    // Coletar dados do usuário da requisição atual
    const clientIpAddress = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || null;
    const clientUserAgent = req.headers['user-agent'] || null;

    const metaEvent = {
        data: [
            {
                event_name: eventName || 'Lead',
                event_time: currentTimestamp,
                action_source: 'website',
                event_id: eventId,
                event_source_url: sourceUrl,
                user_data: {
                    client_ip_address: clientIpAddress,
                    client_user_agent: clientUserAgent,
                },
                custom_data: eventData || {},
            }
        ]
    };

    try {
        const response = await fetch(`https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(metaEvent),
        });

        const result = await response.json();
        return res.status(200).json(result);
    } catch (error: any) {
        console.error('Error sending event to Meta CAPI:', error);
        return res.status(500).json({ error: 'Failed to send event to Meta' });
    }
}
