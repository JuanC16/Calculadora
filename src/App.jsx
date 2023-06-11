import { Container } from "react-bootstrap"
import Calculadora from "./components/Calculadora"
import { CalculadoraProvider } from "./context/CalculadoraProvider"

function App() {
   return (
    <CalculadoraProvider>
      <header className="py-3">
        <h1>Calculadora</h1>
      </header>
      <Container className="p-5">
          <Calculadora/>
      </Container>
    </CalculadoraProvider>
  )
}

export default App
