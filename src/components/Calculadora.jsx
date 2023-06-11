import { Button,Form,Row,Col,Container } from "react-bootstrap"
import useCalculadora from "../hooks/useCalculadora"

const Calculadora = () => {

    const {calculadora, setCalculadora, handleAC, doOperation, handleDelete} = useCalculadora()
   
    const handleNumber = e => {
        let valoractual = e.target.value
        if(!calculadora.inicial){
            valoractual= calculadora.actual + e.target.value
        }
        setCalculadora({
            actual: valoractual,
            total: calculadora.total,
            inicial: false,
            operator:calculadora.operator
        })
    }

    const handleOperation = e => {
        const total = doOperation()
        setCalculadora({
            actual: total.toString(),
            total: total.toString(),
            inicial: true,
            operator: e.target.value
        })
    }

  return (
    <Form>
        <Row className="justify-content-sm-center">
            <Col sm={8} lg={4}>
            {calculadora.actual.length < 31 ? (
                 <Container className="bg-dark bg-opacity-10 p-3 border border-info rounded d-flex justify-content-end">
                 {calculadora.actual}
             </Container>
            ):
            <Container className="bg-dark bg-opacity-10 p-3 border border-info rounded d-flex justify-content-end">
                 Límite Máximo
             </Container>
            }
               
            </Col>
        </Row>
        <Row className="justify-content-sm-center mt-2">
            <Col sm={8} lg={4}>
                <Button
                 onClick={handleAC} value="ac" variant="dark" className="w-25 border border-white" size="lg">AC</Button>
                <Button
                 onClick={handleOperation} value="%" variant="dark" className="w-25 border border-white" size="lg">%</Button>
                <Button 
                 onClick={handleOperation} value="^" variant="dark" className="w-25 border border-white" size="lg">∧</Button>
                <Button
                 onClick={handleDelete} value="delete" variant="dark" className="w-25 border border-white" size="lg">◁</Button>
            </Col>
        </Row>
        <Row className="justify-content-sm-center">
            <Col sm={8} lg={4}>
                <Button
                 onClick={handleNumber} value="7" variant="dark" className="w-25 border border-white" size="lg">7</Button>
                <Button
                 onClick={handleNumber} value="8" variant="dark" className="w-25 border border-white" size="lg">8</Button>
                <Button 
                 onClick={handleNumber} value="9" variant="dark" className="w-25 border border-white" size="lg">9</Button>
                <Button
                 onClick={handleOperation} value="x" variant="dark" className="w-25 border border-white" size="lg">✕</Button>
            </Col>
        </Row>
        <Row className="justify-content-sm-center">
            <Col sm={8} lg={4}>
                <Button
                 onClick={handleNumber} value="4" variant="dark" className="w-25 border border-white" size="lg">4</Button>
                <Button
                 onClick={handleNumber} value="5" variant="dark" className="w-25 border border-white" size="lg">5</Button>
                <Button 
                 onClick={handleNumber} value="6" variant="dark" className="w-25 border border-white" size="lg">6</Button>
                <Button
                 onClick={handleOperation} value="-" variant="dark" className="w-25 border border-white" size="lg">–</Button>
            </Col>
        </Row>
        <Row className="justify-content-sm-center">
            <Col sm={8} lg={4}>
                <Button
                 onClick={handleNumber} value="1" variant="dark" className="w-25 border border-white" size="lg">1</Button>
                <Button
                 onClick={handleNumber} value="2" variant="dark" className="w-25 border border-white" size="lg">2</Button>
                <Button 
                 onClick={handleNumber} value="3" variant="dark" className="w-25 border border-white" size="lg">3</Button>
                <Button
                 onClick={handleOperation} value="+" variant="dark" className="w-25 border border-white" size="lg">+</Button>
            </Col>
        </Row>
        <Row className="justify-content-sm-center">
            <Col sm={8} lg={4}>
                <Button
                 onClick={handleNumber} value="." variant="dark" className="w-25 border border-white" size="lg">.</Button>
                <Button
                 onClick={handleNumber} value="0" variant="dark" className="w-25 border border-white" size="lg">0</Button>
                <Button 
                 onClick={handleOperation} value="÷" variant="dark" className="w-25 border border-white" size="lg">÷</Button>
                <Button
                 onClick={handleOperation} value="=" variant="info" className="w-25 border border-white" size="lg">=</Button>
            </Col>
        </Row>
    </Form>
  )
}

export default Calculadora