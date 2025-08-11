import Link from "next/link";
import { getAllPosts } from "@/lib/md";

export const metadata = {
  title: "Blog",
  description: "Çeviri ile ilgili makaleler ve ipuçları",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl font-semibold">Blog</h1>
      <ul className="mt-6 space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">
              {post.data.title}
            </Link>
            <p className="text-sm text-muted-foreground">{post.data.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


