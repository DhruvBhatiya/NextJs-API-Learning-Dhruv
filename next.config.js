/** @type {import('next').NextConfig} */
const nextConfig = {
 
  images: {
    domains: ["i.dummyjson.com"],
  },

  // rediction source url to redirect destination url
  redirects: async () => {
    return [
      {
        source: "/redirect",
        destination: "/users_ssg",
        permanent: false,
      },
      {
        source: "/redirect/:redirectId",
        destination: "/about",
        permanent: false,
      },
    ];
  },

  env: {
    site_domain: 'http://localhost:3000',
  },

  // output: "export" // static build create // out folder create and inside out folder html file created
};

module.exports = nextConfig;
