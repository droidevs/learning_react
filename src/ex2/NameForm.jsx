import { useState } from "react"; 
 
const NameForm = () => { 
    const [nom, setNom] = useState(''); 
    const handleChange =(event)=>{ 
        setNom(event.target.value); 
    } 
   
    const handleSubmit =(event)=>{ 
        alert('Le nom a été soumis : ' + nom); 
        event.preventDefault(); 
    }
        
    return ( 
    <form onSubmit={handleSubmit}> 
        <label> 
        Nom : 
        <input type="text" name="nom" value={nom} 
onChange={handleChange} /> 
        </label> 
        <input type="submit" value="Envoyer" /> 
    </form> 
    ); 
   };
export default NameForm; 