In order to scale we can potentially add additional wrappers to feature components, e.g.:

```
- .../features/market/MarketHomePage
- .../features/market/login/**
    - ./MarketLoginPage
- .../features/market/products/**
    - ./MarketProductsPage
    - ./product/**
        - MarketProductPage
```

=

```
- .../features/market/MarketHomePage
- .../features/market/login/MarketLoginPage
- .../features/market/products/MarketProductsPage
- .../features/market/products/product/MarketProductPage
```

Each sub-feature component `Market***Page` can be renamed to `index`

```
- .../features/market/index.tsx
- .../features/market/login/index.tsx
- .../features/market/products/index.tsx
- .../features/market/products/product/index.ts
```

Each sub-folder can have basic structure `/components`, `/hooks`, `/utils`, `/constants`, etc.
