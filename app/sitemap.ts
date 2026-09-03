import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://swajitpatwari.com";

const routes = [
  "",
  "/work/cs-intelligence",
  "/work/churn-risk-calculator",
  "/wooqer-experience",
  "/wooqer-experience/map",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.8,
  }));
}
