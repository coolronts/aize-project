type picture ={
  colour: string,
  pictureUrl: string
}
export interface IProduct{
  title:string;
  price: number,
  details:string;
  size:[string, ...string[]],
  colours:[string, ...string[]],
  available:[number,...number[]],
  pictures:picture[]
}

export interface IItem{
  product:IProduct;
}

export interface ICartProp {
  products: {[key:string]:IProduct[]},
  updateCart: (product:{[key:string]:IProduct[]}) =>void;
}
