import React from 'react';

const OrderCard = ({ order }) => {
    return (
        <div>
            <h3>Order ID: {order._id}</h3>
            <p>Customer: {order.customerName}</p>
            <p>Status: {order.status}</p>
        </div>
    );
};

export default OrderCard;
