import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins, Open_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'GreenRoot Academy | Learn Tech. Solve Climate. See Your Impact.',
  description: 'Tech-driven sustainability courses that transparently track Green Endowment impact.',
  keywords: 'Green tech education, sustainability courses, climate impact, tech skills, environmental education',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${openSans.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}