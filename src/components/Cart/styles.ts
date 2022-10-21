import * as Dialog from "@radix-ui/react-dialog"
import { styled } from "@stitches/react"

export const Overlay = styled(Dialog.Overlay, {
    position: 'fixed',
    width: 'auto',
    height: '100vh',
    inset: '0',
})

export const Content = styled(Dialog.Content, {
    position: 'fixed',
    zIndex: 999,
    right: '0',
    top: '0',
    bottom: '0',
    width: '480px',
    background: '$gray800',
    padding: '4.5rem 3rem 0 3rem',
    color: '$gray100'
})

export const TitleCart = styled(Dialog.Title, {
    marginBottom: '2rem',
})

export const ProductContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    height: '33rem',
    overflow: 'auto',
 
})

export const Product = styled('div', {
    display: 'flex',
    gap: '1.25rem',
})

export const ProductImageContainer = styled('div', {
    width: '6.375rem',
    height: '5.8rem',
    objectFit: 'cover',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

export const ProductDescription = styled('div',  {
    lineHeight: '160%',
    
    h3: {
        fontWeight: 'normal',
        fontSize: '1.125rem',
        color: '$gray400'
    },

    p: {
        fontSize: '1.125rem',
        marginTop: '0.125rem',
        fontWeight: 'bold',
    },

    button: {
        border: 'none',
        background: 'transparent',
        fontWeight: 'bold',
        fontSize: '1.125rem',
        color: '$green500',
        marginTop: '.875rem',
        cursor: 'pointer',
        transition: 'background 0.2s ease-in-out',

        '&:hover': {
            color: '$green300'
        }
    }
})

export const SummaryProduct = styled('div', {
    div: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '0.375rem',

        strong: {
            fontSize: '1.5rem',
        },

        h4: {
            fontSize: '1.125rem'
        }
    }
})

export const ButtonBuyProduct = styled('button',{
    marginTop: '1.5rem',
    width: '100%',
    padding: '1.25rem 0',
    borderRadius: 8,
    borderColor: 'transparent',
    background: '$green500',
    transition: 'background 0.2s ease-in-out',
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: '$white',
    cursor: 'pointer',

    '&:hover': {
        background: '$green300'
    }
})


export const CloseButton = styled(Dialog.Close, {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    cursor: 'pointer',
    border: 'none',
    background: 'transparent',
    color: '$gray500'
})