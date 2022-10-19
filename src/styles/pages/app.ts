import * as Dialog from '@radix-ui/react-dialog';
import { styled } from '..';

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100vh'
})

export const Header = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',

    display: 'flex',
    justifyContent: 'space-between',
})

export const Cart = styled(Dialog.Trigger, {
        cursor: 'pointer',
        padding: '0.75rem',
        border: 'none',
        background: '$gray800',
        borderRadius: '6px',
        color: '$gray500',
})

export const Overlay = styled(Dialog.Overlay, {
    position: 'fixed',
    width: 'auto',
    height: '100vh',
    inset: '0',
})

export const CloseButton = styled(Dialog.Close, {

})

export const Content = styled(Dialog.Content, {})

export const ItensContainer = styled('div', {})