import React, { useState } from 'react'
export default function
    (props) {
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleUpClick = () => {
        // Why react state is needed
        // Text="hello";
        // console.log(Text);
        setText(text.toUpperCase());
        props.showAlert("Converted to Upper Case", "success");

    }
    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleClClick = () => {
        setText("");
        props.showAlert("Text is cleared", "success");

    }

    const [text, setText] = useState("");
    // let Text="hi";
    const wordLength = (text) => {
        if (text.length == 0) {
            return 0;
        }
        if (text.slice(-1) == " ") {
            return text.split(" ").length - 1
        }
        return text.split(" ").length
    }
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
                <p>{wordLength(text)} words and {text.length} characters</p>
                <p>{0.008 * text.split("").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to preview text"}</p>
            </div>
        </>
    )

}