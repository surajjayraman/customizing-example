import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
function App() {
  function handleClick() {
   let randomNum = Math.floor(Math.random() * 3) + 1;
   console.log(randomNum);
   let userInput = prompt('type a number');
   alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }
 
 return (
   <div>
     <h1>Task: Add a button and handle a click event</h1>
     <button onClick={handleClick}>Guess the number between 1 and 3.</button>
     <Intro1 />
     <Intro2 />
     <Intro3 />
   </div>
 );
}

export default App;
