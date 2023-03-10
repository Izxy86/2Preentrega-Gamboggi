import { useState } from "react"

export const ItemCount = ({valInicial, stock}) => {
    
    const [contador, setContador] = useState(valInicial)
            //Var       //Modificar var     //Estado inicial

    const sumar = () =>  (contador < stock) && setContador(contador + 1) //contador = contador + 1
    const restar = () => (contador > valInicial)  && setContador(contador - 1)  //Operador ternario sin else


  return (
    <>
        <button className="btn btn-outline-warning" onClick={() => sumar()}>+</button>
            {contador}
        <button className="btn btn-outline-warning" onClick={() => restar()}>-</button>
    </>
  )
}