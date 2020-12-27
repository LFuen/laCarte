import React from 'react'

// Structure of our store
export default React.createContext({
    meals: [],
    chefs: [],
    cuisines: [],
    orders: [],
    addOrder: () => {},
    updateOrder: () => {},
    deleteOrder: () => {},
})
