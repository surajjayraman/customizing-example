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
import MyVideo from "./components/MyVideo";
import DessertsList from "./components/DessertsList";
import Form from "./components/Form";
import { useState } from 'react';

// Desserts Data
const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];
function App() {

  const [greeting, setGreeting] = useState({
    greet: "Hello, World"
  });

  const updateGreeting = () => {
    setGreeting(prevState => {
      return {...prevState, greet: "World-Wide Web"}     
    });
  }

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
    <div>
      <h2>React Media Demo</h2>
        <MyVideo />
    </div>
    <div className="App">
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
    </div>
    <div>
      <h3> Uncontrolled vs Controlled Form Demo</h3>
      <Form />
    </div>  
    <div>
      <h1>{greeting.greet}</h1>
      <button onClick={updateGreeting}>Update Greeting</button>
    </div>
   </div>
 );
}



export default App;
