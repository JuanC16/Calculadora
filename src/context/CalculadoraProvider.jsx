import { createContext,useState } from "react";

const CalculadoraContext = createContext()

const CalculadoraProvider = ({children}) => {

    const [calculadora,setCalculadora] = useState({
        actual: "0",
        total: "0",
        inicial: true,
        operator:""
    })

    const handleAC = () => {
        setCalculadora({
            actual: "0",
            total: "0",
            inicial: true,
            operator:""
        })
    }

    const handleDelete = () => {
        
        const eliminar = calculadora.actual.substring(0,calculadora.actual.length-1)
        setCalculadora({
            actual: eliminar,
            total: eliminar,
            inicial: false, 
            operator:""
        })
    }

    const doOperation = () => {
        let total = parseFloat(calculadora.total)

        switch (calculadora.operator) {
            case "+":
                total += parseFloat(calculadora.actual)
                break;
            case "-":
                total -= parseFloat(calculadora.actual)
                break;
            case "÷":
                total /= parseFloat(calculadora.actual)
                break;
            case "x":
                total *= parseFloat(calculadora.actual)
                break;        
            case "%":
                total = (total/100) * parseFloat(calculadora.actual)
                break;        
            case "^":
                total = Math.pow(total,parseFloat(calculadora.actual))
                break;        
            default:
                total = parseFloat(calculadora.actual)
                break;
        }
        return total
    }

    return(
        <CalculadoraContext.Provider
            value={{
                calculadora,
                setCalculadora,
                handleAC,
                doOperation, 
                handleDelete
            }}
        >
            {children}
        </CalculadoraContext.Provider>
    )
}

export {
    CalculadoraProvider
}

export default CalculadoraContext
