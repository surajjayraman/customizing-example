import { useRef, useState } from 'react';
const Form = () => { 
    const inputRef = useRef(null);
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        const inputValue = inputRef.current.value;
        console.log(`Form Submitted! with value ${inputValue}`);
        e.preventDefault();
        setInput('');
    }

    const handleChange = (e) => {
        setInput(e.target.value);
        e.preventDefault();
    }


    return ( 
      <form onSubmit={handleSubmit}> 
        <input ref={inputRef} type="text" /> 
        <div>
            <h3>Controlled Element</h3>
            <label htmlFor='name'>Name:</label>
            <input id="name" value={input} onChange={handleChange} type='text' />
        </div>
        <button disabled={!input} type='submit'>Submit</button>        
      </form> 
    ); 
   }; 

export default Form;   