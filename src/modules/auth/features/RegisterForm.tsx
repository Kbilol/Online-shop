import { Button } from "@common/ui/Button"
import { InputEmail, InputPassword } from "@common/ui/fields"
import { Title } from "@common/ui/Title"




export const RegisterForm: React.FC = () => {
    return(
         <form className="flex flex-col gap-3">
                <Title variant="secondary" size="lg">Регистрация</Title>
                <InputEmail placeholder="Email" variant="primary"/>
                <InputPassword placeholder="Password" variant="primary"/>
                <Button variant="primary">Регистрация</Button>
            </form>
    )
}