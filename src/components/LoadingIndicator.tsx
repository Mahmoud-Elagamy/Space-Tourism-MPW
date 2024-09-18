import { usePathname } from "next/navigation";
import { Spin } from "antd";

const LoadingSpinner = ({ isInitLoading }: { isInitLoading?: boolean }) => {
  const pathname = usePathname();
  return (
    <div
      className={`flex ${isInitLoading ? "h-full" : `h-[579px] ${pathname === "destination" ? "md:h-[738px]" : "md:h-[700px]"} lg:h-[340px]`} items-center justify-center`}
      role="status"
      aria-busy
    >
      <Spin size="large" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
