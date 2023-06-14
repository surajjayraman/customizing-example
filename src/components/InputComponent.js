import { useState } from 'react';

function InputComponent() {
    const [inputText, setText] = useState('hello');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const reset = () => {
        setText('hello');
    }

    return (
        <div>
            <input value={inputText} onChange={handleChange} />
            <p>You typed: {inputText}</p> 
            <button onClick={reset}>
                Reset
            </button>
        </div>
    );

}

export default InputComponent;