import React from 'react';
import Product from '../Product/Product.js';
import Title from '../Title/Title'; 
import {ProductConsumer}from '../context/Context';


class ProductListing extends React.Component{
   
  render(){
    return(
        <React.Fragment>
            <div className="py-5">
                    <div className="container" >
                        <Title name={"Our"} title={"Products"} />
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map( product => {
                                            return <Product key={product.id} product={product} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
            </div>

        </React.Fragment>
        

        //<Product/>


    );
  }
}

export default ProductListing;
