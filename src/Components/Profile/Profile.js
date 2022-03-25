import React from 'react';
import { useAuth } from '../../context/AuthContext';

export default function Profile() {
    const { currUser } = useAuth();
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 my-5">
                    <h5>Name: {currUser.displayName}</h5>
                    <p>E-mail: {currUser.email}</p>
                    <p>Phone: Empty</p>
                    <p>Address: Empty</p>
                </div>
                <div className="col-md-6 my-5">
                    <form>
                        <div className="form-group my-3">
                            <label htmlFor="phone" className="my-2">Enter Phone Number</label>
                            <input type="phone" name="phone" id="phone" className="form-control" placeholder="phone" />
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="address" className="my-2">Enter your current address</label>
                            <textarea type="text" name="address" id="address" className="form-control" placeholder="current address"></textarea>
                        </div>
                        <input type="submit" value="Save Info" />
                    </form>
                </div>
            </div>
        </div>
    )
}
