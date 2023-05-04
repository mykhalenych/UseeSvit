import React from 'react';
import {Provider} from 'react-redux';

import store from './redux/store';
import Theme from './Theme';

const test = 1;

const App = () => {
    return (
        <Provider store={store}>
            <Theme />
        </Provider>
    );
};

export default App;
