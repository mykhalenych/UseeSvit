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

    return <div>Welcome to UseeSvit</div>;
};

export default Activation;
