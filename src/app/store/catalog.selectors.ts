import { catalogFeature } from './catalog.reducer';

export const {
  selectCatalogState,
  selectLoading: selectCatalogLoading,
  selectProducts: selectCatalogProducts,
} = catalogFeature;
