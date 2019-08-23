import React from 'react';
import Header from '../../Header';
import Dia from '../../Dia';
import Mes from '../../Mes';
import Ano from '../../Ano';
import Button from '../../Button';
import Textarea from '../../Textarea';
import Lista from '../../Lista'

class FormCadastroLista extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dia: '',
            mes: '',
            ano: '',
            texto: ''
        }
    }

    handlerInputChangeDia = (e) => {
        // console.log('DIA ATUALIZADO');
        this.setState({
            dia: e.target.value
        });
    }

    handlerInputChangeMes = (e) => {
        // console.log('MES ATUALIZADO');
        this.setState({
            mes: e.target.value
        });
    }

    handlerInputChangeAno = (e) => {
        // console.log('ANO ATUALIZADO');
        this.setState({
            ano: e.target.value
        });
    }

    handlerInputChangeTexto = (e) => {
        // console.log('TEXTO ATUALIZADO');
        this.setState({
            texto: e.target.value
        });
    }

    resetState() {
        let dia ="";
        let mes="";
        let ano="";
        let texto="";

       this.setState({
           dia:dia,
           mes:mes,
           ano:ano,
           texto:texto
       });
       
    }
    

    handleSubmit = (e) => {
        console.log('FORM SUBMETIDO');

        e.preventDefault();

        let data = {
            dia: this.state.dia,
            mes: this.state.mes,
            ano: this.state.ano,
            texto: this.state.texto,
            formatado: this.state.dia + '/' + this.state.mes + '/' + this.state.ano + ': ' + this.state.texto
        }

        let storage = window.localStorage;

        let listaDatas = JSON.parse(localStorage.getItem('data')) || [];

        listaDatas.push(data);

        storage.setItem('data', JSON.stringify(listaDatas));

        let lista = document.getElementsByTagName('ul')[0];
        let elemento = document.createElement('li');
        lista.appendChild(elemento).innerText = data.formatado;

        this.resetState();
    }

    render(){
        return(
            <div>
                <form class="pure-form pure-form-aligned" onSubmit={this.handleSubmit}>
                
                <div id="principal" class="pure-control-group">
                    <Header title="Cadastro Lista" />
                    </div>
                    <div id="principal" class="pure-control-group">   
                    <Dia onChange={this.handlerInputChangeDia}/>
                    
                    <Mes onChange={this.handlerInputChangeMes}/>
                    
                    <Ano onChange={this.handlerInputChangeAno}/>
                    </div>
                 
                    <div id="principal" class="pure-control-group">
                    <Textarea placeholder={'Digite algo a fazer'} onChange={this.handlerInputChangeTexto}/>
                    </div>
                    <div id="principal" class="pure-control-group">
                    <Button text="Gravar"/>
                    </div>
                    <div id="principal" class="pure-control-group">
                    <Lista />
                    </div>
                   
                   
                </form>
            </div>
        );
    }

}

export default FormCadastroLista;