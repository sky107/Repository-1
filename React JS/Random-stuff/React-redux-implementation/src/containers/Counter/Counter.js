import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

/*connect is a hoc that returns funcion adnd takes component */
import {connect} from 'react-redux';




class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onIncrementby5Counter} />
                <CounterControl label="Subtract 5" clicked={this.props.onDecrementby5Counter}  />
            </div>
        );
    }
}

const mapStateToProps=state=>{
return {
ctr:state.counter
};
}

const mapDispatchToProps=dispatch=>{
return{
	onIncrementCounter:()=>dispatch({type:'INCREMENT'}),
	onDecrementCounter:()=>dispatch({type:'DECREMENT'}),
	onIncrementby5Counter:()=>dispatch({type:'INCREMENTBY5'}),
	onDecrementby5Counter:()=>dispatch({type:'DECREMENTBY5'})
};
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);