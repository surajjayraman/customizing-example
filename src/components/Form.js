import { useRef } from 'react';
const Form = () => { 
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        const inputValue = inputRef.current.value;
        console.log(inputValue);
        e.preventDefault();
    }


    return ( 
      <form onSubmit={handleSubmit}> 
        <input ref={inputRef} type="text" /> 
      </form> 
    ); 
   }; 

export default Form;   