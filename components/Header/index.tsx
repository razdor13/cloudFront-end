"use client";
import React, { useEffect, useState } from "react";
import {Layout, Avatar, Menu, Popover, Button} from "antd";
import styles from "./Header.module.scss";
import {CloudOutlined} from "@ant-design/icons";
import { usePathname, useRouter } from 'next/navigation';
import * as Api from "@/api";
import { cookies } from "next/headers";
import { parseCookies } from "nookies";
const HeaderMy: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    const cookies = parseCookies();
    const token = cookies['_token'];
    if (token) {
      setIsLoggedIn(true);
    } else {
      router.push('/auth');
    }
  }, [pathname]);
  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      Api.auth.logout();
      location.href = "/auth";
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

          {isLoggedIn && (
            <Menu
              className={styles.topMenu}
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[pathname || "/"]}
              onSelect={({ key }) => router.push(key)}
              items={[
                { key: "/dashboard", label: "MAIN" },
                { key: "/dashboard/profile", label: "PROFILE" },
              ]}
            />
          )}
        </div>

        <div className={styles.headerRight}>
        {isLoggedIn && <Popover
            trigger="click"
            content={
              <Button onClick={onClickLogout} type="primary" danger>
                Выйти
              </Button>
            }
          >
            <Avatar>A</Avatar>
          </Popover>}
        
        </div>
      </div>
    </Layout.Header>
  );
};

export default HeaderMy;
