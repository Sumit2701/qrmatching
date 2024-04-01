import './App.css';
import { Scanner } from '@yudiel/react-qr-scanner';
import { useState , useEffect} from 'react';

function App() {
  const [arr, setArr]=useState();
  const [str, setStr]=useState();
  const [Text, setText]=useState(null);
  const [scanned, setScanned]=useState(false);

  const [value, setValue]=useState();
  useEffect(() => {
    
    if(str)
    setArr(str.split((",")))
  }, [str, Text])

const match= async(text)=>
{
setScanned(false)
setValue(text)
if(text && arr){

  setText(arr.some(item => item.startsWith(text.slice(0, 20))));
  setScanned(true)
  console.log(arr.some(item => item.startsWith(text.slice(0, 20))));
}}
  return(
<div style={{backgroundColor: Text ? 'lightgreen' : 'lightred'}}>
    <div style={{display:"flex", justifyContent:"center"}}>
      <div style={{width:"400px"}}>
        <Scanner
          onResult={(text, result) => match(text)}
          onError={(error) => console.log(error?.message)}
        /><div >
                 {scanned&& <h1>{ Text ? <>Perfect Match</> : <>Fail</>}</h1>}
        <p>{value}</p>
        </div>

        <div style={{display:"", justifyContent:"center"}}>
        </div>
        <input style={{width:"100%", height:"30px"}} onChange={(e)=>setStr(e.target.value)} />
      </div>
    </div>
    <div style={{height:"200px"}}></div>
  </div>
);

}

export default App;
