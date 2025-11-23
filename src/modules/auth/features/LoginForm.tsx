import { Button } from "@common/ui/Button"
import { Input } from "@common/ui/Input"
import { Title } from "@common/ui/Title"


export const LoginForm: React.FC = () => {
    return (
        <form className="flex flex-col gap-3">
            <Title variant="secondary" size="lg">Вход</Title>
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Button variant="primary">Войти</Button>
        </form>
    )
}