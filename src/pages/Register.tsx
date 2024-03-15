import   { useState } from 'react';
import {  useRegisterMutation } from '../redux/api/authApi/authApi';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const  Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [register]= useRegisterMutation()
  const navigate = useNavigate();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const userInfo = {
      username,
      password,
      email
    }
   const response = await register(userInfo).unwrap();
   if(response.success) {
    toast.success('register successful!')
    navigate('/login')
   }
  
  };

  return (
 <div className="flex items-center justify-center border min-h-screen">

<div className='w-96 '>
      
      <h2 className="text-2xl font-bold mb-6">Please register</h2>
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
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
     Already have an account?
        <a className="text-blue-600 underline " href="/login">
        Please login
        </a>
      </p>
    </div>
 </div>
 
      
  );
};

export default Register;
