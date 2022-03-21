import { useState } from "preact/hooks";
import { useForm } from "react-hook-form";
import { Modal } from "./Modal";

export const Friends = () => {
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
      <button onClick={() => setModalOpen(true)}>New Conversation</button>
      <Modal
        header={<h4>Create Conversation</h4>}
        closeButton
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
      >
        <form
          className="flex flex-col justify-start items-start"
          onSubmit={handleSubmit(submitHandler)}
        >
          <span className="text-gray-700">Username</span>
          <input
            className="input border border-gray-400 appearance-none rounded w-full px-3 py-2 mb-4 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
            {...register("username")}
          />
          {errors.username && (
            <p className="text-red-600">{errors.username.message}</p>
          )}
          <button
            className="bg-blue-800 hover:bg-blue-dark text-white font-bold py-3 px-6 mb-4 rounded"
            type="submit"
          >
            Create
          </button>
        </form>
      </Modal>
    </div>
  );
};
