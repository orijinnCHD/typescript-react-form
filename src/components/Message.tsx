import React from 'react';
import { MessagesInt } from '../model';


// créer des type pour les props
// c'est au choix de le faire
type Props={
    mess:MessagesInt,
    messData:MessagesInt[],
    // c'est le type d'une fonction 
    // pour le trouver : souris en hover sur la fonction setMessData 
    setMessData:React.Dispatch<React.SetStateAction<MessagesInt[]>>
}


const Message = ({mess,messData,setMessData}:Props) => {

    const dateFormater = (date:number)=>{
        return new Date(date).toLocaleDateString("fr-FR",
        {
            day:"numeric",
            month:"long"
        })
    }

    const handleDelete = ()=>{
        setMessData(messData.filter((el)=>el.id !== mess.id))
    }

    return (
        <div className="message-container">
            <p>{mess.message}</p>
            <h5>{dateFormater(mess.date)}</h5>
            <span id="delete" onClick={(e)=>handleDelete()}>&#10008;</span>
        </div>
    );
};

export default Message;