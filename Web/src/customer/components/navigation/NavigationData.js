const navigationData= {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '/',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '/',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', id: 'top', href: '/women/clothing/tops' },
            { name: 'Dresses', id: 'women_dress', href: '#' },
            { name: 'Jeans', id: 'women_jeans', href: '#' },
            { name: 'Sweaters', id: 'sweater', href: '#' },
            { name: 'T-Shirts', id: 't-shirt', href: '#' },
            { name: 'Jackets', id: 'jacket', href: '#' },
            { name: 'Gouns', id: 'gouns', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'H&M', id: 'H&M', href: '#' },
            { name: 'Zara', id: 'zara', href: '#' },
            { name: 'Mango', id: 'mango', href: '#' },
            { name: 'Fila', id: 'fila', href: '#' },
            { name: 'Massimo Dutti', id: 'massimo_dutti', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          id: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          id: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Shirt', id: 'shirt', href: '#' },
            { name: 'Men Jeans', id: 'men_jeans', href: '#' },
            { name: 'Sweaters', id: 'sweater', href: '#' },
            { name: 'T-Shirts', id: 't-shirt', href: '#' },
            { name: 'Jackets', id: 'jacket', href: '#' },
            { name: 'Activewear', id: 'activewear', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', id: 're_arranged', href: '#' },
            { name: 'Counterfeit', id: 'counterfeit', href: '#' },
            { name: 'Full Nelson', id: 'full_nelson', href: '#' },
            { name: 'My Way', id: 'my_way', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', id: '/', href: '#' },
    { name: 'Stores', id: '/', href: '#' },
  ],
};

export default navigationData;

