import Header from "@/components/Header";
import { checkAuth } from "@/utils/checkAuth";

async function DashboardPage() {
  console.log(123)
  await checkAuth();

  return (
    <>
      <Header/>
    </>
  );
}

export default DashboardPage;