import Notification from "./Notification";

export const ShareLinkProduct = () => {
  navigator.clipboard
    .writeText(window.location)
    .then(() => Notification("Ссылка скопирована", "success"))
    .catch(() => Notification("Что-то пошло не так", "error"));
};
