
  import React, { useEffect, useRef } from 'react'
  import Qrcode from "qrcode"
  
  function QRcodeCanvas({text}) {
    const canvasRef = useRef()
    
    useEffect(()=>{
    Qrcode.toCanvas(canvasRef.current,text,{width:175},(error)=>{
      console.log(error)
    })
    },[text])
    return (
      <div>
        <canvas ref={canvasRef} id="canvas"></canvas>
      </div>
    )
  }
  
  export default QRcodeCanvas
  