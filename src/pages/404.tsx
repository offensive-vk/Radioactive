import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="404-wrapper w-full flex flex-col items-center justify-center">
      <h1 className="404-heading font-bold text-red-600 text-5xl">404</h1>
      <p>{"I'm sorry but is that URL right?"}</p>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="404-button">
        Go Home
      </button>
    </div>
  );
}

export default NotFound;