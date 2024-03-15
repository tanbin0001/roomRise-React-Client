import   { useState } from 'react';
import { useLoginMutation } from '../redux/api/authApi/authApi';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';
import { TUser, setUser } from '../redux/features/authSlice';
import { useAppDispatch } from '../redux/hooks';
import { verifyToken } from '../utils/verifyToken';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [login]= useLoginMutation()
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const userInfo = {
      username,
      password
    }
   const res = await login(userInfo).unwrap();
   console.log(res);
   const user = verifyToken(res.data.token) as TUser;
   dispatch(setUser({ user: user, token: res.data.token }));
   if(res.success) {
    toast.success('Login successful!')
    navigate('/')
   }
 
  };

  return (
    <div>
      <div className="max-w-[800px] mx-auto my-12 p-6 bg-white shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16">
        <div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-12">
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-4 mb-4">
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                  placeholder="Username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-red-600 text-white">
                LOG IN
              </button>
            </form>
            <p className="text-sm mt-6 flex gap-2">
              Did you{' '}
              <a className="text-blue-600" href="#">
                forget your password?
              </a>
            </p>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-sm mb-6">
              If you don't already have an account click the button below to create your account.
            </p>
         <Link to='/register'>
         <button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full mb-2 bg-black text-white">
              CREATE ACCOUNT
            </button>
         </Link>
            <p className="text-center my-4">OR</p>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full mb-2 bg-blue-600 text-white">
              SIGN IN WITH FACEBOOK
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-blue-500 text-white">
              SIGN IN WITH TWITTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
