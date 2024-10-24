import React, { CSSProperties, useContext } from 'react';

import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  title?: string;
  style?: CSSProperties;
}

// Otra forma de recibir las props
export const ProductTitle = ({ className, title, style }: Props) => {
  const { product } = useContext(ProductContext);
  const titleToShow: string = title || product.title;
  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {titleToShow}
    </span>
  );
};
