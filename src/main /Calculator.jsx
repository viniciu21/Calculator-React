import React from 'react'
import Btn from '../components/Btn'
import Display from '../components/Display'
import './Calculator.css'

export default class Calculator extends React.Component{

    constructor(props){
        super(props)

        this.clear = this.clear.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clear(){
        console.log('limpar');
    }

    setOperation(operation){
        console.log(operation);
    }

    addDigit(n){
        console.log(n);
    }

    render(){

        return <div className = 'calculator'>
            <Display value ={100}/>
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