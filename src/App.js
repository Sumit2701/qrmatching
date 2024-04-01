import './App.css';
import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';

function App() {
  const [value, setValue]=useState();
  return (
    <div style={{display:"flex", justifyContent:"center" }}>
      <div style={{width:"400px"}}>          <Scanner
    onResult={(text, result) => setValue(text, result)}
    onError={(error) => console.log(error?.message)}
/>
<div style={{display:"flex", justifyContent:"center" }}>

    {value && <>{value} hii</>}
</div>
</div>

    </div>


  );
}

export default App;
