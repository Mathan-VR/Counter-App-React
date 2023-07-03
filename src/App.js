import React, { Component, startTransition, useState } from 'react';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends Component {

    initialstate = { 
          counters : [
          ],
          index : 0
      } 

      state = this.initialstate;

     handleIncrement = counter => {
      //  console.log(counter);
        // this.setState({value : this.props.counter.value + 1 });
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    };

    handleAdd = () => {
      let id = this.state.index + 1;
        
      const newElement = {id : id, value : 0 };
      const counters = this.state.counters.push(newElement);

     // console.log(this.state.counters);
     // console.log(newElement);
      //  console.log(this.state.counters);
       // console.log('element',newElement);

      //  console.log('new',counters);
        this.setState({ counters : this.state.counters, index : id });
    };

    handleReset = () => {
        const counters = this.state.counters.map(c=> {
                c.value = 0;
                return c;
            });
        //console.log(counters);
        this.setState({counters});
    };

    handleDelete = counterId => {
           // console.log('event handler Called', counterID);
        const counters = this.state.counters.filter( c=> c.id !== counterId);
        this.setState({ counters});
    };
    render(){
    //  const { counters } = this.state.counters;
      console.log('counter',this.state.counters);
  return (
    <>    
      <Navbar totalCounters={this.state.counters.filter(c=> c.value > 0 ).length}/>
      <main className='container'>
            <Counters 
                  counters={this.state.counters}
                  onAdd = {this.handleAdd}
                  onReset={this.handleReset}
                  onIncrement={this.handleIncrement}
                  onDelete={this.handleDelete}
            />
      </main>
      
    </>

  );
 }
}

export default App;
