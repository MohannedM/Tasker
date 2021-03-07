import { errorType, loginInputType, loginType, authDismissErrorType } from "../../../store/auth";

export interface LoginFormProps {
    error: errorType | null
    loading: boolean
    token: string | null
    onLogin: (loginInput: loginInputType) => loginType
    onDismissError: () => authDismissErrorType
}