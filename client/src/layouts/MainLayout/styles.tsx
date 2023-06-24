import {styled} from '@mui/material/styles';

import BackgroundImag from '../../assets/img/mainBg.png';
import MainPerson from '../../assets/img/mainPerson.png';

export const Nav = styled('nav')(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingInline: theme.spacing(4),
    paddingBlock: theme.spacing(2),
    height: 100,
}));

export const BgDiv = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.default,
    height: '100vh',
    overflow: 'hidden',
}));

export const Main = styled('main')(() => ({
    background: `url(${BackgroundImag})`,
    height: 'calc(100vh - 200px)',
    overflow: 'hidden',
    backgroundSize: 'cover',
}));

export const Footer = styled('footer')(({theme}) => ({
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: 100,
    backgroundColor: theme.palette.primary.main,
}));

export const ImgWrap = styled('div')(() => ({
    background: `url(${MainPerson})`,
    width: '40%',
    height: '100%',
    backgroundSize: 'cover',
}));
