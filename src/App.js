import './App.css';
import { Scanner } from '@yudiel/react-qr-scanner';
import { useState , useEffect} from 'react';

function App() {
  const [arr, setArr]=useState();
  const [str, setStr]=useState();
  const [Text, setText]=useState("");

  const [value, setValue]=useState();
  useEffect(() => {
    if(str)
    setArr(str.split((",")))
  }, [str])

  useEffect(() => {
    console.log(arr)
    if(value && arr){
    setText(arr.includes(value))
  console.log(arr.includes(value))
    }
  }, [value])


  
  return (
    <div style={{display:"flex", justifyContent:"center" }}>
      <div style={{width:"400px"}}>          <Scanner
    onResult={(text, result) => setValue(text)}
    onError={(error) => console.log(error?.message)}
/>
<h1>{value}</h1> 
<div style={{display:"", justifyContent:"center" }}>
   <h1>{Text}</h1> 
</div>
<input onChange={(e)=>setStr(e.target.value)} ></input>

</div>

    </div>


  );
}

export default App;
