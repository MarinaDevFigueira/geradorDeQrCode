
import React, { useState } from 'react';

import QRcodeCanvas from './QRcodeCanvas';

function App() {

  const [text,setText]= useState("")
  return (
    <div className="App">
      <h1>Gerador de QR Code</h1>
      <input type="text" onChange={(element)=>setText(element.target.value)}  value={text} placeholder='www.google.com'/>
      <QRcodeCanvas text={text}/>
    </div>
  );
}

export default App;
