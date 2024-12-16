import React, { useState } from "react";

const SendPrescription = () => {
    const [formData, setFormData] = useState ({
        firstName: "",
        lastName: "",
        mobile: "",
        gender: "",
        age: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    return (
        <div className="send-prescription">
            <h2>Send Prescription</h2>
            <form onSubmit={handleSubmit}>
                <div className="form=group">
                    <label>First Name</label>
                    <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                    required
                    />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                    required
                    />
                </div>
                <div className="form-group">
                    <label>Mobile No.</label>
                    <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+91"
                    required/>
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <div>
                        <label>
                            <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={formData.gender === "Male"}
                            onChange={handleChange}
                            />
                            Male
                        </label>
                        <label>
                            <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={formData.gender === "Female"}
                            onChange={handleChange}
                            />
                            Female
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Enter age"
                    required
                    />
                </div>
                <div className="form-actions">
                    <buttons type="submit">Continue</buttons>
                    <button type="button" onClick={() => console.log("Canceled")}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SendPrescription;