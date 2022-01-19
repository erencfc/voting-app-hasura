import { useState } from "react";

const initalOptions = [{ title: "" }, { title: "" }];

function New() {
  const [title, setTitle] = useState("");
  const [options, setOptions] = useState(initalOptions);

  const handleChangeOption = ({ target }) => {
    const newArray = options;
    newArray[target.id].title = target.value;
    setOptions([...newArray]);
  };

  return (
    <div>
      <h2>Question</h2>

      <input
        placeholder="Type your question..."
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />

      <h2>Options</h2>

      {options.map((option, index) => (
        <div key={index}>
          <input
            placeholder={`Type your ${index + 1}. option...`}
            value={option.title}
            id={index}
            onChange={handleChangeOption}
          />
        </div>
      ))}

      <button onClick={() => setOptions([...options, { title: "" }])}>
        New Option
      </button>

      <button>Save</button>
    </div>
  );
}

export default New;
