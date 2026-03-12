import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { CatalogProduct } from './catalog.models';

export const CatalogPageActions = createActionGroup({
  source: 'Catalog Page',
  events: {
    Opened: emptyProps(),
    'Reload Clicked': emptyProps(),
  },
});

export const CatalogApiActions = createActionGroup({
  source: 'Catalog API',
  events: {
    'Load Requested': emptyProps(),
    'Load Succeeded': props<{ products: CatalogProduct[] }>(),
  },
});
