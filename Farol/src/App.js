import React, { Component } from 'react';
import Semaforo from'../src/components/semaforo'

class App extends Component {
  render() {
    return (
      <div>
        <Semaforo 
          segundosCorVermelho={9}
          segundosCorAmarelo={2}030900
          segundosCorVerde={2}
          />
      </div>
    );
  }
}
//mostra para outras classes quem é, ele exporta ela como App
export default App;
