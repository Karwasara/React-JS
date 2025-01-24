import React, {useState} from 'react'

export default function TextForm(props) {
    const [text ,setText] =useState("");
    const handleUpclick =()=>{
   //console.log("clicked on" + text);
   let newtext=text.toUpperCase();
   setText(newtext)
    props.showAlert('converted to upper case','success')
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
        document.getSelection().removeAllRanges();
    }
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{background: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-4" onClick={handleUpclick}>Convert to Uppercase</button>
        <button disabled={text.length === 0}  className="btn btn-primary mx-4" onClick={handlelocclick}>Convert to lowercase</button>
        <button disabled={text.length === 0}  className="btn btn-primary mx-4" onClick={handleclearclick}>clear text</button>
        <button disabled={text.length === 0}  className="btn btn-primary mx-4" onClick={handlecopyclick}>copy text</button>
    </div>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>summary of word and character</h1>
    <p>{String(text).split(' ').filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
    <h3>Preview</h3>
    <p>{String(text).length>0?text:"enter here to previo"}</p>
    </div>
    </>
  )
}
