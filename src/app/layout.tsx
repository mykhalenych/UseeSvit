import {Roboto} from 'next/font/google';

import type {Metadata} from 'next';
import ReduxProvider from './redux/redux-provider';
import Theme from './Theme';
import Navigation from './components/common/Navigation/Navigation';
import {Main} from './components/main/Styles';
import {Footer} from './components/footer/Styles';

const roboto = Roboto({
    subsets: ['cyrillic', 'latin'],
    weight: ['300', '400', '500', '700', '900'],
    variable: '--roboto',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'UseeSvit',
    description: 'UseeSvit',
};

type Props = {
    children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({children}) => {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <ReduxProvider>
                    <Theme>
                        <Navigation />
                        <Main>{children}</Main>
                        <Footer />
                    </Theme>
                </ReduxProvider>
            </body>
        </html>
    );
};

export default RootLayout;
