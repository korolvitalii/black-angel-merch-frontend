import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { timer } from 'rxjs';

import { DEMO_PRODUCTS } from './catalog.data';
import { CatalogApiActions, CatalogPageActions } from './catalog.actions';

@Injectable()
export class CatalogEffects {
  private readonly actions$ = inject(Actions);

  loadCatalog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CatalogPageActions.opened, CatalogPageActions.reloadClicked),
      map(() => CatalogApiActions.loadRequested()),
    ),
  );

  populateCatalog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CatalogApiActions.loadRequested),
      switchMap(() =>
        timer(400).pipe(
          map(() => CatalogApiActions.loadSucceeded({ products: DEMO_PRODUCTS })),
        ),
      ),
    ),
  );
}
