import InputComponent from "./components/InputComponent";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import RegisterForm from "./components/RegisterForm";
import TextInputWithFocusButton from "./components/TextInputWithFocusButton";
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
     <div>
      <h2>Set up other examples</h2>
      <h3>Input Component</h3>
      <tr>
        <InputComponent />
      </tr>
      <h3>Registration Form</h3>
      <tr>
        <RegisterForm />
      </tr>
      <h3>Text input with focus</h3>
      <tr>
        <TextInputWithFocusButton />
      </tr>                
     </div> 
     <div>
      <h2>Meals list using Context API</h2>
    </div>    
   </div>
 );
}

export default App;
