import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function OrderDelivery() {
    const { currUser } = useAuth();
    return (
        <div className="my-4">
            <h4>Did you create profile?</h4>
            <Link to="/user/profile" >Create Profile</Link>

            <h4 className="my-5">Thanks {currUser.displayName} for placing the order! Your Product
                will be delivered within there or four working days.!
            </h4>
        </div>
    )
}
