"use client"

import React, { useEffect, useRef } from 'react'

export function CustomCursor() {
  const cursorOutlineRef = useRef<HTMLDivElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const cursorPosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const cursor = cursorOutlineRef.current
    if (!cursor) return

    const moveCursor = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      if (cursor) {
        // Add easing to create smoother movement
        const easingFactor = 0.08 // Decrease this value for more delay

        const dx = mousePosition.current.x - cursorPosition.current.x
        const dy = mousePosition.current.y - cursorPosition.current.y

        cursorPosition.current.x += dx * easingFactor
        cursorPosition.current.y += dy * easingFactor

        cursor.style.left = `${cursorPosition.current.x}px`
        cursor.style.top = `${cursorPosition.current.y}px`
      }
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', moveCursor)
    animate()

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return <div ref={cursorOutlineRef} className="cursor-dot-outline" />
}