import axios, {AxiosResponse} from 'axios';
import {IProduct, UserCartType} from '../interfaces'

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
  put: (url: string, body: {}) => instance.put(url, body).then(responseBody)
};


export const Get={
  getProducts: (): Promise<IProduct[]> => requests.get('products'),
  getUserCart: (id:number): Promise<UserCartType> => requests.get('carts/'+ id),
  getProduct: (id:number): Promise<IProduct> => requests.get('products/'+ id),
  searchProduct: (query:string): Promise<IProduct[]> => requests.get('products?q='+ query),
}

export const Delete={
  deleteProduct: (id:number): Promise<void> => requests.delete('products/'+id)
}

export const Put={
  updateProduct: (post: IProduct, id: number): Promise<IProduct> =>requests.put('/products/' + id, post)
}