import React from 'react';
import './App.css';


class App extends React.Component {

  state = {
    input: '',
    output: '',
  }

  handleInput = fieldName => e => {
    this.setState({ [fieldName]: e.target.value }); 
  }

  handleButton = value => () => {
    this.setState({ input: this.state.input + value })
  }

  handleAC = () => {
    this.setState({
      input: "",
      output: ""
    })
  }

  handleAns = () => {
    if (this.state.output === "") {
      
    }else{
      this.setState({
        input: this.state.output,
        output: ""
    })}
  }

  handleEquals = value => () => {
    const { input } = this.state; // const input = this.state.input
    if (input.includes("-")) {
      const ints = input.split("-").map(s => parseInt(s))
      this.setState({
        output: ints[0]-ints[1],  
        input: ""
      });
    } else if (input.includes("+")){
      const ints = input.split("+").map(s => parseInt(s))
      this.setState({
        output: ints[0]+ints[1],  
        input: ""
      });
    } else if (input.includes("/")){
      const ints = input.split("/").map(s => parseInt(s))
      this.setState({
        output: ints[0]/ints[1],
        input: ""
      });
    } else if (input.includes("*")){
      const ints = input.split("*").map(s => parseInt(s))
      
      this.setState({
        output: ints[0]*ints[1],
        input: ""
      });
    } else {
      this.setState({
        output: input,
        input: ""
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Calculator">
          <input onChange={this.handleInput('input')} value={this.state.input} type="text"></input>
          <br/>
          <button onClick={this.handleButton("7")}>7</button>
          <button onClick={this.handleButton("8")}>8</button>
          <button onClick={this.handleButton("9")}>9</button>
          <button onClick={this.handleAC}>AC</button>
          <br/>
          <button onClick={this.handleButton("4")}>4</button>
          <button onClick={this.handleButton("5")}>5</button>
          <button onClick={this.handleButton("6")}>6</button>
          <button onClick={this.handleButton("*")}>*</button>
          <button onClick={this.handleButton("/")}>/</button>
          <br/>
          <button onClick={this.handleButton("1")}>1</button>
          <button onClick={this.handleButton("2")}>2</button>
          <button onClick={this.handleButton("3")}>3</button>
          <button onClick={this.handleButton("+")}>+</button>
          <button onClick={this.handleButton("-")}>-</button>
          <br/>
          <button onClick={this.handleButton("0")}>0</button>
          <button onClick={this.handleButton(".")}>.</button>
          <button onClick={this.handleEquals("huh")}>=</button>
          <button onClick={this.handleAns}>Ans</button>

          <br/>
          <input onChange={this.handleInput('output')} value={this.state.output} type="text"></input>
        </div>
      </div>
    );
  }
}

export default App;
