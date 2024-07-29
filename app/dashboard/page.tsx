
import Dasboard from "@/components/Dashboard";
import { checkAuth } from "@/utils/checkAuth";
import * as Api from "@/api";
async function DashboardPage() {
  await checkAuth();
  const file = await Api.files.getAll();
  
  return (
    <>
      <Dasboard items={file} />
    </>
  );
}

export default DashboardPage;