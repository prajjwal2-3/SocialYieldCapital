/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            
          },
        
        ],
      },
};

export default nextConfig;
