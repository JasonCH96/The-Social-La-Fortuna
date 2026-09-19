import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';

const sans = DM_Sans({ variable: '--font-sans-custom', subsets: ['latin'] });
const display = Playfair_Display({ variable: '--font-display', subsets: ['latin'], style: ['normal', 'italic'] });
export const metadata: Metadata = {
  metadataBase: new URL('https://the-social-fortuna.jasoncastroh.chatgpt.site'),
  title: 'The Social Fortuna | Stay in the Heart of La Fortuna',
  description: 'A fresh, social stay steps from downtown La Fortuna, with comfortable rooms, fast Wi-Fi, air conditioning and easy access to Arenal adventures.',
  openGraph: { title: 'The Social Fortuna', description: 'Stay close. Feel connected.', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'The Social Fortuna', description: 'Stay close. Feel connected.', images: ['/og.png'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${sans.variable} ${display.variable}`}>{children}</body></html>; }
