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

    // let Capitalize = () =>{
    //     const words = text.split(" ");
    //     for(let i=0; i<words.length ; i++){
    //         words[i] = words[i][0].toUpperCase()+ words[i].substring(1)
    //         }
    //     const combineWords = words.join(" ")
    //     setUpdateText(combineWords)
    // }

    let Capitalize = () => {
        const textArray = text.split(" ");
        const stopWords = ["is", "are", "am", "my"]; // Define the words to keep in lowercase
    
        for (let i = 0; i < textArray.length; i++) {
            const word = textArray[i].toLowerCase(); // Convert word to lowercase
            if (i === 0 || !stopWords.includes(word)) {
                textArray[i] = word.charAt(0).toUpperCase() + word.slice(1);
            }
        }
    
        const capitalizedText = textArray.join(" ");
        setUpdateText(capitalizedText);
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
            <p onClick={Capitalize}>Capitalize</p>
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