import { useState } from "react";
import PropTypes from "prop-types";
import TextInput from ".././TextInput/";

NewGameForm.propTypes = {
  addGame: PropTypes.func,
};

export default function NewGameForm({ addGame }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        id="title"
        label="Title"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <TextInput
        id="cover"
        label="Cover"
        value={cover}
        onChange={(ev) => setCover(ev.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
