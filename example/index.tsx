import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../.';

const product = {
  id: '1',
  title: 'Coffee 1820',
  //img: './coffee-mug.png',
};

const App = () => {
  return (
    <div>
      <ProductCard
        product={product}
        initialValues={{
          count: 1,
          //maxCount: 10,
        }}
      >
        {({ count, maxCount, reset, increaseBy, isMaxCountReached }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
