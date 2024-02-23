import React from 'react';
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const ListCard = ({product}) => {
    return (
      <Link to={`/products/product/details/${product._id}`}>
        <div className=' flex md:flex-row flex-col justify-normal gap-5 hover:shadow-md p-5'>
            <div className=' md:w-[40%]'>
                <img src={product.images[0]} alt="" />
            </div>
            <div className=' w-full space-y-4'>
                <p className=' text-color_secondary font-semibold'>{product.details.name}</p>
                <h1 className=' text-xl text-color_primary'>{product.model.length > 30 ? product.model.slice(0,30) + '...' : product.model}</h1>
                <Rating readonly initialRating={4.5} emptySymbol={<TiStarOutline></TiStarOutline>} fullSymbol={<TiStarFullOutline></TiStarFullOutline>}/>
                <p>{product.description.length > 320 ? product.description.slice(0,320)+'...' : product.description}</p>
                <div>
            <div className='space-y-1 '>
                    <div>
                        <h1 className=' font-semibold text-xl text-text_color'>Available : <span className=' text-color_secondary'>{product.details.sold}/{product.details.quantity}</span></h1>
                       <div className=' rounded-full border border-color_secondary'>
                       <div className='py-1 bg-color_blue rounded-full ' style={{width:`${(product.details.sold/product.details.quantity)*100}%`}}></div>
                       </div>
                    </div>
                </div>
                <h2><del>BDT {product.pricing.price}</del><span className=' text-color_primary font-semibold text-[18px]'>  BDT {product.pricing.discountPrice}</span></h2>
               
            </div>
            </div>
       
        </div></Link>
    );
}

export default ListCard;
