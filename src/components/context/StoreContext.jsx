import { createContext, useContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";



export const StoreContext = createContext(null)



const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const [isDarkMode, setIsDarkMode] = useState(false)

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }

    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('darkMode')
        if (savedTheme) {
            setIsDarkMode(JSON.parse(savedTheme))
        }
    }, [])

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
    }, [isDarkMode])


    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }


    const contextvalue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        isDarkMode,
        setIsDarkMode,
        toggleDarkMode,
        getTotalCartAmount



    }
    return (
        <StoreContext.Provider value={contextvalue} >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider


