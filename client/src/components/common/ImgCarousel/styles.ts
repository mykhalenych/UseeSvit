import {styled} from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';
import {CarouselProps} from './types';

const StyledCarousel = styled(Carousel)<CarouselProps>(() => ({
    width: '50%',
    height: '90vh',
}));

export default StyledCarousel;
