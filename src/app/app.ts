import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { CatalogPageActions } from './store/catalog.actions';
import { selectCatalogLoading, selectCatalogProducts } from './store/catalog.selectors';

@Component({
  selector: 'app-root',
  imports: [CurrencyPipe, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private readonly store = inject(Store);

  protected readonly loading = this.store.selectSignal(selectCatalogLoading);
  protected readonly products = this.store.selectSignal(selectCatalogProducts);

  ngOnInit(): void {
    this.store.dispatch(CatalogPageActions.opened());
  }

  protected reloadCatalog(): void {
    this.store.dispatch(CatalogPageActions.reloadClicked());
  }
}
