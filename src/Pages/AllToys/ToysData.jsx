import React from 'react';
import { Link } from 'react-router-dom';

const ToysData = ({toy}) => {
    const{_id,sellerName,name,subCategory,price,quantity}=toy
    return (
        <tr className="text-gray-300 font-bold">
        <td>{sellerName}</td>
        <td>{name}</td>
        <td>{subCategory}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td><Link to={`/toyDetails/${_id}`}><button  className="bg-gray-500 p-5 rounded-lg">View Details</button></Link></td>
      </tr>
    );
};

export default ToysData;