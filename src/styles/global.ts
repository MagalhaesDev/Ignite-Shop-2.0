import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    },

    '::-webkit-scrollbar': {
        width: '.5rem'
    },

    '::-webkit-scrollbar-track-piece': {
        background: '$gray100',
        borderRadius: 10
    },

    '::-webkit-scrollbar-thumb': {
        borderRadius: 10,
        background: '$green500'
    },

    body: {
        backgroundColor: '$gray900',
        color: '$gray100',
        '-webkit-font-smoothing': 'antialiased'
    },

    'body, input, textarea, button': {
        fontFamily: 'Roboto',
        fontWeight: 400,
    }
})