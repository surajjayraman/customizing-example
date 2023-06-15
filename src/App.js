import InputComponent from "./components/InputComponent";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import RegisterForm from "./components/RegisterForm";
import TextInputWithFocusButton from "./components/TextInputWithFocusButton";
import MealsProvider from "./providers/MealsProvider";
import MealsList from "./components/MealsList";
import Counter from "./components/Counter";
import { Routes, Route, Link } from 'react-router-dom';
import LogicalAnd from "./components/LogicalAnd";

function App() {
  function handleClick() {
   let randomNum = Math.floor(Math.random() * 3) + 1;
   console.log(randomNum);
   let userInput = prompt('type a number');
   alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }
 
 return (
   <div>
    <nav className="nav">
      <Link to="/" className="nav-item">Homepage </Link>      
      <Link to='/about-me' className="nav-item">About Me </Link>
      <Link to='/blog' className="nav-item">Blog</Link>
    </nav>
     <h1>Task: Add a button and handle a click event</h1>
     <button onClick={handleClick}>Guess the number between 1 and 3.</button>
     <Routes>
      <Route path="/" element={<Intro1 />} />
      <Route path="/about-me" element={<Intro2 />} />
      <Route path="/blog" element={<Intro3 />} />
     </Routes>    
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
      <h2>Meals list demo</h2>
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>
    </div> 
    <div>
      <h2>Logical And Demo</h2>
      <LogicalAnd />
    </div>   
   </div>
 );
}

export default App;
