import * as yup from 'yup';

export interface SignInFormData {
    username: string;
    password: string;
}

export const signInSchema = yup.object({
    username: yup.string().email("Email không hợp lệ").required("Vui lòng nhập email"),
    password: yup.string().required("Vui lòng nhập mật khẩu"),
});
