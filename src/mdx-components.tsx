import type { MDXComponents } from "mdx/types";
import { useMDXComponents as getComponents } from "./components/blog/mdx-components";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return getComponents(components);
}
