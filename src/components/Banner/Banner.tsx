import React, { useState, useEffect } from 'react';
import './Banner.css';
import img1  from "../../public/images/img1.jpg"
import img2 from "../../public/images/img2.jpg"

const Banner = () => {
    const images = [img1,img2]; // replace with your image paths
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, 3000); // change image every 3 seconds
        return () => clearInterval(timer); // cleanup on unmount
    }, [currentImageIndex, images.length]);

    return (
        <div className="banner">
            <img src={images[currentImageIndex]} alt="banner" />
        </div>
    );
};

export default Banner;
