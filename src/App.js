import './App.css';
import { Scanner } from '@yudiel/react-qr-scanner';
import { useState , useEffect} from 'react';

function App() {
  const [arr, setArr]=useState();
  const [str, setStr]=useState("");
  const [Text, setText]=useState("");

  const [value, setValue]=useState();
  useEffect(() => {
    setArr(str.split((" ")))
    
  }, [str])
  useEffect(() => {
    setText(arr.includes(value))
    
  }, [value])

  const match=(text,result)=>{
    console.log("called")
    setText(text)
    console.log(text, result)
   setValue(arr.includes(text))
   // return str.includes(value)
  }

  
  return (
    <div style={{display:"flex", justifyContent:"center" }}>
      <div style={{width:"400px"}}>          <Scanner
    onResult={(text, result) => setValue(text)}
    onError={(error) => console.log(error?.message)}
/>
<div style={{display:"flex", justifyContent:"center" }}>
<input onChange={(e)=>setStr(e.target.value)} ></input>
    {value} 
    {Text}
</div>
</div>

    </div>


  );
}

export default App;
