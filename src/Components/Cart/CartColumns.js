import React from 'react';


class CartColumns extends React.Component{
    render(){
        return(
            <div className="container-fluid text-center d-none d-lg-block"> {/*d-lg means display larger and d-none means displayNone */}
                        <div className="row">
                                <div className="col-10 mx-auto col-lg-2">
                                        <p className="text-uppercase">Products</p>
                                </div>

                                <div className="col-10 mx-auto col-lg-2">
                                        <p className="text-uppercase">Name of Product</p>
                                </div>

                                <div className="col-10 mx-auto col-lg-2">
                                        <p className="text-uppercase">Price</p>
                                </div>

                                <div className="col-10 mx-auto col-lg-2">
                                        <p className="text-uppercase">Quantity</p>
                                </div>

                                <div className="col-10 mx-auto col-lg-2">
                                        <p className="text-uppercase">Remove</p>
                                </div>

                                <div className="col-10 mx-auto col-lg-2">
                                        <p className="text-uppercase">Total</p>
                                </div>
                                
                        </div>
            </div>
        )
    }
}
export default CartColumns;