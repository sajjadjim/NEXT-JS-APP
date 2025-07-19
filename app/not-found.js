import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div>
    <h1 style={{ fontSize: '3rem', color: '#ff4c60', marginBottom: '1rem' }}>404 - Page Not Found</h1>
    <p style={{ fontSize: '1.25rem', color: '#333', marginBottom: '2rem' }}>
        Sorry, the page you are looking for does not exist.
    </p>
    <Link
        href="/"
        style={{
            display: 'inline-block',
            padding: '0.75rem 2rem',
            background: 'linear-gradient(90deg, #ff4c60 0%, #f9d423 100%)',
            color: '#fff',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: 'bold',
            boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
            transition: 'background 0.3s'
        }}
    >
        Go Home
    </Link>
    </div>
  )
}
