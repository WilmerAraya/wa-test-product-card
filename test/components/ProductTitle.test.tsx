import React from 'react';
import { render } from '@testing-library/react';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('debe mostrar el componente correctamente con una imagen personalizada', () => {
    // Renderizamos el componente ProductImage con una imagen personalizada
    const { baseElement } = render(<ProductImage img="https://hola.jpg" />);

    // Verificamos que el HTML renderizado coincide con el snapshot
    expect(baseElement.innerHTML).toMatchSnapshot();
  });

  test('debe mostrar el componente con la imagen del producto', () => {
    // Renderizamos ProductCard con el producto2 y dentro usamos ProductImage
    const { baseElement } = render(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    // Verificamos que el HTML renderizado coincide con el snapshot
    expect(baseElement.innerHTML).toMatchSnapshot();
  });
});
