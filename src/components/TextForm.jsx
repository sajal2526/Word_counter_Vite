import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showalert("Converted to Uppercase","Success");
    }
    const handleLoClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showalert("Converted to Lowercase","Success");
    }
    const handleClearClick = ()=>{
        let newText='';
        setText(newText);
    }
    const handleRemoveSpace = ()=>{
        let newText=text.replace(/\s+/g," ");
        setText(newText);
    }
    
    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text);
        // props.showAlert("Copied to Clipboard!", "success");
    }
    

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
        <div className="container" style={{color: props.mode==="dark"?"white":"#042743"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="MyBox" rows="8" autoFocus></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpace}>Deleting Extra Spaces</button>

        </div>
        <div className="container my-3" style={{color: props.mode==="dark"?"white":"#042743"}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute require to read </p>
            <h3>Preview</h3>
            <p>{text.length===0?"Enter something in the textbox to preview here":text}</p>
        </div>
        </>
    )
}
