import React from "react";
import { checkAuth } from "@/utils/checkAuth";
import * as Api from "@/api";
import { FileItem } from "@/api/dto/files.dto";
import { FileList } from "@/components/FileList";
import { Files } from "@/modules/Files";



const DashboardPhoto: React.FC = async () => {
  await checkAuth();
  const file: FileItem[] = await Api.files.getAll('photos');
  return (
    <>
     <Files items={file} withActions/>
    </>
  );
}

export default DashboardPhoto;