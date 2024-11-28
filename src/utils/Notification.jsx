import { toast } from "react-toastify";

export const Notification = (message, type) => {
  return toast(message, {
    type: type,
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    style: {
      background: "var(--bg-element)",
    },
  });
};

export default Notification;
