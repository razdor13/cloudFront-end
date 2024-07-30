import React from "react";
import Dashboard from "@/components/Dashboard";
import { checkAuth } from "@/utils/checkAuth";
import * as Api from "@/api";
import { FileItem } from "@/api/dto/files.dto";



const DashboardPhoto: React.FC = async () => {
  await checkAuth();
  const file: FileItem[] = await Api.files.getAll('photos');  // Ensure getAll() returns FileItem[]
    console.log(file , 'foto')
  return (
    <>
      <Dashboard items={file} />
    </>
  );
}

export default DashboardPhoto;