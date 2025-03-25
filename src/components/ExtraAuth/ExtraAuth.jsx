import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ExtraAuth = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
        photoURL: result.user?.photoURL,
      };

      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <>
      <div className="divider">OR</div>
      <div className="grid gap-2 grid-cols-3 w-11/12 mx-auto">
        {/* Google */}
        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white text-black border-[#e5e5e5] "
        >
          <FcGoogle />
        </button>

        {/* Facebook */}
        <button className="btn bg-[#1A77F2] text-white border-[#005fd8]">
          <FaFacebookF />
        </button>

        {/* GitHub */}
        <button className="btn bg-black text-white border-black">
          <FaGithub />
        </button>
      </div>
    </>
  );
};

export default ExtraAuth;
