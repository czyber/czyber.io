"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h1 className="text-3xl md:text-4xl font-semibold mb-3">{title}</h1>
      {description && (
        <p className="text-muted-foreground max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
