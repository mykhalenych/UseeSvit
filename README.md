# README #

### Prepare for running app local

* download postgresql from https://www.postgresql.org/download/ <br />
* Open a project in code redactor or web IDE<br />
* Open console<br />
* Go to `client` directory<br />
* Run `npm install`<br />
* Go to `server` directory<br />
* create .env file with your credential in `server` directory<br />
* Run `npm install`<br />
* Go to `root` directory<br />
* Run `npm install`<br />
* From `root` directory `npm start` <br />


## React Component code styleguide

### Component structure

    import React, { useEffect, useState, useMemo, useCallback } from 'react';
    import { useSelector } from 'react-redux';
    import lib from 'lib';
    
    import { fetchData } from '../fetchData'
    import { selectList, selectLoading } from '../selectors'
    import { useAppDispatch } from '../../store';
    import hooks from './hooks';
    import utils from './utils';
    import helper from './helper';
    import config from './config';
    import constants from './constants';
    import Component from './Component';
    import Button from '../common/Button';
    import IValues from './types';

    const MyComponent = () => {
        const [editMode, setEditMode] = useState(false);
        const [values, setValues] = useState<IValues[]>([]);

        const dispatch = useAppDispatch();
        const list = useSelector(selectList)
        const isLoading = useSelector(selectLoading(slicesName, thunksName || thunksNames[]));

        const valuesIds = useMemo(() => values.map(value => value.id), [values]);

        ...hooks, ...localStorage, ...constants;

        const getData = useCallback(() => {}, []);
        
        const handleClick = useCallback((item) => setValues(item),[]);
 
        useEffect(() => {
            dispatch(fetchData());
        }, [dispatch]);
        
        return (
            <>
                <Component getData={getData} />
                <Button onClick={handleClick}>Click</Button>
            </>
        );
    };

    export default MyComponent;

### Project folder/file structure

    components
        common
            Button
                index.ts
                Button.tsx
                ...otherFiles
            Modal
            ...
        pages
            Login
                Login.tsx
                index.ts
                ...otherFiles


### Branch naming

* Use git-flow for naming branch https://danielkummer.github.io/git-flow-cheatsheet/
* Commit message should include branch name.
