import "./Post.css";
//import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import React, { useState } from "react";
import { db } from "../firebase"

const Post = () => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="message">
      <div>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.ariaValueMin)}
            className="messageSender_input"
            placeholder={"Escribe tu mensaje"}
            type="text"
          />
          <input />
          <button onClick={handleSubmit} type="submit">
            enviar
          </button>
        </form>
      </div>
      <div className="messageSender">
        <div className="messageSender1"></div>
      </div>
    </div>
  );
};
export { Post };
