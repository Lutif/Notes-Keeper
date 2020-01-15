import React from "react";
import Timer from './Timer';
function Note() {


  return (
    
    <div className="note">
      <div>

        <h1 contentEditable='true'>Call Sam</h1>
      <Timer/>  
      </div>
      <p contentEditable = 'true' >Call same for inovice</p>
    </div>
  );
}

export default Note;
