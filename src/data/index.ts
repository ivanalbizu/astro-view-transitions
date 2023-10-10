export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
  img: string;
  imgFull: string;
  notes: string;
}

export const products: Product[] = [
  {
    id: 10,
    name: 'Shirt Molona',
    slug: 'shirt-molona',
    price: 200,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt magnam quia, explicabo dolor velit',
    img: '/300x200.png',
    imgFull: '/300x400.png',
    notes:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt magnam quia, explicabo dolor velit aut omnis natus consequatur possimus fuga illo commodi asperiores dignissimos. Consequuntur nam quae commodi quas, magni',
  },
  {
    id: 11,
    name: 'Sweet Sweater',
    slug: 'sweet-sweater',
    price: 156,
    description:
      'Sweet Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt magnam quia, explicabo dolor velit.',
    img: '/300x200.png',
    imgFull: '/300x400.png',
    notes:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt magnam quia, explicabo dolor velit aut omnis natus consequatur possimus fuga illo commodi asperiores dignissimos. Consequuntur nam quae commodi quas, magni',
  },
  {
    id: 12,
    name: 'Shoe Cakis',
    slug: 'shoe-cakis',
    price: 62,
    description:
      'Cakis Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt magnam quia, explicabo dolit',
    img: '/300x200.png',
    imgFull: '/300x400.png',
    notes:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt magnam quia, explicabo dolor velit aut omnis natus consequatur possimus fuga illo commodi asperiores dignissimos. Consequuntur nam quae commodi quas, magni',
  },

  {
    id: 13,
    name: 'Piwik Kiwi',
    slug: 'piwik-kiwi',
    price: 34,
    description:
      'Kiwi Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt magnam explicabot',
    img: '/300x200.png',
    imgFull: '/300x400.png',
    notes:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt magnam quia, explicabo dolor velit aut omnis natus consequatur possimus fuga illo commodi asperiores dignissimos. Consequuntur nam quae commodi quas, magni',
  },
];
