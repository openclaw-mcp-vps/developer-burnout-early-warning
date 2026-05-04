import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Burnout Radar — Predict Developer Burnout Early',
  description: 'Analyzes Git and Slack patterns to identify early burnout signals for engineering managers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="095114b0-445c-4aeb-8cd3-15943a662ffe"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
