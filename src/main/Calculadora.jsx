import React, { Component } from "react";
import './Calculadora.css';
import Button from '../components/Button'
import Display from "../components/Display";
const initialState = {
    displayValue: '0',
    clearDisplay: false,
    current: 0,
    values: [0, 0],
    operator: null
}
export default class Calculadora extends Component {
    state = { ...initialState }
    limpaRole() {
        this.setState({ ...initialState })
        console.log('Limpou o rolê')
    }
    adicionaRole(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            console.log('AOOOOOOOOPA')
            return
        }
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        const values = this.state.values
        const current = this.state.current
        values[current] = displayValue
        this.setState({ clearDisplay: false, displayValue, values })
    }
    operacao(operator) {
        const current = 1
        const currentOperator = this.state.operator;
        const values = this.state.values;

        let resultado = this.state.displayValue

        if (currentOperator) 
        {
            switch (currentOperator) {
                case '+':
                    resultado = parseFloat(values[0]) + parseFloat(values[1]);
                    break;

                case '-':
                    resultado = values[0] - values[1];
                    break;
                case '/':
                    if (values[1] === '0') {
                        this.setState({...initialState, displayValue: "EROOOR", clearDisplay: true})
                        return;
                    }
                    resultado =  parseFloat(values[0]) / parseFloat(values[1]);
                    break;
                case '*':
                    resultado = parseFloat(values[0]) * parseFloat(values[1]);
                    break;
                default:
                    break;
            }
        }

        values[0] = resultado;
        this.setState({ current, clearDisplay: true, displayValue: resultado, operator })
    }
    render() {
        const adicionaRole = n => this.adicionaRole(n)
        const operacao = op => this.operacao(op)
        return (
            <div className="calc">
                <Display value={this.state.displayValue}></Display>
                <Button label="AC" className="button triple" click={() => this.limpaRole()}></Button>
                <Button label="/" className="button operator" click={operacao}></Button>
                <Button label="7" className="button" click={adicionaRole}></Button>
                <Button label="8" className="button" click={adicionaRole}></Button>
                <Button label="9" className="button" click={adicionaRole}></Button>
                <Button label="*" className="button operator" click={operacao}></Button>
                <Button label="4" className="button" click={adicionaRole}></Button>
                <Button label="5" className="button" click={adicionaRole}></Button>
                <Button label="6" className="button" click={adicionaRole}></Button>
                <Button label="+" className="button operator" click={operacao}></Button>
                <Button label="1" className="button" click={adicionaRole}></Button>
                <Button label="2" className="button" click={adicionaRole}></Button>
                <Button label="3" className="button" click={adicionaRole}></Button>
                <Button label="-" className="button operator" click={operacao}></Button>
                <Button label="0" className="button double" click={adicionaRole}></Button>
                <Button label="." className="button" click={adicionaRole}></Button>
                <Button label="=" className="button operator" click={operacao}></Button>
            </div>
        )
    }
}