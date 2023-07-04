/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {useTranslation} from 'react-i18next';

import store from './redux/store';
import Theme from './Theme';

const App = () => {
    const {i18n} = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(navigator.language);
    }, []);

    return (
        <Provider store={store}>
            <Theme />
        </Provider>
    );
};

export default App;
