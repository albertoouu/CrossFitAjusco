import "./Post.css";
//import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import React, { useState } from "react";
import { useAuth } from "../Context/authContext";
import { PhotoLibrary } from "@mui/icons-material";

const Post = () => {
  const { user } = useAuth();

  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(user);
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
          <PhotoLibrary style={{ color: "black" }} />
        </div>
      </div>
    </div>
  );
};
export { Post };
