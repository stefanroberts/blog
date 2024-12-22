"use client"

import * as React from "react"
import Prism from "prismjs"
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-tsx"
import "prismjs/components/prism-bash"
import "prismjs/components/prism-markdown"
import "prismjs/components/prism-json"
import "prismjs/components/prism-css"
import "prismjs/components/prism-python"
import "prismjs/components/prism-rust"
import "prismjs/components/prism-go"

export function CodeBlock({ children, className }: { children: string, className?: string }) {
  React.useEffect(() => {
    Prism.highlightAll()
  }, [children])

  // Extract the language from className (format: "language-xxx")
  const language = className?.replace('language-', '') || 'plaintext'

  return (
    <pre className={className}>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  )
}

