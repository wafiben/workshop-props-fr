import React from "react";
import CardUser from "./Card";

function ListOfUsers({users,showScore}) {
  return (
    <div className="d-flex justify-content-around m-1">
        {users.map((elt,index)=><CardUser  key={index} email={elt.email} name={elt.name} score={elt.score} showScore={showScore}/>)}
      
    </div>
  );
}

export default ListOfUsers;


