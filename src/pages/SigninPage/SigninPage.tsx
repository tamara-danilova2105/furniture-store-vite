import { Signin } from "@/features/Signin";
import { Stack } from "@/shared/ui/Stack";
import styles from './SigninPage.module.scss';
import { Slider } from "@/entities/Slider";

const SigninPage = () => {
    return (
        <Stack 
            tag="main" 
            justify='between' 
            align='center'
            className={styles.sign_in}
        >
            <Signin />
            <Slider />
        </Stack>
    )
}

export default SigninPage;