import { Stack } from "@/shared/ui/Stack";
import styles from './Header.module.scss';
import { Text } from "@/shared/ui/Text";
import { Link } from "react-router-dom";
import { getRouteSignin, getRouteSignup } from "@/app/router/lib/helper";

export const Header = () => {
    return (
        <header className={styles.header}>
            <Text type="p" size="xs" className={styles.phone}>
                тел: +123-456-789
            </Text>
            <Text type="p" size="xs">
                Зарегистрируйтесь и ПОЛУЧИТЕ скидку 25% на первый заказ. 
            </Text>
            <Stack gap='32' className={styles.links}>
                <Link to={getRouteSignin()}>Вход</Link>
                <Link to={getRouteSignup()}>Регистрация</Link>
            </Stack>
        </header>
    );
};
