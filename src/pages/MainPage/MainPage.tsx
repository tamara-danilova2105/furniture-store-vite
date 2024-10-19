import { Advantages } from "@/entities/Advantages";
import { Header } from "@/entities/Header";
import { Stack } from "@/shared/ui/Stack";

const MainPage = () => {
    return (
        <Stack tag='main' direction='column' gap='48'>
            <Header />
            <Advantages />
        </Stack>
    );
};

export default MainPage;