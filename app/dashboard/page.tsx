import React from "react";
import { checkAuth } from "@/utils/checkAuth";
import * as Api from "@/api";
import { FileItem } from "@/api/dto/files.dto";
import { Files } from "@/modules/Files";



const DashboardPage: React.FC = async () => {
  await checkAuth();
  const file: FileItem[] = await Api.files.getAll();  

  return (
    <>
      <Files items={file} withActions/>
    </>
  );
}

export default DashboardPage;