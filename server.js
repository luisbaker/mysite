const express = require('express');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;

// Access code: the site stays closed until SITE_CODE is set in the environment
const SITE_CODE = process.env.SITE_CODE || '';
const ACCESS_COOKIE = 'site_access';
const ACCESS_TOKEN = SITE_CODE
    ? crypto.createHmac('sha256', SITE_CODE).update('portfolio-access').digest('hex')
    : '';

// Koyeb terminates TLS in front of the app
app.set('trust proxy', 1);

// Health check for Koyeb
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Site is running!' });
});

function safeEqual(a, b) {
    const hashA = crypto.createHash('sha256').update(String(a)).digest();
    const hashB = crypto.createHash('sha256').update(String(b)).digest();
    return crypto.timingSafeEqual(hashA, hashB);
}

function hasAccess(req) {
    if (!ACCESS_TOKEN) return false;
    const cookies = (req.headers.cookie || '').split(';').map(c => c.trim());
    const cookie = cookies.find(c => c.startsWith(`${ACCESS_COOKIE}=`));
    if (!cookie) return false;
    return safeEqual(cookie.slice(ACCESS_COOKIE.length + 1), ACCESS_TOKEN);
}

function lockPage(wrongCode) {
    return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    <title>Luis Ferreira - Accès restreint</title>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&family=Inter:wght@400;600&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Inter', sans-serif;
            background: #0a0a0a;
            color: #e2e8f0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
        }
        .lock {
            width: 100%;
            max-width: 400px;
            background: #1a1a1a;
            border: 1px solid #333;
            border-radius: 16px;
            padding: 2.5rem 2rem;
            text-align: center;
        }
        .logo {
            font-family: 'JetBrains Mono', monospace;
            font-size: 2rem;
            color: #00d4aa;
            margin-bottom: 1rem;
        }
        h1 { font-size: 1.25rem; margin-bottom: 0.5rem; }
        p { color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.5rem; line-height: 1.6; }
        input {
            width: 100%;
            padding: 0.85rem 1rem;
            border-radius: 8px;
            border: 1px solid #333;
            background: #0a0a0a;
            color: #e2e8f0;
            font-size: 1rem;
            margin-bottom: 1rem;
        }
        input:focus { outline: none; border-color: #00d4aa; }
        button {
            width: 100%;
            padding: 0.85rem 1rem;
            border: none;
            border-radius: 8px;
            background: #00d4aa;
            color: #000;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
        }
        button:hover { background: #00b894; }
        .error { color: #ff6b6b; font-size: 0.9rem; margin: -0.25rem 0 1rem; }
    </style>
</head>
<body>
    <form class="lock" method="POST" action="/unlock">
        <div class="logo">LF</div>
        <h1>Portfolio de Luis Ferreira</h1>
        <p>Ce portfolio est temporairement en accès restreint. Saisissez le code d'accès pour continuer.</p>
        <input type="password" name="code" placeholder="Code d'accès" autocomplete="current-password" required autofocus>
        ${wrongCode ? '<div class="error">Code incorrect.</div>' : ''}
        <button type="submit">Entrer</button>
    </form>
</body>
</html>`;
}

app.post('/unlock', express.urlencoded({ extended: false }), (req, res) => {
    if (ACCESS_TOKEN && safeEqual(req.body.code || '', SITE_CODE)) {
        res.cookie(ACCESS_COOKIE, ACCESS_TOKEN, {
            httpOnly: true,
            sameSite: 'lax',
            secure: req.secure,
            maxAge: 30 * 24 * 60 * 60 * 1000
        });
        return res.redirect(303, '/');
    }
    // Slow down code guessing
    setTimeout(() => {
        res.status(401).set('X-Robots-Tag', 'noindex').send(lockPage(true));
    }, 1000);
});

// Everything below requires the access cookie
app.use((req, res, next) => {
    if (hasAccess(req)) return next();
    res.status(401).set('X-Robots-Tag', 'noindex').send(lockPage(false));
});

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`🌐 Open http://localhost:${PORT} in your browser`);
    if (!SITE_CODE) {
        console.log('🔒 SITE_CODE is not set: the site stays closed');
    }
});
