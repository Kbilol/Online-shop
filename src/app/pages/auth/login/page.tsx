
import { Button } from "@common/ui/Button";
import { Input } from "@common/ui/Input";
import { Logo } from "@common/ui/Logo";




export default function LoginPage() {
    return (
        <section className="flex justify-center items-center gap-3 py-2 w-full">
            <div>
                <Logo />
            </div>
            <form className="flex flex-col gap-3">
                <h2 className="">Вход</h2>
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Button variant="primary">Войти</Button>
            </form>
        </section>
    )
}