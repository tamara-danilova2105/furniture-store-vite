import { Slider } from "@/entities/Slider";
import { Signup } from "@/features/Signup";
import { Stack } from "@/shared/ui/Stack";
import styles from './SignupPage.module.scss';

const SignupPage = () => {
    return (
        <Stack 
            tag="main" 
            justify='between' 
            align='center'
            className={styles.sign_up}
        >
            <Signup />
            <Slider />
        </Stack>
    );
};

export default SignupPage;
