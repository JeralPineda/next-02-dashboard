import { Sidebar } from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        {/* sidebar  */}
        <Sidebar />

        <div className="w-full  text-slate-900 p-4">{children}</div>
      </div>
    </div>
  );
}
