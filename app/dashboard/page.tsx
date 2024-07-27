import { checkAuth } from "@/utils/checkAuth";

async function DashboardPage() {
  console.log(123)
  await checkAuth();

  return (
    <>
      132132
    </>
  );
}

export default DashboardPage;