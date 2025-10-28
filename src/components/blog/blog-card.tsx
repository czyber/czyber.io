"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { PostMetadata } from "@/lib/posts";

interface BlogCardProps {
  post: PostMetadata;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="bg-card border border-border rounded-md p-5 hover:border-primary/50 transition-all duration-200 h-full">
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
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

          <h2 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {post.title}
          </h2>

          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
            {post.description}
          </p>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
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
        </div>
      </Link>
    </motion.article>
  );
}
