import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export async function getAllPosts() {
  try {
    const files = await fs.readdir(BLOG_DIR);
    const posts = await Promise.all(
      files
        .filter((f) => f.endsWith(".md"))
        .map(async (filename) => {
          const slug = filename.replace(/\.md$/, "");
          const fullPath = path.join(BLOG_DIR, filename);
          const file = await fs.readFile(fullPath, "utf8");
          const { data } = matter(file);
          return { slug, data } as { slug: string; data: any };
        })
    );
    return posts.sort((a, b) => (a.data.date < b.data.date ? 1 : -1));
  } catch {
    return [] as Array<{ slug: string; data: any }>;
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const fullPath = path.join(BLOG_DIR, `${slug}.md`);
    const file = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(file);
    const processed = await remark().use(html).process(content);
    const contentHtml = processed.toString();
    return { data, html: contentHtml } as { data: any; html: string };
  } catch {
    return null;
  }
}


