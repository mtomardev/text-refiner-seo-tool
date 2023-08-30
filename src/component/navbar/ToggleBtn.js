import React, {useState, useEffect} from 'react';
import Switch from '@mui/material/Switch';


export default function ToggleBtn() {
 const [theme, setTheme] = useState("dark-theme")
 const [modeText, setModeText] = useState("Dark Mode")

 const themeFunction = ()=>{
  if(theme == "dark-theme"){
    setTheme("light-theme")
    setModeText("Light mode")
  }
  else{
    setTheme("dark-theme")
    setModeText("Dark mode")
  }
 }

 useEffect(()=>{
  document.body.className = theme
 },[theme])

 
  return (
    <div className='mode-flex'>
      <p className="dark-mode">{modeText}</p>
      <Switch defaultChecked onClick={themeFunction}/>
 
    </div>
  );
}