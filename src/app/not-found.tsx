"use client";
import { useRouter } from "next/navigation";
import { Result, Button } from "antd";

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <div className="absolute inset-0 flex min-h-screen flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#0B0D19] to-[#0C1D39] p-4 text-center">
      <Result
        status={"404"}
        title="404 - Oops! This page got lost in the cosmos."
        extra={
          <Button type="primary" onClick={() => router.replace("/")}>
            Return to Earth (Home)
          </Button>
        }
      />
    </div>
  );
};

export default NotFoundPage;
