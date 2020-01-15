import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../../redux'

const IceCreamContainer = props => {
    return (
        <div>
            <h2>Number of iceCream - {props.numOfIceCreams} </h2>
            <button onClick={props.buyIceCream}>Buy ice cream</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        numOfIceCreams : state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);