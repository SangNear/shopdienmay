import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toslug = (str: String) => {
  str = str.toLowerCase();

  // xóa dấu
  str = str
    .normalize("NFD") // chuyển chuỗi sang unicode tổ hợp
    .replace(/[\u0300-\u036f]/g, ""); // xóa các ký tự dấu sau khi tách tổ hợp

  // Thay ký tự đĐ
  str = str.replace(/[đĐ]/g, "d");

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, "");

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, "-");

  // Xóa ký tự - liên tiếp
  str = str.replace(/-+/g, "-");

  // xóa phần dư - ở đầu & cuối
  str = str.replace(/^-+|-+$/g, "");

  // return
  return str;
};

export const convertSlugToString = (slug: string) => {
  switch (slug) {
    case "tivi":
      return "Tivi";
    case "loa":
      return "Loa";
    case "dan-karaoke":
      return "Dàn karaoke";
    case "tu-lanh":
      return "Tủ lạnh";
    case "tu-dong":
      return "Tủ đông";
    case "tu-mat":
      return "Tủ mát";
    case "may-giat":
      return "Máy giặt";
    case "may-quat":
      return "Máy quạt";
    case "may-lanh":
      return "Máy lạnh";
    default:
      return slug; // Return the original slug or a default string
  }
};
export const formatCurrency = (input: number) => {
  // Ensure the input is a number and format it with comma separators
  const formattedNumber = Number(input).toLocaleString("vi-VN");
  // Append the currency symbol 'đ' at the end
  return `${formattedNumber} đ`;
};
export const calculateIncreasedValue = (input: number) => {
  // Tính toán giá trị lớn hơn 20% của số đầu vào
  const increasedValue = input * 1.2;

  // Định dạng số với dấu phân cách hàng nghìn và thêm 'đ' vào cuối
  const formattedValue = increasedValue.toLocaleString("vi-VN");

  // Trả về giá trị đã định dạng kèm theo ký hiệu 'đ'
  return `${formattedValue} đ`;
};
