import "./Post.css";
//import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import React, { useState } from "react";
import { useAuth } from "../Context/authContext";
import { PhotoLibrary } from "@mui/icons-material";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const Post = () => {
  const { user } = useAuth();

  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //traer objeto para mandarlo a firestore
    const input = e.target.input.value;
    console.log(input, user.email);
    //mandar objeto a firestore
    try {
      const docRef = await addDoc(collection(db, "Posts"), {
        input: input,
        email: user.email,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    e.target.input.value = "";
  };

  // Agregamos un input desde donde el usuario puede escribir sus mensajes
  return (
    <div className="message">
      <div>
        <form onSubmit={handleSubmit}>
          <input name="input" />

          <button>enviar</button>
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
