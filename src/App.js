import './App.css';
import {useState} from "react"
import axios from "axios"; 
function App(){
  //chat
  const [prompt, setPrompt] = useState("");  
  const [response, setResponse] = useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
  axios.post("",{prompt})
  .then((res)=>{setResponse(res.data);})
  .catch((err)=>{
    console.error(err);
  });
};
  //grammer state
  const [inputText, setInputText] = useState("");  
  const [correctedText, setCorrectedText] = useState("");
const handleInputChange = (e) => {
  setInputText(e.target.value);
};
const handleGrammarCheck = async () => {
  try {
    const resp = await axios.post("http://localhost:8080/grammar-check", {
      textToCorrect: inputText,
    });

    setCorrectedText(resp.data.correctedText);
  } catch (error) {
    console.error('Error while checking grammar:', error);
  }
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
    <div>
      <textarea onChange={handleInputChange}></textarea>
      <button onClick={handleGrammarCheck}> check</button>
      <hr/>
      <div>
        <h3>Correct text</h3>
        <div>{correctedText}</div>
      </div>
    </div> 
    </>
  )
}
export default App;