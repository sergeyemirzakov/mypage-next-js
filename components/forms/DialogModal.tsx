import { useRouter } from 'next/router';
import { Dialog } from '@headlessui/react';

interface DialogModalProps {
  children?: JSX.Element | JSX.Element;
}

const DialogModal = ({ children }: DialogModalProps) => {
  const router = useRouter();

  return (
    <Dialog
      open
      as="div"
      className="fixed inset-0 z-[100] overflow-y-auto bg-blue-300 h-screen"
      onClose={() => router.push('/')}
    >
      <div className="min-h-screen text-center flex justify-center items-center">
        <Dialog.Overlay className="fixed inset-0" />
        <div className="px-5 w-full max-w-[500px]">
          <div className="flex flex-col w-full max-w-md p-6 my-8 overflow-hidden text-left transform bg-white drop-shadow-2xl rounded-md">
            <Dialog.Title
              as="h3"
              className="text-xl text-center font-medium leading-6 text-gray-900 mb-5"
            >
              Welcome back.
            </Dialog.Title>
            <div className="mt-2">
              {/* We are getting children here */}
              {children}
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default DialogModal;
