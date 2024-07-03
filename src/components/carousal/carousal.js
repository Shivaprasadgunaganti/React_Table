
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'

const Carousel1=()=>{
    
        return (
            <Carousel width={300}>
                <div>
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"  alt=""/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"  alt=""/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"alt=""/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
    export default Carousel1