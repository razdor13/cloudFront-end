"use client";
import React from "react";
import { Button } from "antd";
import { useRouter } from 'next/navigation';
import { User } from "@/api/dto/auth.dto";
import * as Api from '@/api'
interface Props {
  userData: User;
}

const DashboardProfile: React.FC<Props> = ({ userData }) => {
  const router = useRouter();

  const onClickLogout = async () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      Api.auth.logout();
      location.href = "/auth";
    }
  };

  return (
    <div>
      <h1>Мій профіль</h1>
      <br />
      <p>
        ID: <b>{userData.id}</b>
      </p>
      <p>
        Повне імя: <b>{userData.fullName}</b>
      </p>
      <p>
        E-Mail: <b>{userData.email}</b>
      </p>
      <br />
      <Button onClick={onClickLogout} type="primary" danger>
        Вийти
      </Button>
    </div>
  );
};

export default DashboardProfile;