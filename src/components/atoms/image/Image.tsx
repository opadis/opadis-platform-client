import type { ImgHTMLAttributes } from 'react';
import { cn } from "@/utils/cn";

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    alt: string;
    src: string;
    width?: number;
    height?: number;
    size?: string;
    loading?: 'lazy' | 'eager';
}

export const Image = ({
    alt,
    src,
    width,
    height,
    size,
    loading,
    ...props
}: ImageProps) => {
    return (
        <img
            className={cn('storybook-image', props.className)}
            alt={alt}
            src={src}
            loading={loading}
            width={width}
            height={ height}
            sizes={size}
            {...props}
        />
    );
};



