import { useState } from "react"
export default function Player({firstName, symbol}){
    const [name, setName]= useState(firstName)
    const [isEdit, setIsEdit] = useState(false)

    function handelEdit (){
        setIsEdit((editing)=> !editing)
    }

    function handelName(event){
        setName(event.target.value)
        console.log(event.target.value);
    }

    let playerName = <span className="player"> {name} </span>

    if(isEdit){
        playerName = <input type="text" required  value={name} onChange={handelName} />
    }

    return(
        <>
            <li>
                <span className="player">
                    {playerName}
                    <span className="player-symbol">{symbol}</span>
                    <button onClick={handelEdit}>{isEdit ? 'sava' : 'edit'}</button>
                </span>
            </li>
        </>
    )
}