export interface IProduct{
  id: number,
  name: string,
  description: string,
  defaultImage: string,
  images: string[],
  price: number,
  discount: number,
}

export interface IItem{
  product: IProduct,
}

export interface User {
  id: number,
  name: {
      firstName: string,
      lastName: string,
  }
  phone: string,
  avatar: string,
  email: string,
  address: {
      country: string,
      city: string,
      zip: string,
      street: string,
  },
  orders: {
      id: number,
      products: {
          id: number,
          quantity: number,
      }[],
  },
  role: 'ADMIN' | 'CUSTOMER' // Role is based on i % 2
};

export type CartContext = {
    id: number, // User id
    products: {
          id: number,
          quantity: number,
    }[],
}


export interface IItem{
  product:IProduct;
}

export interface ICartProp {
  products: {[key:string]:IProduct[]},
  updateCart: (product:{[key:string]:IProduct[]}) =>void;
}
