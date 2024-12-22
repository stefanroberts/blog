'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Hero() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribe:', email)
  }

  return (
    <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white">
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Thoughts, stories and ideas.
        </h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
          <Input
            type="email"
            placeholder="jamie@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            required
          />
          <Button type="submit" className="bg-pink-600 hover:bg-pink-700">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  )
}

