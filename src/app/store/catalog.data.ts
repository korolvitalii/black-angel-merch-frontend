import { CatalogProduct } from './catalog.models';

export const DEMO_PRODUCTS: CatalogProduct[] = [
  {
    id: '01',
    sku: 'BA-TEE-001',
    name: 'Cathedral Tee',
    description: 'Heavyweight cotton with cracked front print and washed black finish.',
    price: 42,
    tag: 'Best seller',
  },
  {
    id: '02',
    sku: 'BA-HOOD-002',
    name: 'Afterlight Hoodie',
    description: 'Oversized fleece hoodie with tonal embroidery on the cuff and hood.',
    price: 88,
    tag: 'New drop',
  },
  {
    id: '03',
    sku: 'BA-CAP-003',
    name: 'Halo Cap',
    description: 'Structured six-panel cap with curved brim and silver clasp closure.',
    price: 34,
    tag: 'Limited',
  },
  {
    id: '04',
    sku: 'BA-TOTE-004',
    name: 'Ritual Tote',
    description: 'Canvas tote sized for records, books, and whatever the day turns into.',
    price: 26,
    tag: 'Accessory',
  },
];
