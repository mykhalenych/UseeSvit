/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GOOGLE_API_KEY: 'AIzaSyAoT2HFogK44-dCNHaXa0iAUA5QSu_kPG8',
        CLIENT_ORIGIN: 'http://localhost:3000',
        CLIENT_URL: 'http://localhost:3000',
        POSTGRES_DB_LINK: 'localhost',
        POSTGRES_DB_USER: 'postgres',
        POSTGRES_DB_PASSWORD: 'hasnsvj9a',
        SMTP_HOST1: 'imap.gmail.com',
        SMTP_HOST: 'imap.gmail.com',
        SMTP_PORT: 587,
        SMTP_USER: 'mykhalenychm@gmail.com',
        SMTP_PASSWORD: 'pxrkvceuivkytovp',
        JWT_ACCESS_SECRET: 'taras123',
        JWT_REFRESH_SECRET: 'taras1234',
    },
};

module.exports = nextConfig;
