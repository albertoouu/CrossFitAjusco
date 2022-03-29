import "./Post.css";
//import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"

const Post = () => {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //traer objeto para mandarlo a firestore
    const input = e.target.input.value;
    console.log(input)
    //mandar objeto a firestore
    try {
          const docRef = await addDoc(collection(db, "Posts"), {
          input: input
    });
    console.log("Document written with ID: ", docRef.id);
    } catch (e) {
    console.error("Error adding document: ", e);
    }
    e.target.input.value = ""
}




  return (
    <div className="message">
      <div>

        <form onSubmit={handleSubmit}>
          
          <input name="input"/>
          
          <button>
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
