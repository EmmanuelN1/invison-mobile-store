import styled from 'styled-components';

const ButtonContainer = styled.button `
text-transform:capitalize;
background:${prop => prop.cart ? "white" : "white"};
font-size:1.25rem;
border-radius:.5rem;
border-color:${prop => prop.cart ? "" : ""}; //it simply means if the props cart is exist then the border-color = grey else = black
color:${prop => prop.cart ? "red" : "black"};
padding: 0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5em;
transistion: all 0.5s ease-in-out;
&:hover{
    background:${prop => prop.cart ? "white" : "white"};
    color: ${prop => prop.cart ? "red" : "#000"};
}
&:focus{
    outline:none;
}

`;

export default ButtonContainer;