export const formatDateTimeVN = (date: string | Date): string => {
  if (!date) return "";

  const d = new Date(date.toString().endsWith("Z") ? date : date + "Z");

  return new Intl.DateTimeFormat("vi-VN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Ho_Chi_Minh",
  }).format(d);
};