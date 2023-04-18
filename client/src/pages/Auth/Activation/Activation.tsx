import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {activate} from '../../../services/auth';

const Activation = () => {
    const {activationToken} = useParams();

    useEffect(() => {
        if (activationToken) {
            activate(activationToken);
        }
    }, [activationToken]);

    return <div>Activation</div>;
};

export default Activation;
