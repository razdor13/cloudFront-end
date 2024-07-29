import React from "react";
import { User } from "@/api/dto/auth.dto";
import * as Api from "@/api";
import DashboardProfile from "@/components/DashboardProfile";
import { checkAuth } from "@/utils/checkAuth";

const DashboardProfilePage = async () => {
  await checkAuth()
  const userData: User = await Api.auth.getMe();

  return (
    <main>
      <DashboardProfile userData={userData} />
    </main>
  );
};

export default DashboardProfilePage;