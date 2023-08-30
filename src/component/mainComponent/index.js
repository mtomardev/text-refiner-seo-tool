import React , {useState} from "react";
import './style.css'

const MainComponent = () => {
    const [text, setText] = useState("")
    const [updatetext, setUpdateText] = useState("")
    
    let UpperCase = () =>{
        let newtext = text.toUpperCase()
        setUpdateText(newtext)
    }

    let Lowercase = () =>{
        let newtext = text.toLowerCase()
        setUpdateText(newtext)
    }

    let Reset = () => {
        setText("")
        setUpdateText("")
    }

    return(
        <div className="MainComponent-flex">
           <h1>Enter Text to Analyze</h1>
           <div className="textContainer">
           <textarea placeholder="Enter your text here..." 
           value={text} onChange={(e)=>setText(e.target.value)} ></textarea>                  
           </div>

           <div className="btn-flex">
            <p onClick={UpperCase}>UpperCase</p>
            <p onClick={Lowercase}>LowerCase</p>
            <p onClick={Reset}>Reset</p>
           </div>


            <div className="info-flex">
            Total characters with space : {text.trim().length}</div>
           
           <div className="output-container">
            <textarea placeholder="Output will visible here" value={updatetext}></textarea>                  
           </div>
            

            
            
        </div>
    )
}

export default MainComponent