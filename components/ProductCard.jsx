import React from 'react'
import Image from 'next/image';
import {useRouter} from 'next/router';

export default function ProductCard(props){
    const { imageSrc="/images/product-3.jpg", hideAddToCart }=props;
    const router = useRouter();
    const handleProductClick =()=>{
        router.push("/product/asha");
    }
    return (
        <div className="product">
            <div className="img-prod pointer"  onClick={handleProductClick}>
                <Image height="700px" width="600px" className="img-fluid" src={imageSrc} alt="Colorlib Template" />
                <span className="status">30%</span>
            </div>
            <div className="text">
                    <div className='pt-3 px-3 pointer' onClick={handleProductClick}>
                        <h3>Young Woman Wearing Dress</h3>
                        <div className="d-flex">
                        <div className="pricing">
                            <p className="price"><span className="mr-2 price-dc">$120.00</span><span className="price-sale">$80.00</span></p>
                        </div>
                        <div className="rating">
                            <p className="text-right">
                                <span className="ion-ios-star-outline"></span>
                                <span className="ion-ios-star-outline"></span>
                                <span className="ion-ios-star-outline"></span>
                                <span className="ion-ios-star-outline"></span>
                                <span className="ion-ios-star-outline"></span>
                            </p>
                        </div>
                    </div>
                </div>
                {!hideAddToCart && <div className='pb-3 px-3'><hr />
                <p className="bottom-area d-flex">
                    <a href="#" className="add-to-cart"><span>Add to cart <i className="ion-ios-add ml-1"></i></span></a>
                    <a href="#" className="ml-auto"><span><i className="ion-ios-heart-empty"></i></span></a>
                </p></div>}
            </div>
        </div>

    )
}
