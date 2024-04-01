import './App.css';
import { Scanner } from '@yudiel/react-qr-scanner';
import { useState , useEffect} from 'react';

function App() {
  const [arr, setArr]=useState();
  const [str, setStr]=useState();
  const [Text, setText]=useState();

  const [value, setValue]=useState();
  useEffect(() => {
    console.log(Text)
    if(str)
    setArr(str.split((",")))
  }, [str, Text])

  

const match=(text)=>
{console.log(arr)
  setValue(text)
if(text && arr){
  setText(arr.some(item => item.startsWith(text.slice(0, 20))));
 
}

}
  
  return (
    <div style={{display:"flex", justifyContent:"center" }}>
      <div style={{width:"400px"}}>          <Scanner
    onResult={(text, result) => match(text)}
    onError={(error) => console.log(error?.message)}
/>
<h1>{Text}</h1> 
<h1>{value}</h1> 
<div style={{display:"", justifyContent:"center" }}>
  
</div>
<input style={{width:"100%", height:"30px"}} onChange={(e)=>setStr(e.target.value)} ></input>

</div>

    </div>


  );
}

export default App;
