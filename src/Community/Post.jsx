import "./Post.css";
//import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import React, { useState } from "react";
import { PhotoLibrary } from "@mui/icons-material";

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
            Enviar
          </button>
        </form>
      </div>
      <div className="messageSender_bottom">
              <div className="messageSender_option">
                  <PhotoLibrary style={{color:"blue"}}/>
              
      </div>
    </div>
  );
};
export { Post };
