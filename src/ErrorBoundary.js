import React  from 'react';
import App from './App';

class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state = {stateError:false ,error : null ,errorInfo:null,state:0};
        this.toggleState= this.toggleState.bind(this)
    }
   //----------- Este metedo o funciona como lo esperaba por lo tanto, no utilizo sus proiedades
   //------------Al momento de renderizar pero lo dejo escrito para checarlo mas adelante
    componentDidCatch (error, errorInfo) {
        // También puedes registrar el error en un servicio de reporte de errores
        //--------Por alguna razon no comprendo porque al mostrar en el render los datos de estos estados, no renderiza nada
        //--------por ello en el render no retorno estos valoros para mostrar
        this.setState({
            error:error,
            errorInfo:errorInfo
        })
       
 }

    static getDerivedStateFromError(error) {
        // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
        return {stateError : true};
    }

     toggleState(){
        this.setState(prevState => ({
            stateError: false
        }));
    
     }

    render(){
        if (this.state.stateError) {
             // Puedes renderizar cualquier interfaz de repuesto
            return <div className='ErrorBoundary'>
                        <a className='ErrorBoundary-h1' href='#home' onClick={this.toggleState}>Something went Wrong with this component
                        </a>          
                    </div>
        }

        return this.props.children;

         
    }
}

export default ErrorBoundary;