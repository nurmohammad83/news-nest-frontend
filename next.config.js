/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      },
    images:{
        domains:["res.cloudinary.com","i.ibb.co","images.prothomalo.com"]
    }
}

module.exports = nextConfig
