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
    if(value)
    setText(arr.includes(value))
    
  }, [value])


  
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
