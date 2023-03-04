import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Upper case was clicked");
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to upper case","success")
    }
    const handleOnChange=(event)=>{
        // console.log("Upper case was clicked");
        setText(event.target.value);
    }//used in typing in text box
    const[text,setText]=useState('Enter text here');//Important
  return (
    <>
    <div className="container"style={{color:props.mode==='light'?'black':'grey'}} >
        <h1 >{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value ={text}onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary"onClick={handleUpClick}>Convert to Uppercase</button>
</div>
<div className="container my-3" style={{color:props.mode==='light'?'black':'grey'}}>
<h1>
    Your text summary
</h1>
<p>{text.trim().length } characters</p>
<p>{text.replace(/\n/g, " ").split(' ').filter(value => value != "").length} words</p>
</div>
</>
  )
}
// rfc