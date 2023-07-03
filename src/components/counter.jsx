import React, { Component } from 'react';


class Counter extends Component {

 

    render() { 
       // console.log('props', this.props);
        return (
        <div>
            
       
            <span className={this.getBadgeColor()}>{this.props.counter.value === 0 ? "Zero" : this.props.counter.value}</span>
            <button onClick={ () => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2 "> Delete</button>
        </div>
        );
    }

     

    getBadgeColor() {
        let classes = 'badge m-2 text-bg-';
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;