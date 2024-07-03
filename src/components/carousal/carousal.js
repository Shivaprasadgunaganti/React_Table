// import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const Siva =()=>{
        return (
            <Carousel width={'20%'}>
                <div >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTFrhr_-pYR74jUgOy7IerAoHAX3zPIZZcg&s" alt=""/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg" alt=""/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt=""/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }