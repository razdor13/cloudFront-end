
import Dasboard from "@/components/Dashboard";
import { checkAuth } from "@/utils/checkAuth";

async function DashboardPage() {
  await checkAuth();

  return (
    <>
      <Dasboard/>
    </>
  );
}

export default DashboardPage;