import {LoginForm} from "@/components/LoginForm";
import {Tabs} from "antd";

const AuthPage = () => {
    return (
        <>
            <Tabs
                items={[{label: "login", key: "1", children: <LoginForm />},
                    {label: "registration", key: "2", children: <h1>registration</h1>}
                ]}
            />
        </>
    );
};

export default AuthPage;
