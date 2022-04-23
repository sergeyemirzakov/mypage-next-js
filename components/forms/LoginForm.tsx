import { useRouter } from 'next/router';
import { useState } from 'react';
import { loginUser } from '../../lib/api/user';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import DialogModal from './DialogModal';
import { loginFormSchema } from './schema/loginFormSchema';
import Spinner from '../preloaders/Spinner';

const LoginForm = () => {
  const router = useRouter();
  // Form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Form validation
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit = async (formData: any) => {
    setIsLoading(true);
    setError(false);

    try {
      const response = await loginUser(formData?.email, formData?.password);
      const status = response?.status;
      const user = response?.data.user;

      status !== 200 ? setError(true) : setError(false);

      if (user) {
        sessionStorage.setItem('user', JSON.stringify(user));
        router.push('/');
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DialogModal>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        {error && (
          <p className="text-red-500 mb-3 text-center text-sm">
            Something went wrong. Check your internet connection or try again
            later
          </p>
        )}
        <div className="max-w-[400px] mb-2">
          <input
            {...register('email')}
            className="p-2 px-3 border 1px solid black w-full"
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="text-red-500 text-sm text-center my-1">
            {errors.email?.message}
          </div>
        </div>
        <div className="max-w-[400px] mb-2">
          <input
            {...register('password')}
            className="p-2 px-3 border 1px solid black w-full"
            type="text"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="text-red-500 text-sm text-center my-1">
            {errors.password?.message}
          </div>
        </div>
        <div className="flex justify-between mt-4">
          {!isLoading && (
            <button
              type="submit"
              className="inline-flex justify-center px-4 py-2 text-sm bg-black text-white border border-transparent rounded-md"
            >
              Log in
            </button>
          )}
          {isLoading && (
            <button
              type="submit"
              className="inline-flex justify-center px-4 py-2 text-sm bg-black text-white border border-transparent rounded-md"
            >
              <span className="w-[20px] mr-2">
                <Spinner />
              </span>
              Loading
            </button>
          )}
          <button
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm bg-blue-200 text-black border border-transparent rounded-md"
            onClick={() => router.push('/register')}
          >
            Create an account
          </button>
        </div>
      </form>
    </DialogModal>
  );
};

export default LoginForm;
