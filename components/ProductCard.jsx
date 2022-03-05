import React from 'react'
import Image from 'next/image';
import {useRouter} from 'next/router';
import { isCartAvailable } from '../constant/projectSetting';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/actions/cartActions';
import { toast } from 'react-toastify';

export default function ProductCard(props){
    const { product, hideAddToCart }=props;
    const dispatch = useDispatch();
    const router = useRouter();
    const handleProductClick =()=>{
        router.push(`/product/${product.slug}`);
    }

    const handleAddToCart =()=>{
        dispatch(addItemToCart(product));
        toast.success("Item Added to Cart Successfully!");
    }
    
    return (
        <div className="product">
            <div className="img-prod pointer"  onClick={handleProductClick}>
                <Image height="700px" width="500px" className="img-fluid" src={product.images[0].data} alt="Colorlib Template" />
                <span className="status">30%</span>
            </div>
            <div className="text">
                    <div className='pt-2 px-3 pointer' onClick={handleProductClick}>
                        <h3 className='text-capitalize'>{product.name}</h3>
                        <div className="d-flex">
                        <div className="pricing">
                            <p className="price"><span className="mr-2 price-dc">&#8377;120.00</span><span className="price-sale">$80.00</span></p>
                        </div>
                        <div className="rating">
                            <p className="text-right">
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star-o"></span>
                            </p>
                        </div>
                    </div>
                </div>
                {!hideAddToCart && isCartAvailable && <div className='pb-2 px-3'><hr />
                <div className="bottom-area d-flex">
                    <div  className="add-to-cart" onClick={handleAddToCart}><span className="icon-cart-plus mr-2"></span><span>Add to cart  </span></div>
                    <a href="#" className="ml-auto"><span className="icon-heart-o"></span></a>
                </div></div>}
            </div>
        </div>
    )
}
