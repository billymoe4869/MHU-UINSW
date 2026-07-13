import { MdOutlineSpaceDashboard } from "react-icons/md";
import { auth } from "@/auth";
import Link from "next/link";

const DashboardLink = async () => {
  const session = await auth();
  const isLogin = !!session?.user

  const after =
    "relative w-full cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-slate-200 after:transition-all after:duration-500 hover:after:w-full hover:text-slate-200 md:my-0 my-2 md:p-0 p-4";

  return (
    <div>
      {isLogin ? (
        <Link href="/dashboard" className="flex items-center gap-2 bg-stone-300 text-(--color-text) hover:bg-stone-400 p-2 rounded-sm">
          <MdOutlineSpaceDashboard className="size-4" />
          <span>Dashboard</span>
        </Link>
      ) : (
        <Link href="/login" className={after}>Admin</Link>
      )}
    </div>
  );
};

export default DashboardLink
