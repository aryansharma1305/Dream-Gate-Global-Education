import Image, { type ImageProps } from "next/image";
import { blurDataUrl, cn } from "@/lib/utils";

export function SmartImage({ className, alt, ...props }: ImageProps) {
  return (
    <Image
      className={cn("object-cover", className)}
      alt={alt}
      placeholder="blur"
      blurDataURL={blurDataUrl}
      {...props}
    />
  );
}
