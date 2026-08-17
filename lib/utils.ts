import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number | string, currency = "€"): string {
  if (typeof price === "number") {
    return `${price.toFixed(2).replace(".", ",")} ${currency}`;
  }
  return price;
}
