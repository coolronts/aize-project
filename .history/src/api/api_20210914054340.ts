import axios, {AxiosResponse} from 'axios';
import {IProduct, CartType} from '../interfaces'

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
};


export const Get={
  getProducts: (): Promise<IProduct[]> => requests.get('products'),
  getUserCart: (id:number): Promise<CartType[]> => requests.get('carts/'+ id)
}
