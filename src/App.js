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
      setText(arr.some(item => item.startsWith(value.slice(0, 20))));
     console.log(arr.some(item => item.startsWith(value.slice(0, 20))))
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
