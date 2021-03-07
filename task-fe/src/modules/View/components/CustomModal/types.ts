export interface CustomModalProps {
    show: string | boolean | null
    handleClose: () => any
    body?: string | null
    error: boolean
    errors?: {message: string}[]
    buttons?: HTMLElement
}