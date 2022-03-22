import { useState } from "preact/hooks";
import { useForm } from "react-hook-form";
import { Modal } from "./Modal";

export const Conversations = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<{
    username: string;
  }>();
  const submitHandler = (data: { username: string }) => {
    console.log(data);
  };

  return (
    <div>
      <button
        className="bg-gray-900 p-4 rounded-lg"
        onClick={() => setModalOpen(true)}
      >
        New Conversation
      </button>
      <Modal
        header="Create Conversation"
        footer={
          <button
            className="bg-green-700 hover:bg-green-800 text-white font-bold px-4 py-2 mr-auto rounded"
            type="submit"
          >
            Create
          </button>
        }
        closeButton
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
      >
        <form
          className="flex flex-col justify-start items-start"
          onSubmit={handleSubmit(submitHandler)}
        >
          <input
            className="input bg-gray-900 border border-gray-400 appearance-none rounded w-full px-3 py-2 mb-4 focus focus:border-green-600 focus:outline-none active:outline-none active:border-indigo-600"
            {...register("username")}
            placeholder="Username"
          />
          {errors.username && (
            <p className="text-red-600 mb-4">{errors.username.message}</p>
          )}
        </form>
      </Modal>
    </div>
  );
};
