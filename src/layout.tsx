// src/layout.tsx
import React from "react";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      {children}
    </div>
  );
}
