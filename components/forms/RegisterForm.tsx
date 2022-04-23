import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import DialogModal from './DialogModal';

const RegisterForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <DialogModal>
      <form action="">
        <div className="max-w-[400px] mb-2">
          <input
            className="p-2 px-3 border 1px solid black w-full"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="max-w-[400px] mb-2">
          <input
            className="p-2 px-3 border 1px solid black w-full"
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="max-w-[400px] mb-2">
          <input
            className="p-2 px-3 border 1px solid black w-full"
            type="text"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-between mt-4">
          <button
            type="submit"
            className="inline-flex justify-center px-4 py-2 text-sm bg-black text-white border border-transparent rounded-md"
          >
            Sign Up
          </button>
        </div>
      </form>
    </DialogModal>
  );
};

export default RegisterForm;
