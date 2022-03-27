import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
    const { currUser } = useAuth();
    const [person, setPerson] = useState({});
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [data, setData] = useState({
        name: currUser.displayName,
        email: currUser.email,
        phone: "",
        address: "",
    });

    // onchange
    const handleChange = (e) => {
        if (e.target.name === "phone") {
            const newPhone = { ...data };
            newPhone.phone = e.target.value;
            setData(newPhone);
        }
        if (e.target.name === "address") {
            const newAddress = { ...data };
            newAddress.address = e.target.value;
            setData(newAddress);
        }

    };

    // handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = { ...data };
        fetch("https://portfolio-server01.herokuapp.com/address", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newData)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setSuccess('Data save successfully.!');

            })
            .catch((err) => {
                console.log(err);
                setSuccess('Data save successfully.!');
            });
    };

    // fetch single data
    useEffect(() => {
        fetch(`https://portfolio-server01.herokuapp.com/address/${currUser.email}`)
            .then(res => res.json())
            .then(data => {
                setPerson(data.person);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [currUser.email])

    // update info 
    const updateInfo = (e) => {
        e.preventDefault();
        const updateData = { ...data };
        fetch(`https://portfolio-server01.herokuapp.com/address/${person._id}`, {
            method: 'PUT',
            body: JSON.stringify(updateData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setSuccess('Information Update successfully.!');
            })
            .catch((err) => {
                console.log(err);
                setError('Information does not update.!');
            });

    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 my-5">
                    <h5>Name: {currUser.displayName}</h5>
                    <p>E-mail: {currUser.email}</p>
                    <p>Phone: {person ? person.phone : 'Empty'}</p>
                    <p>Address: {person ? person.address : 'Empty'}</p>
                </div>
                <div className="col-md-6 my-5">
                    {success && <p className="success">{success}</p>}
                    {error && <p className="error">{error}</p>}
                    {
                        person !== null ? <div>
                            <form onSubmit={updateInfo} >
                                <div className="form-group my-3">
                                    <label htmlFor="phone" className="my-2">
                                        Enter your updated phone number
                                    </label>
                                    <input
                                        type="text"
                                        onBlur={handleChange}
                                        name="phone"
                                        id="phone"
                                        className="form-control"
                                        placeholder="phone"
                                        required
                                    />
                                </div>
                                <div className="form-group my-3">
                                    <label htmlFor="address" className="my-2">
                                        Enter your updated address
                                    </label>
                                    <textarea
                                        type="text"
                                        onBlur={handleChange}
                                        name="address"
                                        id="address"
                                        className="form-control"
                                        placeholder="current address"
                                        required
                                    ></textarea>
                                </div>
                                <input type="submit" value="Update Info" class="btn btn-outline-primary" />
                            </form>
                        </div>
                            : <div>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group my-3">
                                        <label htmlFor="phone" className="my-2">
                                            Enter Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            onBlur={handleChange}
                                            name="phone"
                                            id="phone"
                                            className="form-control"
                                            placeholder="phone"
                                            required
                                        />
                                    </div>
                                    <div className="form-group my-3">
                                        <label htmlFor="address" className="my-2">
                                            Enter your current address
                                        </label>
                                        <textarea
                                            type="text"
                                            onBlur={handleChange}
                                            name="address"
                                            id="address"
                                            className="form-control"
                                            placeholder="current address"
                                            required
                                        ></textarea>
                                    </div>
                                    <input type="submit" value="Save Info" />
                                </form>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
}
