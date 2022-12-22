import React from 'react'
import Header from '../header/Header'
import img from '../../images/image-product-1.jpg'
import img2 from '../../images/image-product-2.jpg'
import img3 from '../../images/image-product-3.jpg'
import img4 from '../../images/image-product-4.jpg'
import Carousel from 'react-bootstrap/Carousel';
import './imgs.css'
import { useState } from 'react'

function Page(){

    const [number,setNumber]= useState(0)

    const [card,setCard]= useState(0)

    function somar(){
        setNumber(number +1)
    }

    function diminuir(){
        if(number <=0){
            number(0)
        }
        setNumber(number-1)
    }

    function addToCart(){
        let valor = 125 * number
        setCard(valor)
    }

    return(
        <>
          <Header numero={number} card={card}/>
    
         <div className='body d-flex container   justify-content-center align-items-center'>
    
            <div className='p'>
            <Carousel>
                        <Carousel.Item>
                            <img 
                            className="imgPrincp"
                            src={img}
                            alt="First slide"
                            />
                           
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className=" imgPrincp "
                            src={img2}
                            alt="Second slide"
                            />

                           
                        </Carousel.Item>
                        <Carousel.Item>
                        
                            <img
                            className=" imgPrincp "
                            src={img3}
                            alt="Third slide"
                            />

                            
                        </Carousel.Item>
                        <Carousel.Item>
                        
                        <img 
                        className=" imgPrincp"
                        src={img4}
                        alt="Third slide"
                        />

                      
                    </Carousel.Item>
                </Carousel>
                <div className='imgs'>
                    <img className='i' src={img}></img>
                    <img className='i' src={img2}></img>
                    <img className='i' src={img3}></img>
                    <img className='i' src={img4}></img>
                </div>
            </div>           
            
            <div className='content'>
                <p className='sne'>Sneaker Company</p>
                <h3>Fall Limited Edition Sneakers</h3>
                <p className='desc'>These low-profile sneakers are your perfect casual wear companion.
                <br></br> Featuring a durable rubber outer sole,<br></br> they’ll withstand everything the weather can offer.</p>
                <h4 className='preco'> $125.00<span className='sp'>50%</span></h4>
                <p className='d'>$250.00</p>    
                <div className='d-flex botoes align-items-center justify-content-center'>
                    <button onClick={diminuir} className='botao'>-</button>
                    <p className='nu'>{number}</p>
                    <button onClick={somar} className='botao'>+</button> 
                </div>  
                <button onClick={addToCart} className='cart'> <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>   Add to cart</button>                 
            </div>
         </div>
        </>
      
    )
}


export default Page