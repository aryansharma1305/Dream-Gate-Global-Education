import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const blurDataUrl =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTInIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDEyIDgnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzEyJyBoZWlnaHQ9JzgnIGZpbGw9JyMwQjFGNEEnLz48Y2lyY2xlIGN4PSczJyBjeT0nMicgcj0nMycgZmlsbD0nI0Y1QTYyMycgZmlsbC1vcGFjaXR5PScuMzUnLz48L3N2Zz4=";

export function formatCurrency(value: string) {
  return value.replace("~", "Approx. ");
}
