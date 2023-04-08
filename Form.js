import { useState } from "react";

const Form = (props) => {
  const [link, setLink] = useState({ name: "", URL: "" });

  const handleChange = (event) => {
    setLink({ ...link, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    props.handleSubmit(link);
    setLink({ name: "", URL: "" });
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={link.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="URL">URL:</label>
        <br />
        <input
          type="text"
          id="URL"
          name="URL"
          value={link.URL}
          onChange={handleChange}
        />
      </div>
      <button onClick={submitForm}>Submit</button>
    </form>
  );
};

export default Form;
