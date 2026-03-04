import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL ?? 'https://oralmax.com'),
  title: 'Southeast Oral & Maxillofacial Surgery | Charlotte & Albemarle',
  description: 'Expert oral and maxillofacial surgery in Charlotte and Albemarle, NC. Board-certified surgeons specializing in wisdom teeth, dental implants, jaw surgery, and facial trauma. Over 50 years of trusted care.',
  keywords: 'oral surgeon Charlotte, maxillofacial surgery Albemarle, wisdom teeth removal, dental implants NC, jaw surgery Charlotte, facial trauma, bone grafting',
  openGraph: {
    title: 'Southeast Oral Surgery',
    description: 'Board-certified oral surgeons serving Charlotte and Albemarle, NC',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
