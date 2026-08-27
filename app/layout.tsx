import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TalentFit AI',
  description: 'AI-powered talent management and recruitment platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
