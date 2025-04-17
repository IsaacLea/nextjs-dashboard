import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

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
