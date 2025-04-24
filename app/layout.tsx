import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

// Exporting the metadata like this will make it available to all pages in the app.
// The values are automatically added in the <head> tag of the document.
export const metadata: Metadata = {
  // The title is a template string that will be used to generate the title of the page.
  // The %s will be replaced with the title of the page when specified in a Matadata object in a child page.
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Add the custom font to the entire site.  Use the tailwind antialiased class to make the font look better (optional) */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
