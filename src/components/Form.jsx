import { useState } from "react";

function Form (props) {
    const {handleAdd} = props;

    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAdd(text)
        setText('')
      };

    return (
        <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="text"
            placeholder="enter a task"
            aria-label="Text"
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <button className="outline">+</button>
      </form>
    )
}

export default Form;