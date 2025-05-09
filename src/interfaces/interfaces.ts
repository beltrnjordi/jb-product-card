import { JSX, ReactElement } from "react";
import { Props as ProductCardProps, ProductCard } from '../components/ProductCard';
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductButtonsProps } from "../components/ProductButtons";


export interface Product {
    id    : string;
    title : string;
    img?  : string;
}

export interface ProductInCart extends Product {
    count: number
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
    maxCount?: number;
}

export interface ProductCardHOCProps {
    ({children, product} : ProductCardProps) : JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element
}

export interface onChangeArgs {
    product: Product,
    count: number
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;

    increaseBy: (value: number) => void;
    reset: () => void;
}