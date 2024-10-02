import Form from "react-bootstrap/Form";
import React, { useState } from "react";
// import showAlert 

function TextForm(props) {
  const [text, setText] = useState("");

  const handleUppClick = () => {
    // console.log("uppercase is clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "warning");
  };

  const handleLowClick = () => {
    // console.log("uppercase is clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "warning");
  };

  const handleCleClick = () => {
    // console.log("uppercase is clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Clear all", "danger");
  };

  const handleCopy = () => {
    // console.log("uppercase is clicked");
    // let texts = text.value
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied text", "info");
    // setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value)
  };

  return (
    <div>
      <Form 
            style={{color:props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <Form.Group className="mb-3" /*controlId="exampleForm.ControlTextarea1"*/>
          {/* <Form.Label>Example textarea</Form.Label> */}
          <Form.Control
            as="textarea"
            onChange={handleOnChange}
            value={text}
            rows={8}
            id="myBox"
            style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white' ,color:props.mode === 'dark' ? 'white' : 'black' }}
            
          />
        </Form.Group>
      </Form>
      <button className="btn btn-primary mx-2 my-1" onClick={handleUppClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleCleClick}>
        Clear
      </button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
        Copy Text
      </button>
      <div className="container my-3" style={{color:props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length * 60 }  taken for reading </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
      </div>
    </div>
  );
}

export default TextForm;
