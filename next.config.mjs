const isGithubPages = process.env.GITHUB_PAGES === "true";
const githubPagesBasePath =
  "/https-github.com-runzegao2018-cloud-runze-gao-academic-website";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isGithubPages ? githubPagesBasePath : "",
  assetPrefix: isGithubPages ? `${githubPagesBasePath}/` : "",
  images: {
    unoptimized: true
  },
  trailingSlash: true
};

export default nextConfig;
