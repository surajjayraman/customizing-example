import { useRef, useState } from 'react';
const Form = () => { 
    const inputRef = useRef(null);
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        const inputValue = inputRef.current.value;
        console.log(inputValue);
        e.preventDefault();
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
            <input value={input} onChange={handleChange} type='text' />
        </div>
        
      </form> 
    ); 
   }; 

export default Form;   