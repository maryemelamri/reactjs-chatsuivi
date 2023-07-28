import './App.css';
import {useState} from "react"
import axios from "axios"; 
function App(){
  const [prompt, setPrompt] = useState("");  
  const [response, setResponse] = useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
  axios.post("/chat",{prompt})
  .then((res)=>{setResponse(res.data);})
  .catch((err)=>{
    console.error(err);
  });
};
  return(
    <>
    <div >
      <form onSubmit={handleSubmit}>
        <div>
          <label>
          ask something
          </label>
        </div>
        <div>
          <input value={prompt} onChange={(e) =>setPrompt(e.target.value)}>
          </input>
        </div>
        <div>
          <button type="submit">
          submit
          </button>
        </div>
      </form>
      <div>
        <p>{response}</p>
      </div>
    </div>
    </>
  )
}
export default App;