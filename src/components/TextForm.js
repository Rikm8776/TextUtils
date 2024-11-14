import React, { useState } from 'react'
export default function
    (props) {
    const handleUpClick = () => {
        // Why react state is needed
        // Text="hello";
        // console.log(Text);
        setText(text.toUpperCase());
    }
    const handleLoClick = () => {
        setText(text.toLowerCase());
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleClClick = () => {
        setText("");
    }

    const [text, setText] = useState("");
    // let Text="hi";
    return (
        <>
            <div className='container' style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} value={text} placeholder='Enter the text here' id="myBox" rows="8" style={{
                        color: props.mode === "light" ? "black" : "white",
                        backgroundColor: props.mode === "dark" ? "grey" : "white"
                    }}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClClick}>Clear Text</button>
            </div>
            <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split("").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview text"}</p>
            </div>
        </>
    )

}