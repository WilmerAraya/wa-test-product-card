import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductCard', () => {
  test('debe mostrar el componente correctamente', () => {
    // Renderizamos el componente ProductCard con un contenido personalizado
    const { baseElement } = render(
      <ProductCard product={product1}>
        {() => <h1>Product Card</h1>}
      </ProductCard>
    );

    // Verificamos que el HTML renderizado coincide con el snapshot
    expect(baseElement.innerHTML).toMatchSnapshot();

    // Verificamos que el título "Product Card" esté presente en el documento
    expect(screen.queryByText('Product Card')).not.toBeNull();
  });

  test('debe incrementar el contador', () => {
    // Renderizamos el componente ProductCard y verificamos el contador
    const { baseElement } = render(
      <ProductCard product={product1}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}>Increase</button>
          </>
        )}
      </ProductCard>
    );

    // Verificamos que el HTML renderizado coincide con el snapshot
    expect(baseElement.innerHTML).toMatchSnapshot();

    // Verificamos que el contador inicial sea 0
    expect(screen.getByText('0')).not.toBeNull();

    // Simulamos el click en el botón para incrementar el contador
    const button = screen.getByText('Increase');
    fireEvent.click(button);

    // Verificamos que el contador haya aumentado a 1
    expect(screen.getByText('1')).not.toBeNull();
  });
});
