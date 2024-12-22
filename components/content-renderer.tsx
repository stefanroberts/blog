"use client"

import React from 'react'
import { CodeBlock } from './code-block'

interface ContentRendererProps {
  content: string
}

export function ContentRenderer({ content }: ContentRendererProps) {
  const renderContent = () => {
    const parts = content.split(/(<CodeBlock.*?\/>)/)
    return parts.map((part, index) => {
      if (part.startsWith('<CodeBlock')) {
        const match = part.match(/language="([^"]+)" code="([^"]+)"/)
        if (match) {
          const [, language, encodedCode] = match
          const code = decodeURIComponent(encodedCode)
          return <CodeBlock key={index} language={language} code={code} />
        }
      }
      return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />
    })
  }

  return <div className="mdx">{renderContent()}</div>
}

