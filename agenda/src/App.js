import React, {Component} from 'react';
import FormCadastroLista from './components/Form/CadastroLista';
import '../src/Pure/pure-min.css';
import'../src/Pure/style.css';



class App extends Component {
  render() {
    return(
      <div>
        <FormCadastroLista />
      </div>
    );
  }
}

export default App;
