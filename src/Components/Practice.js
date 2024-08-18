import React,{useState} from 'react'

export default function Practice(props) {
    const [text, setText] = useState("Enter the text here")
    const [speech, setSpeech] = useState("Speech Text")
    const [isSpeaking , setIsSpeaking] = useState(false)
    const [isFirst , setIsFirst] = useState(true)
    // const [myStyle, setMyStyle] = useState({
    //     color : 'black',
    //     backgroundColor : 'white'
    // })
    // const [myDark, setMyDark] = useState("Dark Mode")
    const [myCopy, setMyCopy] = useState("Copy Text")

    const OnChangehandler = (event) =>{
        setText(event.target.value)
    }

    const onUpClick = () =>{
        if (text.trim() === "") {
            props.showAlert("First You Have to Enter the text to Change it Uppercase", "danger")
        }else{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")
    }

    }

    const onLowClick = () =>{ 
        if (text.trim() === "") {
        props.showAlert("First You Have to Enter the text to Change it Lowercase", "danger")
        }else{
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success") 
        }
    }

    const onSpeech = () =>{
        if (!isSpeaking) {
            let speechText = new SpeechSynthesisUtterance(text)
            window.speechSynthesis.speak(speechText)
            setSpeech("Mute me")
            setIsSpeaking(true)

            speechText.onend = () =>{
                setSpeech("Speech Text")
                setIsSpeaking(false)
            }
        }
        else{
            window.speechSynthesis.cancel()
            setSpeech("Speech Text")
            setIsSpeaking(false)
        }
        
    }

    const clearText = () =>{
        if (isFirst) {
            setText("")
            setIsFirst(false)   
        }
        }
  
        const onClearText = () => {
            if (text.trim() === "") {
                props.showAlert("You don't have any text to clear", "danger");
            } else {
                setText("");
                props.showAlert("Text Cleared", "success");
            }
        }
    

    const onTrim = () => {
        if (text.trim()==="") {
            props.showAlert("You don't have any text to trimed", "danger");
        }else{
        let newText = text.replace(/\s+/g, ' ').trim()
        setText(newText)
        props.showAlert("Text Trimed", "success")
    }
    }
    // const onDark = () => {
    //    if (myStyle.color === 'black') {
    //         setMyStyle({
    //             color : 'white',
    //             backgroundColor : 'black'
    //         })
    //         setMyDark("Light Mode")        
    //    }
    //    else{
    //     setMyStyle({
    //         color : 'black',
    //         backgroundColor : 'white'
    //     })
    //     setMyDark("Dark Mode")  
    //    }
    // }

    const onCopy = () => {
        if (text.trim()==="") {
            props.showAlert("You don't have any text to Copied", "danger");
        }else{
        navigator.clipboard.writeText(text).then(() => {
            setMyCopy("Copied..");
            setTimeout(() => setMyCopy("Copy Text"), 10000); 
            props.showAlert("Text copied to clipboard", "success")
        }).catch(() => {
            setMyCopy("Failed to Copy");
        });
    }
    }

    return(
    <div style={{backgroundColor: props.myMode==='light'?'white' : '#041f3a',color : props.myMode==='light'?'black' : 'white' }}className='container myDiv p-3 rounded-4' >
        <h1>{props.Heading}</h1>
        <div className="mb-3"  >
        <textarea className="form-control myDiv" style={{backgroundColor: props.myMode==='light'?'white' : 'gray',color : props.myMode==='light'?'black' : 'white' }} onClick={props.colorChange} value={text} onChange={OnChangehandler} onFocus={clearText} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-danger m-1 myDiv" onClick={onUpClick}  style={{backgroundColor: props.myMode==='light'?'white' : '#041f3a',color : props.myMode==='light'?'black' : 'white' }} >Upper Case</button>
        <button className="btn btn-danger m-1 myDiv" onClick={onLowClick} style={{backgroundColor: props.myMode==='light'?'white' : '#041f3a',color : props.myMode==='light'?'black' : 'white' }}>Lower Case</button>
        <button className="btn btn-danger m-1 myDiv" onClick={onSpeech} style={{backgroundColor: props.myMode==='light'?'white' : '#041f3a',color : props.myMode==='light'?'black' : 'white' }}>{speech}</button>
        <button className="btn btn-danger m-1 myDiv" onClick={onClearText} style={{backgroundColor: props.myMode==='light'?'white' : '#041f3a',color : props.myMode==='light'?'black' : 'white' }}>Clear Text</button>
        <button className="btn btn-danger m-1 myDiv" onClick={onTrim} style={{backgroundColor: props.myMode==='light'?'white' : '#041f3a',color : props.myMode==='light'?'black' : 'white' }}>Trim Text</button>
        <button className="btn btn-danger m-1 myDiv" onClick={onCopy} style={{backgroundColor: props.myMode==='light'?'white' : '#041f3a',color : props.myMode==='light'?'black' : 'white' }}>{myCopy}</button>


        <div>
        <p>
        {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.length} Characters
        </p>
        <p>{0.007 * text.split(" ").length} mintues read</p>
            <h2>Preview</h2>
                <p>{text.length>0?text:"Enter the text to preview"}</p>
        </div>
    </div>
    )
}