import { createContext, useState } from "react"

export const OrderContext = createContext(null);

export const OrderProvider = (props) => {
    const [order, setOrder] = useState({});
    return(
        <OrderContext.Provider value={{order, setOrder}}>
            {props.children}
        </OrderContext.Provider>
    );
}