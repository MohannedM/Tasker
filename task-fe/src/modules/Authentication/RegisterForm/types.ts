import { authDismissErrorType, errorType, registerInputType, registerType, } from "../../../store/auth";

export interface RegisterFormProps {
    error: errorType | null
    loading: boolean
    token: string | null
    onRegister: (registerInput: registerInputType) => registerType
    onDismissError: () => authDismissErrorType
}