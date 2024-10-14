import { ReactNode } from "react";

export enum AppRouters {
    main = 'main',
    shop = 'shop',
    faqs = 'faqs',
    categories = 'categories',
    about = 'about',
    contact = 'contact',
    blog = 'blog',
    signin = 'signin',
    signup = 'signup',
};

export type AppRoutesProps = {
    path: string;
    page?: ReactNode; 
    link?: string;
    title?: string;
    isNavbar?: true;
}