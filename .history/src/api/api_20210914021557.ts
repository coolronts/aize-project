import axios, {AxiosResponse} from 'axios';
import {IProduct, UserType} from '../interfaces'

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
};


export const Post={
  getProducts: (): Promise<IProduct[]> => requests.get('products')
}

export const User={
  getUserCart: (id:number): Promise<UserType> => requests.get('users/'+ id)
}