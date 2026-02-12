"use client"
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import React, { useState, useEffect, useCallback } from 'react'

export const Search = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const [searchTerm, setSearchTerm] = useState(searchParams.get('query')?.toString() || '')

  // Debounced search: waits 400ms after user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams)
      if (searchTerm) {
        params.set('query', searchTerm)
      } else {
        params.delete('query')
      }
      replace(`${pathname}?${params.toString()}`)
    }, 400)

    return () => clearTimeout(timer)
  }, [searchTerm])

  return (
    <div className="relative">
      {/* Search icon */}
      <svg
        className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)] pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search events..."
        className="w-64 pl-10 pr-4 py-2.5 rounded-xl text-sm transition-all duration-300 focus:w-80 focus:outline-none focus:ring-2"
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--glass-border)',
          color: 'var(--text-primary)',
          backdropFilter: 'blur(12px)',
        }}
        onFocus={(e) => {
          e.target.style.borderColor = 'var(--accent-blue)';
          e.target.style.boxShadow = '0 0 20px var(--glow-color)';
          e.target.style.ringColor = 'rgba(102, 126, 234, 0.3)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = 'var(--glass-border)';
          e.target.style.boxShadow = 'none';
        }}
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
    </div>
  )
}
