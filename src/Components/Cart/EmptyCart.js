import React, {Component} from 'react';

class EmptyCard extends Component{
    render(){
        return(
            <div className="container mt-5">
                    <div className="row">
                            <div className="col-10 mx-auto text-uppercase text-title" > {/* if the width is small the spread across 10 colums but for other screens mx-auto  => centeralize its content */}
                                    <h1>Your Cart is currently empty</h1>
                            </div>
                    </div>
            </div>
        )
    }
}
export default EmptyCard;