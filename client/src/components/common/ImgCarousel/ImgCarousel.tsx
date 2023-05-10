import React from 'react';
import StyledCarousel from './styles';

import forgotPassImage from '../../../assets/img/forgotPassImage.png';
import LogInImage from '../../../assets/img/LogInImage.png';
import SignUpImage from '../../../assets/img/SignUpImage.png';
import SignUpWithEmail from '../../../assets/img/SignUpWithEmail.png';

const ImgCarousel = () => {
    return (
        <StyledCarousel showArrows={false}>
            <img src={forgotPassImage} />
            <img src={SignUpImage} />
            <img src={SignUpWithEmail} />
            <img src={LogInImage} />
        </StyledCarousel>
    );
};

export default ImgCarousel;
