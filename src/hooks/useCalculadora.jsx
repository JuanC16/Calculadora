import { useContext } from "react";
import CalculadoraContext from "../context/CalculadoraProvider";

const useCalculadora = () => {
  return useContext(CalculadoraContext)
}

export default useCalculadora