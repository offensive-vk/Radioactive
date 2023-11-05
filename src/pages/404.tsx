import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col items-center justify-center my-[25vh]">
      <h1 className="font-bold text-red-600 text-5xl">404</h1>
      <p>{"I'm sorry but is that URL right?"}</p>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-black my-2 px-5 rounded-md hover:bg-gray-800 transition-colors text-white"
      >
        Go Home
      </button>
    </div>
  );
}

export default NotFound;