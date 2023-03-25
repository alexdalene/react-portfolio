import './global.scss'

export const metadata = {
  title: 'Alex Dalene | Frontend Developer',
  description: 'Take a look at my portfolio, made with HTML, CSS, React & Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
