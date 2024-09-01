import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { toast } from "sonner";
import { TUser } from "../types/auth.type";
import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { ImSpinner8 } from 'react-icons/im';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('Logging in...');
    try {
      const userInfo = {
        email: data.email,
        password: data.password
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.token) as TUser;
      dispatch(setUser({ user: user, token: res.token }));
      toast.success('Login successful!', { id: toastId, duration: 2000 });
      navigate('/');
    } catch (error) {
      toast.error('Login failed. Please try again.', { id: toastId });
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg relative">
        <div className="absolute top-0 right-0 mt-4 mr-4">
        
          <AiOutlineUser className="text-4xl text-[#003580]" />
        </div>
        <h2 className="text-3xl font-bold text-[#003580] mb-6 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="relative">
            <AiOutlineMail className="absolute top-3 left-3 text-gray-500" />
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#003580] transition"
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message as string}</span>
            )}
          </div>
          <div className="relative">
            <AiOutlineLock className="absolute top-3 left-3 text-gray-500" />
            <input
              id="password"
              type="password"
              placeholder="Your Password"
              {...register("password", { required: "Password is required" })}
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#003580] transition"
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password.message as string}</span>
            )}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-[#003580] text-white font-semibold rounded-lg shadow-md hover:bg-[#00245d] transition-colors"
              disabled={isLoading}
            >
              {isLoading ? <ImSpinner8 className="animate-spin mx-auto" /> : "Login"}
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-[#003580] hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
