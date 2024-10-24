import React, { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';

import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  img?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ className, img, style }: Props) => {
  const { product } = useContext(ProductContext);
  const imgToShow: string = img || product.img || noImage;

  return (
    <img
      className={`${className} ${styles.productImg}`}
      style={style}
      src={imgToShow}
      alt="Coffee Mug"
    />
  );
};
