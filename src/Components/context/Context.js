import React, {Component} from 'react';
import {storeProducts, detailProducts} from '../data/data';

//Context Api 
const ProductContext = React.createContext();

//Provider
//Consumer  


class ProductProvider extends Component{
    state = {
        products:[],
        detailProducts:detailProducts,
        cart: [] ,
        modalOpen:false,
        modalProduct:detailProducts,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0
    };


    componentDidMount(){
        this.setProducts();
    }

    //set Products

    setProducts = () => {
        let tempProducts = [];

        //looping the storeProducts
                storeProducts.forEach( item =>{
                    // assigning and copying from the objects
                    const singleItem = {...item}; 
                    tempProducts = [...tempProducts, singleItem]
                })


            this.setState(() => {
                return{ 
                    products : tempProducts
                }
            })

    }

    getItem = id => {
            const product = this.state.products.find(item => item.id === id);
            return product;
    }
    handleDetail = (id) =>{
        const product = this.getItem(id);
        this.setState (() => {
            return {detailProducts : product}
        })
    }

    addToCart = (id) => {

        //gives acess to the product in the state
        let tempProducts = [...this.state.products];
         //finding the index  
         const index = tempProducts.indexOf(this.getItem(id));
         const product = tempProducts[index];
         product.inCart = true;
         product.count = 1;
         const price = product.price;
         product.total = price;


         this.setState(() => {
             return {
                 //setting your product to be your temp products
                 products:tempProducts,
                 cart:[...this.state.cart, product] }
         }, () => {
             this.addTotals();
         });

    }

    openModal = (id) => {
        //retrieve the products
        const product = this.getItem(id);
        this.setState(() => {
            return {modalProduct:product,
                    modalOpen:true // to open the modal
            }
        })        
    }

    closeModal = ()  => {
        this.setState(()=> {
            return {
                modalOpen:false, //to close the modal
            }
        })
    }

    increment = (id) => {
        let tempCart = [...this.state.cart]//getting the cart values from the state
        const selectedProduct = tempCart.find(item => item.id === id) //should return the id if both id matches

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index]//using the index to find the specific product

        product.count = product.count + 1;
        product.total = product.count * product.price;


        this.setState (() => {
            return {
                cart:[...tempCart]
            }
        }, () => {
            this.addTotals();
        })
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart]//getting the cart values from the state
        const selectedProduct = tempCart.find(item => item.id === id) //should return the id if both id matches

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index]//using the index to find the specific product

        product.count = product.count - 1;

        if (product.count === 0){
            this.removeItem(id);
        } else{
            product.total = product.count * product.price;
             this.setState (() => {
                return {
                    cart:[...tempCart]
                }

                }, () => {
                    this.addTotals();
                })
    }
        
    }
    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id!== id );


        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count  = 0;
        removedProduct.total = 0;

        this.setState(() => {
                return{
                    cart:[...tempCart],
                    products:[...tempProducts]
                }
        }, () => {
            this.addTotals();
        }
        );
    }





    clearCart = () =>{
        this.setState( ()=> {
            return{
                cart:[]
            } , () => {
                this.setProducts(); //call back function that sets it back to the original state
                this.addTotals(); //this function updates the totals
            }
        })
    }
    
    addTotals = () => {
       let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));   //loop through the items in the cart
        const tempTax = subTotal * 0.1; //this is because the tax is 10%
        const tax = parseFloat(tempTax.toFixed(2)); // it means it should return a 2 decimal number
        const total = subTotal + tax;

        // this method set the state of the application
        this.setState(() => {
            return {
                cartSubTotal:subTotal,
                cartTax:tax,
                cartTotal:total
            }
        })  
    }
     render(){
        return(
            <ProductContext.Provider value={{
                ...this.state, //add everything in the cart
                handleDetail : this.handleDetail,
                addToCart : this.addToCart,
                openModal:this.openModal,
                closeModal :this.closeModal,
                increment:this.increment,
                decrement: this.decrement,
                removeItem :this.removeItem,
                clearCart:this.clearCart
            }}>

                    {this.props.children}
            </ProductContext.Provider>
        );  
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer } ;