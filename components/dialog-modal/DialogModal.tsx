import { Dialog } from '@headlessui/react';

interface DialogModalProps {
  isOpen: boolean;
  closeDialogModal: () => void;
}

const DialogModal = ({ isOpen, closeDialogModal }: DialogModalProps) => {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="fixed inset-0 z-[100] overflow-y-auto bg-white/[.9]  h-screen"
        onClose={closeDialogModal}
      >
        <div className="min-h-screen text-center flex justify-center items-center">
          <Dialog.Overlay className="fixed inset-0" />
          <div className="px-5">
            <div className="flex flex-col w-full max-w-md p-6 my-8 overflow-hidden text-left transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                My Modal
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  officia! In debitis adipisci at ex dolores veniam facilis
                  neque iste, consequuntur accusantium voluptas culpa aliquid
                  voluptatem itaque vitae repudiandae vel.
                </p>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm bg-black text-white border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={closeDialogModal}
                >
                  Have a nice day
                </button>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default DialogModal;
