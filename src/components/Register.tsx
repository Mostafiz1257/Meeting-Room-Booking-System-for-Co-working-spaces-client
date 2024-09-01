import { useForm, FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { toast } from "sonner";
import { TUser } from "../types/auth.type";
import { useRegisterMutation } from "../redux/features/auth/authApi";
import { verifyToken } from "../utils/verifyToken";
import { AiOutlineUser } from 'react-icons/ai'; // React icon for logo

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      phone: '',
      address: '',
      role: 'user',
    }
  });

  const [registerUser] = useRegisterMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('Registering...');
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      address: data.address,
      role: data.role || 'user',
    };
    try {
      const res = await registerUser(userInfo).unwrap();
      const user = verifyToken(res.token) as TUser;
      dispatch(setUser({ user, token: res.token }));
      toast.success('Registration successful', { id: toastId, duration: 2000 });
      navigate('/');
    } catch (error) {
      toast.error('Registration failed', { id: toastId, duration: 2000 });
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg relative">
        <div className="absolute top-0 right-0 mt-4 mr-4">
          {/* React icon used as logo */}
          <AiOutlineUser className="text-5xl text-[#003580]" />
        </div>
        <h2 className="text-3xl font-bold text-[#003580] mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#003580] transition"
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                {...register("email", { required: "Email is required" })}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#003580] transition"
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Your Password"
                {...register("password", { required: "Password is required" })}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#003580] transition"
              />
              {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                placeholder="Your Phone Number"
                {...register("phone", { required: "Phone number is required" })}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#003580] transition"
              />
              {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label className="block text-gray-700 mb-2" htmlFor="address">Address</label>
              <input
                id="address"
                type="text"
                placeholder="Your Address"
                {...register("address", { required: "Address is required" })}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#003580] transition"
              />
              {errors.address && <span className="text-red-500 text-sm">{errors.address.message}</span>}
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="px-8 py-3 bg-[#003580] text-white font-semibold rounded-lg shadow-md hover:bg-[#00245d] transition-colors"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-700">Already have an account? <Link to="/login" className="text-[#003580] hover:underline">Login</Link></p>
        </div>
      </div>
    </section>
  );
};

export default Register;
