import React, { useState } from 'react';
import "./Book.css";
import useMovieData from '../../CustomHook/useMovieDate';
import { useNavigate, useParams } from 'react-router-dom';

const Book = () => {
    const [userData, setUserData] = useState({ fullname: "", email: "", movieName: "" });
    const [formData, setFormData] = useState([]);
    const [movies] = useMovieData();
    const { id } = useParams();
    const navigate = useNavigate();
    const targetShow = movies.find(movie => movie.show.id.toString() === id);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevUserData => ({ ...prevUserData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (targetShow && targetShow.show && targetShow.show.name) {
            setUserData(prevUserData => ({ ...prevUserData, movieName: targetShow.show.name }));
        }

        const updatedFormData = [...formData, userData];
        setFormData(updatedFormData);

        // Store the updated form data in localStorage
        localStorage.setItem('userData', JSON.stringify(updatedFormData));
        alert("Thank You , Have a good Day :)")
        navigate("/")
        window.location.reload();
    };

    console.log(formData);

    return (
        <div className='booking-page'>
            <div className="booking-data">
                <h1>Book a Ticket 🚀</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="movieName">Movie⭐ : </label><br />
                    <input type="text" name='movieName' value={targetShow?.show?.name} onChange={handleChange} placeholder={targetShow?.show?.name} /><br />
                    <label htmlFor="fullname">Full Name : </label><br />
                    <input type="text" name='fullname' value={userData.fullname} onChange={handleChange} placeholder='Enter your full name ' /><br />
                    <label htmlFor="email">Email : </label><br />
                    <input type="email" name='email' value={userData.email} onChange={handleChange} placeholder='Enter your emailID ' /><br />
                    <button type='submit'>Book Now</button>
                </form>
            </div>
        </div>
    );
};

export default Book;
