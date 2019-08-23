import React from 'react';

function LuzSemaforo(props){
   const estilo = {
       backgroundColor:props.cor,
       width:100,
       heigth:100
   }
    return(
        <div style={estilo}>
            Luz Semaforo
        </div>
    );
}
export default LuzSemaforo;