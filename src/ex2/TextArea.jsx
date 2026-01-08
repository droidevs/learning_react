// ways to put text area
//<TextArea cols={40} rows={10} value="Tapez votre texte ici" /> 
// Méthode 1 : Composant fonctionnel 
import { useState } from "react"; 
const FTextArea = (props) => { 
    const [message, setMessage] = useState(props.value); 
    const handlerChange=(event)=>{ 
        setMessage(event.target.value); 
    } 
    const handlerFocus=()=>{ 
        setMessage(""); 
    } 
    return ( 
        <textarea cols={props.cols} 
        rows={props.rows} 
        value={message} 
        onFocus={handlerFocus.bind(this)} 
        onChange={handlerChange.bind(this)} /> 
    ); 
   }; 
export default FTextArea; 