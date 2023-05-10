import {Link} from 'react-router-dom';
import {styled} from '@mui/material/styles';

export const StyledLink = styled(Link)(() => ({
    height: 24,
}));
export const BackgroundDiv = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
}));
