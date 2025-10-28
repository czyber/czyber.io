import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { ReadingProgress } from "@/components/blog/reading-progress";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: post.title,
      description: post.description,
    };
  } catch {
    return {
      title: "Post Not Found",
    };
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const components = useMDXComponents({});

  return (
    <>
      <ReadingProgress />
      <Container size="md">
        <article>
          <header className="mb-8">
            <div className="flex items-center gap-3 text-muted-foreground text-sm mb-3">
              <time>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>

          <h1 className="text-3xl md:text-4xl font-semibold mb-3">
            {post.title}
          </h1>

          <p className="text-muted-foreground">
            {post.description}
          </p>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-secondary border border-border px-2 py-0.5 rounded text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-invert max-w-none">
          <MDXRemote
            source={post.content}
            components={components}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  [
                    rehypePrettyCode,
                    {
                      theme: "vesper",
                      keepBackground: true,
                      defaultLang: "plaintext",
                      onVisitLine(node: any) {
                        if (node.children.length === 0) {
                          node.children = [{ type: "text", value: " " }];
                        }
                      },
                      onVisitHighlightedLine(node: any) {
                        if (!node.properties.className) {
                          node.properties.className = [];
                        }
                        node.properties.className.push("highlighted");
                      },
                    },
                  ],
                ],
              },
            }}
          />
        </div>
      </article>
    </Container>
    </>
  );
}
