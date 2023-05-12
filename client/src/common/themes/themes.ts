import {createTheme} from '@mui/material/styles';
import type {Theme} from '@mui/material/styles';

import lightPalette from './lightPalette';
import darkPalette from './darkPalette';

export const toolbarHeights = {
    mobilePortrait: 60,
    mobileLandscape: 60,
    tabletDesktop: 79,
};

const createCommonTheme = (theme: Theme) =>
    createTheme({
        ...theme,
        breakpoints: {
            values: {
                xs: 0,
                sm: 608,
                md: 788,
                lg: 1086,
                xl: 1920,
            },
        },
        spacing: 8,
        mixins: {
            toolbar: {
                minHeight: toolbarHeights.mobilePortrait,
                [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
                    minHeight: toolbarHeights.mobileLandscape,
                },
                [theme.breakpoints.up('sm')]: {
                    minHeight: toolbarHeights.mobileLandscape,
                },
                [theme.breakpoints.up('md')]: {
                    minHeight: toolbarHeights.tabletDesktop,
                },
            },
        },
        components: {
            MuiTypography: {
                styleOverrides: {
                    root: {
                        fontFamily: 'roboto, sans-serif',
                    },
                    h2: {
                        fontSize: '3rem',
                    },
                    h3: {
                        fontSize: '2.5rem',
                        lineHeight: 1.5,
                    },
                },
            },
            MuiFormControlLabel: {
                styleOverrides: {
                    labelPlacementStart: {
                        marginRight: -7,
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    adornedEnd: {
                        paddingRight: 0,
                    },
                },
            },
            MuiInputLabel: {
                styleOverrides: {
                    outlined: {
                        '&.MuiInputLabel-marginDense': {
                            transform: 'translate(14px, 9px) scale(1)',
                        },
                        '&.MuiInputLabel-shrink': {
                            transform: 'translate(14px, -6px) scale(0.75)',
                        },
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    containedSecondary: {
                        color: theme.palette.common.white,
                    },
                    root: {
                        padding: '2px 10px',
                    },
                    contained: {
                        color: theme.palette.common.white,
                    },
                },
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        padding: theme.spacing(1),
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        border: `1px solid ${theme.palette.primary.main}`,
                        boxShadow:
                            theme.palette.mode === 'light'
                                ? '0px 4px 24px rgba(199, 212, 234, 0.45)'
                                : '0px 4px 20px rgba(7, 9, 13, 0.55)',
                        borderRadius: 8,
                    },
                },
            },
            MuiTableHead: {
                styleOverrides: {
                    root: {
                        background: theme.palette.background.paper,
                        color: theme.palette.primary.main,
                    },
                },
            },
            MuiTable: {
                styleOverrides: {
                    root: {
                        border: `1px solid ${
                            theme.palette.mode === 'light' ? theme.palette.grey['300'] : theme.palette.grey.A400
                        }`,
                    },
                },
            },
            MuiChip: {
                styleOverrides: {
                    root: {
                        backgroundColor:
                            theme.palette.mode === 'light' ? theme.palette.grey['300'] : theme.palette.primary.main,
                    },
                    sizeSmall: {
                        height: 20,
                    },
                },
            },
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        fontSize: theme.spacing(2),
                        lineHeight: 2,
                    },
                    head: {
                        paddingTop: theme.spacing(0.5),
                        paddingBottom: theme.spacing(0.5),
                        paddingLeft: theme.spacing(3),
                        paddingRight: theme.spacing(4),
                        fontWeight: 600,
                    },
                    body: {
                        paddingTop: theme.spacing(0.5),
                        paddingBottom: theme.spacing(0.5),
                        paddingLeft: theme.spacing(3),
                        paddingRight: theme.spacing(4),
                        wordBreak: 'break-word',
                        fontSize: theme.spacing(1.8),
                    },
                },
            },
            MuiTableRow: {
                styleOverrides: {
                    root: {
                        padding: theme.spacing(3),
                    },
                },
            },
            MuiTabs: {
                styleOverrides: {
                    root: {
                        backgroundColor: theme.palette.background.default,
                        paddingLeft: theme.spacing(3),
                        paddingRight: theme.spacing(3),
                        fontSize: theme.spacing(2),
                        marginBottom: theme.spacing(3),
                        overflow: 'visible',
                    },
                    indicator: {
                        backgroundColor: 'transparent',
                    },
                },
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        fontSize: theme.typography.pxToRem(16),
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        border: '1px solid transparent',
                        minWidth: '75px!important',
                        maxWidth: 300,
                        '&$selected': {
                            color: 'none',
                            outline: 'none',
                            border: `1px solid ${theme.palette.text.secondary}`,
                            borderBottom: 'none',
                            boxShadow: '0px -5px 14px rgba(18, 74, 125, 0.08)',
                        },
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    outlined: {
                        backgroundColor: theme.palette.background.paper,
                    },
                },
            },
            MuiAccordion: {
                styleOverrides: {
                    root: {
                        boxShadow: '0px 10px 20px rgba(170, 173, 203, 0.2)',
                    },
                },
            },
            MuiAccordionSummary: {
                styleOverrides: {
                    root: {
                        '&$expanded': {
                            minHeight: 40,
                        },
                        height: 40,
                    },
                    content: {
                        '&$expanded': {
                            margin: 8,
                        },
                        margin: 8,
                    },
                },
            },
        },
    });

export const lightTheme = createTheme(createCommonTheme(lightPalette));
export const darkTheme = createTheme(createCommonTheme(darkPalette));
