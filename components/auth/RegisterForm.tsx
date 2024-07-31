"use client"

import {Button, Form, Input, notification} from "antd";
import FormItem from "antd/es/form/FormItem";
import styles from "./Auth.module.scss";
import * as Api from '@/api'
import { LoginFormDTO, RegisterFormDTO } from "@/api/dto/auth.dto";
import { setCookie } from "nookies";



export const RegisterForm: React.FC = () => {
    const onSubmit = async (values:RegisterFormDTO) => {
        try {
            const { token } = await Api.auth.register(values)

            notification.success({
                message : 'Вдало!',
                description: 'Йдемо далі',
                duration: 2
            })


            setCookie(null, '_token', token, {
                path: '/'
            })
        } catch (error) {
            console.log('Registerform',error)
            notification.error({
                message : 'Не вдалось!',
                description: 'Щось пішло не так',
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
                    label="Ваше Ім'я"
                    name="fullName"
                    rules={[{required: true, message: "Вкажіть ім'я"}]}
                >
                    <Input />
                </FormItem>

                <FormItem
                    label="E-Mail"
                    name="email"
                    rules={[{required: true, message: "Потрібна пошта"}]}
                >
                    <Input />
                </FormItem>

                <FormItem
                    label="Пароль"
                    name="password"
                    rules={[{required: true, message: "Потрібен пароль"}]}
                >
                    <Input.Password />
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
