import React,{useState} from 'react';

import 'leaflet/dist/leaflet.css';
import  Map from './Map.js';




function App() {
const [count, setCount] =useState(1);
  return (
    <>
 <div>
    <h1>Weather Map</h1>
   <Map pageNum={count} ></Map>
        
    </div>
    <div className='butt'>
    {count > 1 && <button type="button" onClick={()=> setCount(count - 1)}>Previous</button>}
    <br/>
    {count < 3 && <button type="button" onClick={()=> setCount(count + 1)}>Next</button>}
    </div>
    </>
   
  )
}

export default App
