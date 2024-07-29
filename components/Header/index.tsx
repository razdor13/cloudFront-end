"use client";
import React from "react";
import {Layout, Avatar, Menu, Popover, Button} from "antd";
import styles from "./Header.module.scss";
import {CloudOutlined} from "@ant-design/icons";
import { usePathname, useRouter } from 'next/navigation';
import * as Api from "@/api";
const HeaderMy: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      Api.auth.logout();
      location.href = "/dashboard/auth";
    }
  };

  return (
    <Layout.Header className={styles.root}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          <h2>
            <CloudOutlined />
            Cloud Storage
          </h2>

          <Menu
            className={styles.topMenu}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[pathname || '/']}
            onSelect={({ key }) => router.push(key)}
            items={[
              { key: "/dashboard", label: "Главная" },
              { key: "/dashboard/profile", label: "Профиль" },
            ]}
          />
        </div>

        <div className={styles.headerRight}>
          <Popover
            trigger="click"
            content={
              <Button onClick={onClickLogout} type="primary" danger>
                Выйти
              </Button>
            }
          >
            <Avatar>A</Avatar>
          </Popover>
        </div>
      </div>
    </Layout.Header>
  );
};

export default HeaderMy;
