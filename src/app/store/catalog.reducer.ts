import { createFeature, createReducer, on } from '@ngrx/store';

import { CatalogApiActions } from './catalog.actions';
import { CatalogProduct } from './catalog.models';

export interface CatalogState {
  products: CatalogProduct[];
  loading: boolean;
}

const initialState: CatalogState = {
  products: [],
  loading: false,
};

export const catalogFeature = createFeature({
  name: 'catalog',
  reducer: createReducer(
    initialState,
    on(CatalogApiActions.loadRequested, (state) => ({
      ...state,
      loading: true,
    })),
    on(CatalogApiActions.loadSucceeded, (state, { products }) => ({
      ...state,
      products,
      loading: false,
    })),
  ),
});
