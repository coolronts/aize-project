import { createContext } from "react";
import {IUserProp} from '../interfaces'
const userContext = createContext<IUserProp>({id:null})

