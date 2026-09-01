import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Mother They Called a Witch Built a Way Out',
  description:
    'A fictionalized investigative feature about Lin Mei, the women she helped, and the Mending House.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
