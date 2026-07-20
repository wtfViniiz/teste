import { redirect } from "next/navigation";
import { checkSession } from "./actions";
import { getPortfolioItems } from "./portfolio-actions";
import { AdminDashboardClient } from "./dashboard-client";

export default async function AdminPage() {
  const isAuthenticated = await checkSession();
  
  if (!isAuthenticated) {
    redirect("/admin/login");
  }

  const initialItems = await getPortfolioItems();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <AdminDashboardClient initialItems={initialItems} />
    </main>
  );
}
