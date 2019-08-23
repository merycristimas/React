import React from 'react';
import LuzSemaforo from './luzSemaforo';
import DisplaySegundos from'./displaySegundos';

class Semaforo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            segundos: this.props.segundosCorVermelha,
            cor: 1
        };
    }

    componentDidMount(){
        console.log("passei");
        setInterval(this.tick, 1000);
    }

    tick = () => {
        
        let segundos = this.state.segundos;
        segundos--;
        if(segundos === 0){
            if(cor === 1){
                cor =2;
                segundos = this.props.segundosCorVerde;
            }else if(cor === 2){
                cor =3;
                segundos = this.props.segundosCorAmarela;
        } else{
            cor = 1;
            segundos = this.props.segundosCorVermelha;
        }
    }
        this.setState({
            segundos:segundos,
            cor:cor
        });
    }

    render(){
        const cor = 
        return(
        <div>
            <LuzSemaforo cor="#F00"/>
            <LuzSemaforo cor="#FF0"/>
            <LuzSemaforo cor="#0F0"/>
            <DisplaySegundos segundos ={100}/> 
        </div>
        );
    }
}
export default Semaforo;