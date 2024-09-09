/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'https://shopdienmay-api.vercel.app',
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
