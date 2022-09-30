import React, {createContext} from 'react';
import {storeType} from './Redux/redux-store';


export const StoreContext = createContext({} as storeType)

type ProviderType = {
    store: storeType
    children: React.ReactNode
}

export const Provider: React.FC<ProviderType> = (props) => {
    const {store,children} = props
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}