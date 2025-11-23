import type { Metadata } from "next";
import "./globals.css";
import DynamicNav from "./components/DynamicNav";

export const metadata: Metadata = {
  title: "Portfolio | Mozammil",
  description: "A collection of my work and projects - experimental, chaotic, and creative",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#fbbf24" />
      </head>
      <body className="antialiased">
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <DynamicNav />
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ flex: 1 }}>
            {children}
          </main>
        <footer
          className="border-t-4 border-black mt-auto"
          style={{
            transform: 'rotate(-0.7deg)',
            background: '#1e293b',
            boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.3)',
            position: 'relative',
            zIndex: 10
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6" style={{ transform: 'rotate(0.6deg)' }}>
            <p
              className="text-center text-sm font-bold"
              style={{
                transform: 'rotate(-1.8deg) translateX(5px)',
                display: 'inline-block',
                width: '100%',
                color: 'white',
                textShadow: '2px 2px 0 black'
              }}
            >
              © {new Date().getFullYear()} Mozammil Sheikh. All rights reserved.
            </p>
          </div>
        </footer>
        </div>
      </body>
    </html>
  );
}
