import React from 'react';
import {Provider} from 'react-redux';

import store from './redux/store';
import {SnackbarProvider} from 'notistack';
import Theme from './Theme';

const App = () => {
    return (
        <Provider store={store}>
            <SnackbarProvider maxSnack={3} anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
                <Theme />
            </SnackbarProvider>
        </Provider>
    );
};

export default App;
