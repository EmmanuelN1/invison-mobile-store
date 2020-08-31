import React from 'react'

export default function CartItem({item, value}) {
    const {id,title,img, price, total, count} = item;
    const{increment, decrement, removeItem  } = value; //destructuring and getting it from the value
    return (
        <div className="row my-2 text-capitalize text-center " style={{color:'#fff'}}>
                    
                    <div className="col-10 mx-auto col-lg-2 " >
                        <img 
                        src={img} 
                        style={{height:'5rem', width:'5rem'}}
                        className="img-fluid"
                        alt="product"   />
                    </div>
                    
                    <div className="col-10 mx-auto col-lg-2 ">
                            <span className="d-lg-none"> {/* it shouldnt display anything on a large screen */}
                                 <strong> Product: </strong>
                            </span>
                            {title}
                    </div>


                    <div className="col-10 mx-auto col-lg-2 ">
                            <span className="d-lg-none"> {/* it shouldnt display anything on a large screen */}
                                 <strong> Price: </strong>
                            </span>
                            ${price}
                    </div>


                    <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                        <div className="d-flex justify-content-center">
                                <div className=""> 
                                    <span className="btn btn-black mx-1" style={{color:'#fff'}}  onClick={() => decrement (id)}>
                                                    -
                                    </span>

                                    <span className="btn btn-black mx-1" style={{color:'#fff'}}> {count}</span>

                                    <span className="btn btn-black mx-1" style={{color:'#fff'}}  onClick={() => increment (id)}>
                                                    +
                                    </span>
                                   
                                </div>
                        </div>
                    </div>


                    <div className="col-10 mx-auto col-lg-2 ">
                           <div className="cart-icon" onClick={() => removeItem(id)}>
                               <i className="fas fa-trash" style={{color:'#fff'}} ></i>
                           </div>
                    </div>



                    <div className="col-10 mx-auto col-lg-2 ">
                                 <strong> item total :$ {total} </strong>
                    </div>




        </div>
    )
}
