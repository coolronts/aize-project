import { createContext, useContext } from "react"
import {Cart} from '../interfaces'


export const CartContext = createContext(null);

const CartProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<Cart[]>([
    {
      id: 1,
      title: "post 1",
      description: "this is my first description",
      status: false
    },
    {
      id: 2,
      title: "post 2",
      description: "this is my second description",
      status: true
    }
  ]);
}