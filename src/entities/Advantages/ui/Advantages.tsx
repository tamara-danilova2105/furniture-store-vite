
import { Stack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { advantages } from '../lib/data';
import styles from './Advantages.module.scss';

export const Advantages = () => {
    return (
        <ul className={styles.container}>
            {advantages.map(advantage => 
                <li className={styles.li}>
                    {advantage.image}
                    <Stack direction="column" gap="8">
                        <Text type="h3">{advantage.title}</Text>
                        <Text>{advantage.description}</Text>
                    </Stack>
                </li>
            )}
        </ul>
    );
};
