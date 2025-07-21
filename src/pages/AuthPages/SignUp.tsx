import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignUpForm from "../../components/auth/SignUpForm";

export default function SignUp() {
  return (
    <>
      <PageMeta
        title="Đăng ký tài khoản | Hệ thống quản lý kho lạnh"
        description="Trang đăng ký tài khoản cho hệ thống quản lý kho lạnh. Tạo tài khoản để truy cập và sử dụng các chức năng quản lý kho hiệu quả."
      />
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </>
  );
}
