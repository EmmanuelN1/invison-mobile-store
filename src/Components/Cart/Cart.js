import React from 'react';
import Title from '../Title/Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../context/Context';
import CartList from './CartList';
import CartTotals from './CartTotals'

class Cart extends React.Component{
  render(){
    return(
        <section>
          {/*The entire functions help to show a page if the cart is > zero else show the other page  */}
          <ProductConsumer>
            {/* setting up a fuction with parameter value*/}
              {value =>{
                  //acessing cart from the value
                  const {cart} = value;
                  if (cart.length > 0 ) {
                    return (
                      <React.Fragment>
                          <Title name="Your"  title="Cart" />
                          <CartColumns/>
                          <CartList value={value}/> {/*The value prop is set to a parameter that is set to the function above */}
                          <CartTotals value={value}  history={this.props.history}/>
                      </React.Fragment>
                    )
                  }
                  else{
                    return <EmptyCart/>;
                  }

              }}
          </ProductConsumer>
        </section>
    );
  }
}

export default Cart;
