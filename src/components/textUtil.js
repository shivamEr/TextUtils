import { useState } from "react";

const TextUtil = (props) => {
    const [text, setText] = useState("Enter Text here");

    const allowChange = (event) => {
        setText(event.target.value);
    }

    const toUpperCase = () => {
        const textUp = text.toUpperCase();
        setText(textUp);
        props.showAlert("Converted to Upper Case","success");
    }

    const toLowerCase = () => {
        const textUp = text.toLowerCase();
        setText(textUp);
        props.showAlert("Converted to Lower Case","success");
    }

    const toClear = () => {
        setText("");
        props.showAlert("Text has been Cleared","success");

    }
    const handleCopy = () => {
        // navigator.clipboard.writeText(text);
        const texts = document.getElementById('txt');
        texts.select();
        navigator.clipboard.writeText(texts.value);
        props.showAlert("Copy to Clipboard","success");
    }

    const handleExtraSpace = () => {
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed","success");
    }

    return (
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 style={{ textAlign: "center", marginTop: "5vh" }}>Manupulate Text</h1>
            <textarea name="txt" id="txt" rows={10} style={{ margin: "20px 10vw", width: "80%", background : props.mode==='dark'?'transparent':'white', color : props.mode==='dark'?'white':'black'}} value={text} onChange={allowChange}> </textarea>

            <div className="functionality" style={{ margin: "20px 10vw", width: "80%" }}>
                <button className="btn btn-primary mx-1" onClick={toUpperCase}>ToUpperCase</button>

                <button className="btn btn-primary mx-1 my-1" onClick={toLowerCase}>ToLowerCase</button>

                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>

                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>

                <button className="btn btn-primary mx-1 my-1" onClick={toClear}>Clear</button>
            </div>


            <div className="sumry" style={{ textAlign: "center", margin: "0% 20%", fontSize: "10px" }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter(word=> word!=="").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(/\s+/).filter(word=> word!=="").length} Minutes Read</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </div>
    );
}
export default TextUtil;