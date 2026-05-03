import { Button } from "@common/ui/Button"
import { Input } from "@common/ui/fields"
import { Title } from "@common/ui/Title"




export const RegisterForm: React.FC = () => {
    return(
         <form className="flex flex-col gap-3">
                <Title variant="secondary" size="lg">Регистрация</Title>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Button variant="primary">Регистрация</Button>
            </form>
    )
}