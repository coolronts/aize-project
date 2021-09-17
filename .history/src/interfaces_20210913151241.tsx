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
  product:IProduct;
}

export interface ICartProp {
  products: {[key:string]:IProduct[]},
  updateCart: (product:{[key:string]:IProduct[]}) =>void;
}
