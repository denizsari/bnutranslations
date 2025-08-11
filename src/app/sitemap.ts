import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getAllPosts } from "@/lib/md";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = SITE_URL.replace(/\/$/, "");
  const staticRoutes = ["/", "/about", "/services", "/testimonials", "/contact", "/blog"].map(
    (route) => ({ url: `${base}${route}`, changeFrequency: "monthly" as const, priority: 0.7 })
  );
  const posts = await getAllPosts();
  const blogRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...staticRoutes, ...blogRoutes];
}


