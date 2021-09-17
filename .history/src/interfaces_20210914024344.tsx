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

export type UserType = {
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

export type CartType = {
    id: number|null, // User id
    products: {
          id: number,
          quantity: number,
    }[]
}

export interface ICartProp {
  Cart: CartType,
  addToCart:(id:number)=>void,
  addUser:(id:number)=>void
}

export interface IUserProp{
  id: number|null,
  addUser:(id:number)=>void
}

export interface IItem{
  product:IProduct;
}

