"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  showLineNumbers?: boolean;
  raw?: string;
  "data-language"?: string;
}

export function CodeBlock({
  children,
  className,
  title,
  showLineNumbers = false,
  raw,
  ...props
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  // Extract language from data-language prop or className
  const dataLanguage = props["data-language"];
  const language = dataLanguage || className?.replace(/language-/, "") || "plaintext";

  // Recursively extract text from React nodes
  const extractText = (node: any): string => {
    if (typeof node === "string") return node;
    if (typeof node === "number") return String(node);
    if (!node) return "";

    if (Array.isArray(node)) {
      // Handle line-by-line code (rehype-pretty-code wraps each line)
      return node
        .map((child) => {
          // If this is a line wrapper element, extract its text
          if (child?.props?.["data-line"] !== undefined) {
            return extractText(child.props.children);
          }
          return extractText(child);
        })
        .join("\n");
    }

    if (node.props) {
      if (node.props.children) {
        return extractText(node.props.children);
      }
    }

    return "";
  };

  // Get the raw code content for copying
  const getCodeContent = (): string => {
    if (raw) return raw;

    // Extract all text recursively
    let text = extractText(children);

    // Clean up: remove leading/trailing empty lines
    text = text.replace(/^\n+/, "").replace(/\n+$/, "");

    return text;
  };

  const handleCopy = async () => {
    const code = getCodeContent();
    if (!code) return;

    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className="group relative my-6 overflow-hidden rounded-lg border border-border bg-card">
      {/* Header with language and copy button */}
      <div className="flex items-center justify-between border-b border-border bg-muted/30 px-3 py-2 sm:px-4">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          {title && (
            <span className="text-xs font-medium text-muted-foreground truncate">
              {title}
            </span>
          )}
          {!title && (
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wide">
              {language}
            </span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-95 transition-transform flex-shrink-0"
          aria-label="Copy code to clipboard"
          type="button"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              <span className="hidden xs:inline">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="overflow-x-auto">
        <pre className="m-0 border-0 bg-transparent p-3 sm:p-4">
          <code
            className={className}
            data-line-numbers={showLineNumbers ? "" : undefined}
          >
            {children}
          </code>
        </pre>
      </div>
    </div>
  );
}
