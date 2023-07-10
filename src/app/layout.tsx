import {Inter} from 'next/font/google';

import type {Metadata} from 'next';
import ReduxProvider from './redux/redux-provider';
import Theme from './Theme';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'UseeSvit',
    description: 'UseeSvit',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ReduxProvider>
                    <Theme>{children}</Theme>
                </ReduxProvider>
            </body>
        </html>
    );
}
