// https://nextjs.org/learn/dashboard-app/optimizing-fonts-images
// Loading custom fonts from next/font causes nextjs to compile them and turn them into static assets which optimizes page loads.

import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'], // list of subsets to pre-load
});