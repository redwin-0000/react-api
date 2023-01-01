import './App.css';
import axios from 'axios';
import { useEffect, useState} from 'react';

function App() {

  const [details , setDetails] = useState({});


  // how do fetch function work
// fetch("https://randomuser.me/api/")
// .then((res)=>res.json())
// .then((data)=>{
//   console.log(data);
// })

const fetchDetails= async()=>{
const{data} = await axios.get("https://randomuser.me/api/")
 // console.log(data);
  const detail = data.results[0]
  setDetails(detail)  // this detail are useing for set the data which is fetching from API into the useState of details.
  console.log(detail);
}

useEffect(()=>{
  fetchDetails()
},[])
  return (
    <div className="App">
     <h1>Fetching Api data</h1>
     <div className='card'>
      <img src={details.picture?.large}/>
      <h2>Name- {details.name?.first +" "+ details.name?.last}</h2>  
     <h3>Phone Number- {details.phone}</h3>
     {/* <h5>Loaction-{details.location?.street}</h5> */}
     <h3>Email-Id= {details.email}</h3>
     </div>
    </div>
  );
}

export default App;
