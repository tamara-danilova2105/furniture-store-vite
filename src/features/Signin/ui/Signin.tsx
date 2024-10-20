import { SubmitHandler } from "react-hook-form";
import { SigninForm } from "./SigninForm/SigninForm";

export interface FormValues {
    email: string;
    password: string;
};

export const Signin = () => {
    const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

    return (
        <SigninForm onSubmit={onSubmit} />
    );
};