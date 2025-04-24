import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const TOAST_KEY = "showLoginToast";

const useLoginRedirectToast = () => {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const show = localStorage.getItem(TOAST_KEY);
    if (show === "true") {
      toast("يجب عليك تسجيل الدخول أولا", {
        icon: "⚠️",
        duration: 5000,
      });
      localStorage.removeItem(TOAST_KEY);
      setShouldShow(true);
    }
  }, []);

  return [shouldShow];
};

export default useLoginRedirectToast;
