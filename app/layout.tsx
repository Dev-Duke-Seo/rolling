import type { Metadata } from 'next';
import '@/styles/global-styles/global.scss';

export const metadata: Metadata = {
  title: 'Rolling',
  description: '몰래 남기는 편지',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body id='root'>{children}</body>
    </html>
  );
}
