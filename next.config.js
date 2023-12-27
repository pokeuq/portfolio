/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    }
    // images: {
    //     remotePatterns: [
    //         {
    //             protocol: 'https',
    //             hostname: 'i.pinimg.com'
    //         }
    //     ]
    // }
}

module.exports = nextConfig
