import {useContext} from 'react'
import axios, {AxiosResponse} from 'axios';
import {IProduct, UserType} from '../interfaces'
import UserContext from '../context/user'
const userContext = userContext(UserContext)

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
  getUser: (): Promise<UserType> => requests.get('users')
}