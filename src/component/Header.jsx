import React from "react";

function Header() {
  function handleFetch() {
    fetch('/api/name',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    }).then(respnse=>respnse.json()).then(data=>console.log(data));


  }
  return (
    <header>
      <h1>Keeper </h1>
      <button onClick={handleFetch}>submit</button>
    </header>
  );
}

export default Header;
