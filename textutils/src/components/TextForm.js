import React, {useState} from 'react'

export default function TextForm(props) {
    const [text ,setText] =useState(0);
    const handleUpclick =()=>{
   //console.log("clicked on" + text);
   let newtext=text.toUpperCase();
   setText(newtext)
    }
    const handlelocclick=()=>{
        let newtext=text.toLowerCase();
   setText(newtext)
    }
    const handleclearclick=()=>{
        let newtext="";
        setText(newtext);
    }
    const handleOnChange=(event)=>{
    //console.log("changed");
    setText(event.target.value);
    }
    const handlecopyclick=()=>{
        
        let txt=document.getElementById('exampleFormControlTextarea1')
        txt.select();
        navigator.clipboard.writeText(txt.value);
    }
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <div className="btn btn-primary mx-4" onClick={handleUpclick}>Convert to Uppercase</div>
        <div className="btn btn-primary mx-4" onClick={handlelocclick}>Convert to lowercase</div>
        <div className="btn btn-primary mx-4" onClick={handleclearclick}>clear text</div>
        <div className="btn btn-primary mx-4" onClick={handlecopyclick}>copy text</div>
    </div>
    <div className='container'>
    <h1>summary of word and character</h1>
    <p>{String(text).split(' ').length} words and {text.length} characters</p>
    <h3>Preview</h3>
    <p>{text}</p>
    </div>
    </>
  )
}
