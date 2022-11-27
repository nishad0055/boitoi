import React from 'react';

const MyOrderTable = ({book}) => {
    const {productName, price} = book
    return (
        <div>
            <tr>

                <td>
                    <h2>{productName}</h2>
                </td>
                <td>
                   
                   <h2> {price} </h2>

                </td>

                <td>
                    <button className="btn btn-ghost btn-xs">Pay</button>
                </td>
            </tr>
        </div>
    );
};

export default MyOrderTable;