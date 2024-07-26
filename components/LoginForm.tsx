"use client"

import {Button, Form, Input, notification} from "antd";
import FormItem from "antd/es/form/FormItem";
import styles from "./Auth.module.scss";
import * as Api from '@/api'
import { LoginFormDTO } from "@/api/dto/auth.dto";
import { setCookie } from "nookies";



export const LoginForm: React.FC = () => {
    const onSubmit = async (values:LoginFormDTO) => {
        try {
            const { token } = await Api.auth.login(values)

            notification.success({
                message : 'Вдало!',
                description: 'Йдемо далі',
                duration: 2
            })


            setCookie(null, '_token', token, {
                path: '/'
            })
        } catch (error) {
            console.log('Loginform',error)
            notification.error({
                message : '!!!',
                description: 'ні',
                duration: 2
            })
        }
    }
    return (
        <div className={styles.formBlock}>
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                onFinish={onSubmit}
            >
                <FormItem
                className={styles.form}
                    label="E-Mail"
                    name="email"
                    rules={[{required: true, message: "Укажите почту"}]}
                >
                    <Input />
                </FormItem>

                <FormItem
                    label="Пароль"
                    name="password"
                    rules={[{required: true, message: "Укажите пароль"}]}
                >
                    <Input />
                </FormItem>

                <FormItem
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                    
                </FormItem>
            </Form>
        </div>
    );
};
