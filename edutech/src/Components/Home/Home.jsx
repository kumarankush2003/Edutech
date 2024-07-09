import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../../assets/ivikaas.jpg';
import img2 from '../../assets/jeemain.png';
import img3 from '../../assets/vijay.jpg';

const Home = () => {
    return (
        <div className="home-page">
            <Carousel autoPlay infiniteLoop showThumbs={false}>
                <div>
                    <img src={img1} alt="Image 1" />
                </div>
                <div>
                    <img src={img2} alt="Image 2" />
                </div>
                <div>
                    <img src={img3} alt="Image 3" />
                </div>
            </Carousel>
        </div>
    );
};

export default Home;
