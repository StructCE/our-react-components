import React from "react";
import { useToaster } from "react-hot-toast";

type ToastProps = {
  message: string;
  type?: "success" | "error" | "loading";
  duration?: number;
};

const Toast: React.FC<ToastProps> = ({
  message,
  type = "success",
  duration = 3000,
}) => {
  const toaster = useToaster();

  const showToast = () => {
    toaster[type](message, {
      duration,
    });
  };

  return <button onClick={showToast}>Show Toast</button>;
};

export default Toast;
