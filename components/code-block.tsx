"use client"

import React, { useEffect, useRef } from 'react'
import Prism from 'prismjs'
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

interface CodeBlockProps {
  language: string;
  code: string;
}

export function CodeBlock({ language, code }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [code])

  return (
    <pre className={`language-${language} rounded-md`}>
      <code ref={codeRef} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  )
}

