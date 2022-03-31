import Carrousel from "../Carrousel/Carrousel";
import { ReadPost } from "../../Community/ReadPost"

export const Home = () => {
  return (
    <>
      <h2>Soy la página de inicio</h2>
      <Carrousel />
      <ReadPost/>
    </>
  );
};
