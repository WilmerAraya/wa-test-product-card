# wa-test-product-card

Este es un paquete de prueba de despliegue en NPM

Wilmer Araya

## Ejemplo

```typescript
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from 'wa-test-product-card';
```

```typescript
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
```
