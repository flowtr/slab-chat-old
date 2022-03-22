import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const handleError = (error: AxiosError) => {
  toast.dark(
    `Failed to login: ${error.response?.data.message ?? error.message}`,
    {
      autoClose: 6000,
      icon: (
        <FontAwesomeIcon className="mr-2" icon={faX} size="lg" color="red" />
      )
    }
  );
};
