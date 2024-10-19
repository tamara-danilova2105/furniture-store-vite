import { 
    HeadphoneIcon, 
    PaymentIcon, 
    ShippingIcon 
} from "@/shared/assets/icons/advantageIcons";
import { ReactNode } from "react";

export interface Advantages {
    image: ReactNode;
    title: string;
    description: string;
};

export const advantages: Advantages[] = [
    {
        image: <ShippingIcon />,
        title: 'Бесплатная Доставка',
        description: 'Доставка бесплатно при заказе от 20 000₽'
    },
    {
        image: <PaymentIcon />,
        title: 'Гибкая Оплата',
        description: 'Надежные и удобные способы оплаты'
    },
    {
        image: <HeadphoneIcon />,
        title: 'Круглосуточная поддержка',
        description: 'Мы поддерживаем онлайн 24/7'
    },
];