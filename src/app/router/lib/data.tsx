import { MainPage } from "@/pages/MainPage";
import { AppRouters, AppRoutesProps } from "../types/types";
import { 
    getRouteAbout, 
    getRouteBlog, 
    getRouteCategories, 
    getRouteContact, 
    getRouteFAQ, 
    getRouteMain, 
    getRouteShop, 
    getRouteSignin, 
    getRouteSignup 
} from "./helper";
import { SigninPage } from '@/pages/SigninPage';
import { SignupPage } from "@/pages/SignupPage";

export const routeConfig: Record<AppRouters, AppRoutesProps> = {
    [AppRouters.main]: {
        path: getRouteMain(),
        title: 'Главная',
        isNavbar: true,
        page: <MainPage />
    },
    [AppRouters.shop]: {
        path: getRouteShop(),
        title: 'Магазин',
        isNavbar: true,
    },
    [AppRouters.categories]: {
        path: getRouteCategories(),
        title: 'Категории',
        isNavbar: true,
    },
    [AppRouters.faqs]: {
        path: getRouteFAQ(),
        title: 'FAQ',
        isNavbar: true,
    },
    [AppRouters.about]: {
        path: getRouteAbout(),
        title: 'О нас',
        isNavbar: true,
    },
    [AppRouters.contact]: {
        path: getRouteContact(),
        title: 'Контакты',
        isNavbar: true,
    },
    [AppRouters.blog]: {
        path: getRouteBlog(),
        title: 'Новости',
        isNavbar: true,
    },
    [AppRouters.signin]: {
        path: getRouteSignin(),
        page: <SigninPage />
    },
    [AppRouters.signup]: {
        path: getRouteSignup(),
        page: <SignupPage />
    }
}