import React, { useContext } from 'react';
import { FriendContext } from '../../contexts/FriendContext';

const Timeline = () => {

    const data = useContext(FriendContext);
    console.log(data , ` Data here `)

    return (
        <div className=''>
           <h2 className=' text-3xl font-bold'>TimeLine</h2>
        </div>
    );
};

export default Timeline;