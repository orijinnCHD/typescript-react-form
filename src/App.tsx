import React, { useRef, useState } from 'react';
import Message from './components/Message';
import { MessagesInt } from './model';
// import './App.css';

function App() {

  // declaraiton de type input
  const inputMessage = useRef<HTMLInputElement>(null);
  // messageInt est dans le fichier model.ts
  // on a declaré un tableau d'objet de messageInt
  const [messData,setMessData] = useState<MessagesInt[]>([]);


  // type any: c'est tout et n'importe quoi
  const handleSubmit =(e:any)=>{
    e.preventDefault();
    
    // set une valeur de tableau d'object de type MessagesInt

    if(inputMessage){
      const mess:MessagesInt = {
        id:Math.round(Math.random()*Date.now()),
        // typescript n'est pas permissif ainsi
        // on doit verifier qu'il y a un input message et que sont parametre "current" existe
        message:inputMessage?.current?.value,
        date:Date.now(),
      }

      setMessData((prevData)=>[...prevData,mess]);

    }

    // logique d'envoie de données
    
    // façon tricky init la variable
    (document.getElementById("inputMessage") as HTMLInputElement).value =""
  }

  return (
    <div>
      <h2>Poster un message</h2>
      <form  onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" 
          name="" 
          id="inputMessage" 
          placeholder='Entrez un message' 
          ref={inputMessage}
        />
        <input type="submit" value="envoyer" />
      </form>
      <h2>Liste des messages</h2>
      <div>
        {
          // ? si il y a quelquechose dans l'object
          messData?.map((mess)=>(
            // si il y aune erreur avec mess
            // c'est qu'il n'est pas utilisé dans le component
            //"Message"
            <Message 
                    key={mess.id}
                    mess={mess} 
                    messData={messData} 
                    setMessData={setMessData}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
