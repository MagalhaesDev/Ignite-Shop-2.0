import { styled } from '..';

export const HomeContainer = styled('main', {
    display: 'flex',
    minHeight: 656,
})

export const Product = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    

    img: {
        objectFit: 'cover',
    },

    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '2rem',

        borderRadius: 6,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: 'rgba(0, 0, 0, 0.6)',

        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        div: {

            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',

            strong: {
                fontSize: '$lg',
                color: '$gray100', 
            },
    
            span: {
                fontSize: '$xl',
                fontWeight: 'bold',
                color: '$green300'
            },
        },

        button: {
            padding: '0.75rem',
            background: '$green500',
            transition: 'background .2s ease-in-out',
            border: 'none',
            borderRadius: 6,
            color: '$white',
            cursor: 'pointer',

            '&:hover': {
               background: '$green300'
            }
        },
    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1,
        }
    }
})

export const ButtonRight = styled('div', {
    position: 'absolute',
    zIndex: '1',
    right: '0',
    background: 'linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%);',
    height: '100vh',
    width: '8.5rem',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '1rem',

    button: {
        cursor: 'pointer',
        border: 'none',
        background: 'none',
        color: '$white',
    }
})

export const ButtonLeft = styled('div', {
    position: 'absolute',
    zIndex: '1',
    left: '0',
    background: 'linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)',
    transform: 'matrix(-1, 0, 0, 1, 0, 0)',
    height: '100vh',
    width: '8.5rem',
    

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '1rem',

    button: {
        cursor: 'pointer',
        border: 'none',
        background: 'none',
        color: '$white',
    }
})
