import {LoginForm} from "@/components/auth/LoginForm";
import { RegisterForm } from "@/components/auth/RegisterForm";
import {Tabs} from "antd";

const AuthPage = () => {
    return (
        <>
            <div style={{width: "400px", margin: "50px auto"}}>
                <Tabs
                    items={[
                        {label: "Login", key: "1", children: <LoginForm />},
                        {
                            label: "Registration",
                            key: "2",
                            children: <RegisterForm/>,
                        },
                    ]}
                />
            </div>
        </>
    );
};

export default AuthPage;
