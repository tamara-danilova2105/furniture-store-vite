import { SubmitHandler } from "react-hook-form";
import { SignupForm } from "./SignupForm/SignupForm";

export interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

export const Signup = () => {
    
    const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

    return <SignupForm onSubmit={onSubmit}/>
};