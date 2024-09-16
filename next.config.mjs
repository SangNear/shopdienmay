/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'api.dienmaygiatotsaigon.vn', // Corrected hostname
                pathname: '/images/**',
            },
            {
                protocol: 'https',
                hostname: 'shopdienmay.vercel.app',
                port: '1999',
                pathname: '/images/**',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1999',
                pathname: '/images/**',
            },
        ],
    },
};

export default nextConfig;