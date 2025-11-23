
import { LoginForm } from "@auth/index";
import { Logo } from "@common/ui/Logo";





export default function LoginPage() {
    return (
        <section className="flex justify-center items-center gap-3 py-2 w-full">
            <div className="flex flex-row gap-3 bg-white rounded-2xl shadow-md p-5 items-center">
                <Logo />
                <LoginForm />
            </div>
        </section>
    )
}