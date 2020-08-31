import React, {Component} from 'react'; 
import styled from 'styled-components';
import {ProductConsumer} from '../context/Context';
import ButtonContainer  from '../Button/button';
import {Link} from 'react-router-dom';



class Modal extends Component{
    render () {
        return(
            <ProductConsumer>
                {/*getting the value params */}
                {(value) => {
                   const {  modalOpen, closeModal} = value;
                   const  {img, title, price} =value.modalProduct;

                   if (!modalOpen){
                       return null;
                   }
                   else{
                      return ( <ModalContainer>
                                    <div className="container">
                                        <div className="row">
                                                <div id="modal" className="col-8 mx-auto col-md-b col-lg-4 text-center text-capitalize p-5">
                                                            <h5>Item added to the cart </h5>
                                                            <img src={img} alt="" className="img-fluid"/> {/* ImageFluid => it only makes sure the image isnt bigger than the container*/}
                                                            <h5 className="pt-3">{title}</h5>
                                                            <h5 className="text-muted"> Price : ${price}</h5>
                                                            <Link to= "/">
                                                                <ButtonContainer onClick={() => closeModal()}>
                                                                    Keep Shopping
                                                                </ButtonContainer>
                                                            </Link>

                                                            <Link to= "/cart"> 
                                                                <ButtonContainer onClick={() => closeModal()}>
                                                                        Go To Cart
                                                                </ButtonContainer>
                                                            </Link>
                                                </div>
                                        </div>
                                    </div>
                       </ModalContainer>
                      )
                   }
                }}
            </ProductConsumer>
        )
    }
}

export default Modal;

const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background: rgba (0, 0, 0, 0.3);
display:flex;
align-items:center;
justify-content:center;

    #modal{
        background: #000 ;
        color:#fff;
    }  


`