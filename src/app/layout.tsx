import {Inter} from 'next/font/google';

import type {Metadata} from 'next';
import ReduxProvider from './redux/redux-provider';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'UseeSvit',
    description: 'UseeSvit',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ReduxProvider>{children}</ReduxProvider>
            </body>
        </html>
    );
}
