import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const toslug = (str: String) => {
  str = str.toLowerCase();

  // xóa dấu
  str = str
    .normalize('NFD') // chuyển chuỗi sang unicode tổ hợp
    .replace(/[\u0300-\u036f]/g, ''); // xóa các ký tự dấu sau khi tách tổ hợp

  // Thay ký tự đĐ
  str = str.replace(/[đĐ]/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // Xóa ký tự - liên tiếp
  str = str.replace(/-+/g, '-');

  // xóa phần dư - ở đầu & cuối
  str = str.replace(/^-+|-+$/g, '');

  // return
  return str;
}

export const convertSlugToString = (slug: string) => {
  switch (slug) {
    case 'tivi':
      return 'Tivi';
    case 'loa':
      return 'Loa';
    case 'dan-karaoke':
      return 'Dàn karaoke';
    case 'tu-lanh':
      return 'Tủ lạnh';
    case 'tu-dong':
      return 'Tủ đông';
    case 'tu-mat':
      return 'Tủ mát';
    case 'may-giat':
      return 'Máy giặt';
    case 'may-quat':
      return 'Máy quạt';
    case 'may-lanh':
      return 'Máy lạnh';
    default:
      return slug; // Return the original slug or a default string
  }
};
