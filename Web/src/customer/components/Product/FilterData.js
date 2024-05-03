export const color = [
  "white",
  "Black",
  "Red",
  "Pink",
  "Marun",
  "Purple",
  "Beige",
  "Green",
  "Yellow",
];

export const filters = [
  {
    id: "color",
    name: "color",
    options : [
      { value: "white", label: "white" },
      { value: "Black", label: "Black" },
      { value: "Red", label: "Red" },
      { value: "Pink", label: "Pink" },
      { value: "Marun", label: "Marun" },
      { value: "Purple", label: "white" },
      { value: "Beige", label: "Beige" },
      { value: "Green", label: "Green" },
      { value: "Yellow", label: "Yellow" },
    ],
  },

  {
    id: "size",
    name: "size",
    options : [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "price",
    options : [
      { value: "0-50", label: "$0 - $50" },
      { value: "51-100", label: "$51 - $100" },
      { value: "101-200", label: "$101 - $200" },
      { value: "201-350", label: "$201 - $350" },
      { value: "351-more", label: "More than $350" },
    ],
  },

  {
    id: "discount",
    name: "Discount Range",
    options : [
      {
        value:"10",
        label: "10% and Above",
      },
      { value: "20%", label: "20% and above" },
      { value: "30%", label: "30% and above" },
      { value: "40%", label: "40% and above" },
      { value: "50%", label: "50% and above" },
      { value: "60%", label: "60% and above" },
      { value: "70%", label: "70% and above" },
      { value: "80%", label: "80% and above" },
    ],
  },
  {
    id: "stock",
    name: "Availibility",
    options : [
      { value: "in_stock", label: "In Stock" },
      { value: "out_of_stock", label: "Out Of Stock" },
    ],
  },
]

export const sortOptions = [
  { name: "Price: Low to High", query: "price_low", current: false},
  { name: "Price: High to Low", query: "price_high", current: false},
]