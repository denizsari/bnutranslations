import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export type BlogFrontmatter = {
  title: string;
  date?: string;
  excerpt?: string;
};

export async function getAllPosts(): Promise<Array<{ slug: string; data: BlogFrontmatter }>> {
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
          const frontmatter = data as BlogFrontmatter;
          return { slug, data: frontmatter };
        })
    );
    return posts.sort((a, b) => (String(a.data.date) < String(b.data.date) ? 1 : -1));
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<{ data: BlogFrontmatter; html: string } | null> {
  try {
    const fullPath = path.join(BLOG_DIR, `${slug}.md`);
    const file = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(file);
    const processed = await remark().use(html).process(content);
    const contentHtml = processed.toString();
    return { data: data as BlogFrontmatter, html: contentHtml };
  } catch {
    return null;
  }
}


