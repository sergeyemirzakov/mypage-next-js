import useSWR from 'swr';
import { storage } from '../lib/utils/storage';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import { updateUser } from '../lib/api/user';
import DialogModal from '../components/forms/DialogModal';
import Spinner from '../components/preloaders/Spinner';
import { useState, useEffect } from 'react';

const User = () => {
  const router = useRouter();
  const { data: user } = useSWR('user', storage);

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>();

  const onSumbit: SubmitHandler<any> = async (data) => {
    setIsLoading(true);

    try {
      const response = await updateUser(
        user.token,
        data.email,
        data.username,
        data.password,
        data.bio,
        data.image
      );

      if (response?.data !== undefined) setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }

    router.push('/');
  };

  useEffect(() => {
    !user ? setIsLoading(true) : setIsLoading(false);

    // Here I get all default values for the form fields.
    reset({
      email: user?.email,
      username: user?.username,
      bio: user?.bio ?? '',
      image: user?.image,
    });
  }, [reset, user]);

  return (
    <DialogModal title="Edit User">
      <form onSubmit={handleSubmit(onSumbit)}>
        {/* Email */}
        <div className="max-w-[400px] mb-2">
          <input
            {...register('email', { required: true })}
            className="p-2 px-3 border 1px solid black w-full"
            type="text"
            name="email"
            placeholder="Email"
            // disabled={isLoading}
          />
          {errors?.title && (
            <div className="text-red-500 text-sm text-center my-1">
              This field is required
            </div>
          )}
        </div>

        {/* Username */}
        <div className="max-w-[400px] mb-2">
          <input
            {...register('username', { required: true })}
            className="p-2 px-3 border 1px solid black w-full"
            type="text"
            name="username"
            placeholder="Username"
            // disabled={isLoading}
          />
          {errors.title && (
            <div className="text-red-500 text-sm text-center my-1">
              This field is required
            </div>
          )}
        </div>

        {/* Password */}
        <div className="max-w-[400px] mb-2">
          <input
            {...register('password', { required: false })}
            className="p-2 px-3 border 1px solid black w-full"
            type="text"
            name="password"
            placeholder="Password"
            // disabled={isLoading}
          />
          {errors.title && (
            <div className="text-red-500 text-sm text-center my-1">
              This field is required
            </div>
          )}
        </div>

        {/* Bio */}
        <div className="max-w-[400px] mb-2">
          <input
            {...register('bio', { required: false })}
            className="p-2 px-3 border 1px solid black w-full"
            type="text"
            name="bio"
            placeholder="Bio"
            // disabled={isLoading}
          />
          {errors.title && (
            <div className="text-red-500 text-sm text-center my-1">
              This field is required
            </div>
          )}
        </div>

        {/* Image */}
        <div className="max-w-[400px] mb-2">
          <input
            {...register('image', { required: true })}
            className="p-2 px-3 border 1px solid black w-full"
            type="text"
            name="image"
            placeholder="Image"
            // disabled={isLoading}
          />
          {errors.title && (
            <div className="text-red-500 text-sm text-center my-1">
              This field is required
            </div>
          )}
        </div>

        <div className="mt-5">
          <button
            type="submit"
            className="inline-flex items-center justify-center px-4 py-2 text-sm bg-black text-white border border-transparent rounded-md"
          >
            {isLoading && (
              <span className="mr-2">
                <Spinner size="20" />
              </span>
            )}
            Update
          </button>
        </div>
      </form>
    </DialogModal>
  );
};

export default User;
