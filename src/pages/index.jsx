import { NavLink, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate('/about');
  }

  return (
    <>
      <h1>Home</h1>
      <p><button onClick={navigateHandler}>Navigate</button></p>
    </>
  );
}
