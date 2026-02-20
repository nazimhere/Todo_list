import { useState } from "react";
import "./lottery.css";
import { genTicket,sum } from "./helpticket";
export default  function Lottery(){
    let [ticket,setTicket]=useState(genTicket(3));
    let iswinning=sum(ticket) ===15;
    return(
        <div>
            <h2>Lottery game</h2>
            <div className="tickets">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
           <h2> {iswinning &&"congratulations ### won the draw"}</h2>
        </div>
    );
}