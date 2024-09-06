"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Result, Button } from "antd";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    document.title = "404 - Page Not Found";
    document
      .querySelector("meta[name='description']")
      ?.setAttribute(
        "content",
        "Oops! The page you are looking for does not exist.",
      );
  }, []);

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

export default NotFound;
