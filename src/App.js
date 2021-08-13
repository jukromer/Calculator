import React from 'react';
import './App.css';


class App extends React.Component {

  state = {
    input: '',
    output: '0',
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
      output: "0"
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
    var result = 0;
    var operators = [];
    var indices = [];

    for (let i = 0; i < input.length; i++) {
      if (input[i] === "+" || input[i] === "-" ||input[i] === "*" || input[i] === "/"){
        indices.push(i) 
        operators.push(input[i]) 
      }
    }
    let replaced = input.split('')
    for (let i = 0; i < indices.length; i++) {
      replaced[indices[i]] = 'SPACER'
    }
    replaced = replaced.join('')
    console.log(replaced)
    const numbers = replaced.split('SPACER')
    console.log(numbers)
    
    result = parseFloat(numbers[0])
    for (var op = 0; op < operators.length; op++) {
      if (operators[op] === "+") {
        result += parseFloat(numbers[op+1])
      }else if (operators[op] === "-") {
        result -= parseFloat(numbers[op+1])
      }else if (operators[op] === "*") {
        result *= parseFloat(numbers[op+1])
      }else if (operators[op] === "/") {
        result /= parseFloat(numbers[op+1])
      }

    this.setState({
      output: result,
      input: ""
    })
    }
  }
  render() {
    return (
      <div className="App">
        <div className="Calculator">
          <input onChange={this.handleInput('input')} value={this.state.input} type="text"></input>
          <br/>
          <button className="button" onClick={this.handleButton("7")}>7</button>
          <button className="button" onClick={this.handleButton("8")}>8</button>
          <button className="button" onClick={this.handleButton("9")}>9</button>
          <button className="button" onClick={this.handleAC}>AC</button>
          <br/>
          <button className="button" onClick={this.handleButton("4")}>4</button>
          <button className="button" onClick={this.handleButton("5")}>5</button>
          <button className="button" onClick={this.handleButton("6")}>6</button>
          <button className="button" onClick={this.handleButton("*")}>*</button>
          <button className="button" onClick={this.handleButton("/")}>/</button>
          <br/>
          <button className="button" onClick={this.handleButton("1")}>1</button>
          <button className="button" onClick={this.handleButton("2")}>2</button>
          <button className="button" onClick={this.handleButton("3")}>3</button>
          <button className="button" onClick={this.handleButton("+")}>+</button>
          <button className="button" onClick={this.handleButton("-")}>-</button>
          <br/>
          <button className="button" onClick={this.handleButton("0")}>0</button>
          <button className="button" onClick={this.handleButton(".")}>.</button>
          <button className="button" onClick={this.handleEquals("huh")}>=</button>
          <button className="button" onClick={this.handleAns}>Ans</button>

          <br/>
          <input onChange={this.handleInput('output')} value={this.state.output} type="text"></input>
        </div>
      </div>
    );
  }
}

export default App;
