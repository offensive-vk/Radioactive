import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-red-600 text-5xl">404</h1>
      <p>{"I'm sorry but is that URL right?"}</p>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="">
        Go Home
      </button>
    </div>
  );
}

export default NotFound;