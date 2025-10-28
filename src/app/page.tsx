import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/blog/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bernhard Hauke",
  description: "Thoughts on software engineering, technology, and building products.",
};

export default function Home() {
  return (
    <Container>
      <div className="min-h-[80vh] flex flex-col justify-center">
        <PageHeader
          title="Hey, I'm czyber"
          description="Thoughts on software engineering, technology, and building products."
        />

        <div className="flex gap-3">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Read the Blog
          </Link>
        </div>
      </div>
    </Container>
  );
}
