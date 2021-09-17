import axios, {AxiosResponse} from 'axios';
import {IProduct} from "../interfaces"

const instance = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
};

export const Post={
  getProducts: (): Promise<IProduct[]> => requests.get('products')
}

