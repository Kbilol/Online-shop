import { InputPassword, InputEmail } from "@common/ui/fields";




export const LoginForm: React.FC = () => {
    return <div>
        <InputEmail  placeholder="email" variant="primary"/>
        <InputPassword placeholder="Password" variant="primary" />
        </div>
    
};