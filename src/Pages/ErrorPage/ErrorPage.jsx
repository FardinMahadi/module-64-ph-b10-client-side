import { Link, useNavigate } from "react-router-dom";
import errorImg from "../../assets/404.gif";
import { FaHome, FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      {/* Error Image */}
      <img src={errorImg} alt="404 Error" className="max-w-md w-full mb-8" />

      {/* Error Message */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Oops!</h1>
        <p className="text-gray-600">
          The page you're looking for doesn't exist.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4">
        <button onClick={() => navigate(-1)} className="btn btn-primary gap-2">
          <FaArrowLeft /> Go Back
        </button>

        <Link to="/" className="btn btn-secondary gap-2">
          <FaHome /> Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
