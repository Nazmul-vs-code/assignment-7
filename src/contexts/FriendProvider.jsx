import React from 'react';
import { FriendContext } from './FriendContext';

const FriendProvider = ( {children}) => {


    

    const data = {
        name: "lol",
        age: "Lola age : 2"
    }

    return <FriendContext.Provider value={data}>
        {children}
    </FriendContext.Provider>
};

export default FriendProvider;