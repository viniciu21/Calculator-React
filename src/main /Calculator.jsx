import React from 'react'
import Btn from '../components/Btn'
import Display from '../components/Display'
import './Calculator.css'

const inicialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0
}

export default class Calculator extends React.Component{

    state = {...inicialState}

    constructor(props){
        super(props)

        this.clear = this.clear.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clear(){
        this.setState({...inicialState})
    }

    setOperation(operation){
        if(this.state.current === 0){

            this.setState({operation, current:1, clearDisplay: true})
        }

        else{
            const equals = operation === '='
            const currentOperation = this.state.operation
            const values = [...this.state.values]
            try{
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            }
            catch(e){
                values[0] = this.state.values[0]
            }
            values[1] = 0
            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals, 
                values 
            })
        }

    }

    addDigit(n){
        if (n === '.' && this.state.displayValue.includes('.')){
            return
        }
        
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        const currentValue = clearDisplay ? '' : this.state.displayValue

        const displayValue = currentValue + n 

        this.setState({displayValue, clearDisplay: false})

        if( n !== '.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values})            
        }
    }

    render(){

        return <div className = 'calculator'>
            <Display value ={this.state.displayValue}/>
            <Btn label ='AC' click = {this.clear} triple/>
            <Btn label = '/' click = {this.setOperation} operation/>
            <Btn label = '7' click = {this.addDigit}/>
            <Btn label = '8' click = {this.addDigit}/>
            <Btn label = '9' click = {this.addDigit}/>
            <Btn label = '*' click = {this.setOperation} operation/>
            <Btn label = '4' click = {this.addDigit}/>
            <Btn label = '5' click = {this.addDigit}/>
            <Btn label = '6' click = {this.addDigit}/>
            <Btn label = '-' click = {this.setOperation} operation/>
            <Btn label = '1' click = {this.addDigit}/>
            <Btn label = '2' click = {this.addDigit}/>
            <Btn label = '3' click = {this.addDigit}/>
            <Btn label = '+' click = {this.setOperation} operation/>
            <Btn label = '0' click = {this.addDigit} double/>
            <Btn label = '.' click = {this.addDigit}/>
            <Btn label = '=' click = {this.setOperation} operation/>

        </div>
    }
}