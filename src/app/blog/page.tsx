import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/blog/page-header";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Bernhard Hauke",
  description: "Thoughts on software engineering, technology, and building products.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Container size="md">
      <PageHeader
        title="Blog"
        description="Thoughts on software engineering, technology, and building products."
      />

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`} className="block">
              <time className="text-muted-foreground text-sm block mb-2">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>

              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>

              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                {post.description}
              </p>

              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-muted-foreground text-center py-12">
          No posts yet. Check back soon!
        </p>
      )}
    </Container>
  );
}
