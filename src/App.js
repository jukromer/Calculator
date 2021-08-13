import React from 'react';
import './App.css';


class App extends React.Component {

  state = {
    input: '',
    output: '0',
    disable: false,
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

  handleKeys = event => {
    if(event.key === 'Enter') {
      this.handleEquals()()
    }else if (event.key === '1') {
      this.handleButton("1")()
    }else if (event.key === '2') {
      this.handleButton("2")()
    }else if (event.key === '3') {
      this.handleButton("3")()
    }else if (event.key === '3') {
      this.handleButton("3")()
    }else if (event.key === '4') {
      this.handleButton("4")()
    }else if (event.key === '5') {
      this.handleButton("5")()
    }else if (event.key === '6') {
      this.handleButton("6")()
    }else if (event.key === '7') {
      this.handleButton("7")()
    }else if (event.key === '8') {
      this.handleButton("8")()
    }else if (event.key === '9') {
      this.handleButton("9")()
    }else if (event.key === '/') {
      this.handleButton("/")()
    }else if (event.key === '*') {
      this.handleButton("*")()
    }else if (event.key === '-') {
      this.handleButton("-")()
    }else if (event.key === '+') {
      this.handleButton("+")()
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Calculator">
          <input onKeyPress={this.handleKeys} value={this.state.input} type="text" disabled={this.state.disable}></input>
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
          <input onChange={this.handleInput('output')} value={this.state.output} type="text" disabled={this.state.disable}></input>
        </div>
      </div>
    );
  }
}

export default App;
