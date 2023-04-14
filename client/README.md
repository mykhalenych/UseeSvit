# README #

### Prepare for running app local

* Open a project in code redactor or web IDE<br />
* Open console<br />
* Go to `client` directory<br />
* Run `npm start` <br />

## React Component code styleguide

### Component structure

    import React, { useEffect, useState, useMemo, useCallback } from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import lib from 'lib';
    
    import { fetchData } from '../fetchData'
    import { selectList, selectLoading } from '../selectors'
    import hooks from './hooks';
    import utils from './utils';
    import helper from './helper';
    import config from './config';
    import constants from './constants';
    import Component from './Component';
    import Button from '../common/Button'

    const MyComponent = () => {
        const [editMode, setEditMode] = useState(false);
        const [values, setValues] = useState([]);

        const dispatch = useDispatch();
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
        Projects
            Projects.tsx
            index.ts


