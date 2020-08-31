import React from 'react';
import {ProductConsumer} from '../context/Context';
import {Link} from 'react-router-dom';
import ButtonContainer from '../Button/button';

class Details extends React.Component{
  render(){
    return(
        <ProductConsumer>
                {value=> {
                 const { id,company, img, info, price, title, inCart } = value.detailProducts;
                      return (
                        <div className="container py-5 " style={{color:'#000'}}  >
                          {/* title */}
                                <div className="row"> 
                                        <div className="col-10 mx-auto text-center text-uppercase text-slanted my-5" >
                                                <strong><h1 style={{color:'#fff'}}>{title}</h1> </strong>
                                        </div>
                                </div>
                          {/* end of title */}

                           {/* product info */}
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3 ">
                                          <img src={img} className="img-fluid" style={{height:'23rem', width:'25rem'}} alt=""/>
                                    </div>
                                        {/* product-text */}
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize "  >
                                          <h3 >Model:<span > {title} </span></h3>
                                          <h4 className=" text-title text-capitalize text-muted mt-3 mb-2">
                                            
                                            <strong style={{color:'#000'}} > Made By: <span className="text-uppercase" style={{color:'#000'}}  > {company} </span> </strong>
                                          </h4>

                                          <h4 className="" >
                                                <strong >
                                                  Price: <span style={{color:'#000'}} >${price} </span>
                                                </strong>
                                          </h4>
                                          <p className="text-capitalize font-weight-bold mt-3 mb-0" > 
                                              Informations About The Product: 
                                          </p>

                                          <p className=" lead" style={{color:'#000'}}> {info}</p>

                                          {/*buttons*/}
                                          <div>
                                                <Link to="/" >
                                                      <ButtonContainer>
                                                          Back To Products 
                                                      </ButtonContainer>
                                                </Link>

                                                <ButtonContainer disabled={inCart?true:false}
                                                  cart
                                                  onClick={() => {
                                                  value.addToCart(id) 
                                                  }}
                                                > {/*in the disabled section it means if inCart = true then disabled = true else disabled = false */}
                                                    {inCart ? 'inCart': 'add to cart'}
                                                </ButtonContainer>
                                          </div>
                                    </div>

                                </div>
                        </div>
                      )
                }}
        </ProductConsumer>
    );
  }
}

export default Details;
