import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { FaPhoneAlt } from "react-icons/fa";
import { MdDriveFileRenameOutline, MdInsertPhoto } from "react-icons/md";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/Provider";

const UpdateProfiles = () => {
  const { UpdateUser, setUser } = useContext(AuthContext);
  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const PhoneNumber = form.get("phoneNumber");
    const photoUrl = form.get("photoUrl");
    UpdateUser(name, photoUrl, PhoneNumber)
      .then(() => {
        toast.success("User Updated Successfully");
        setUser({ displayName: name, photoURL: photoUrl });
      })
      .catch();
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-8">
        <Helmet>
          <title>MyBali-Update-Profile</title>
        </Helmet>
        <div className="w-[80%] p-8 space-y-2 rounded-xl dark:bg-gray-50 dark:text-gray-800 ">
          <h1 className="text-2xl font-bold text-center">
            Update your account
          </h1>
          <form onSubmit={handleSubmitUpdate} className="space-y-4">
            <div className="space-y-1 text-sm relative">
              <label htmlFor="username" className="block dark:text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your Name"
                className="w-full px-8 py-3 rounded-md dark:border-[#00AFC6] border dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              <p className="absolute text-xl top-8 left-2">
                <MdDriveFileRenameOutline />
              </p>
            </div>
            <div className="space-y-1 text-sm relative">
              <label htmlFor="photoUrl" className="block dark:text-gray-600">
                PhotoURL
              </label>
              <input
                type="text"
                name="photoUrl"
                id="photo"
                placeholder="PhotoURL"
                className="w-full px-8 py-3 rounded-md dark:border-[#00AFC6] border dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              <p className="absolute text-xl top-8 left-2">
                <MdInsertPhoto />
              </p>
            </div>

            <div className="space-y-1 text-sm relative">
              <label htmlFor="username" className="block dark:text-gray-600">
                Phone
              </label>
              <input
                type="phone"
                name="phone"
                id="phone"
                placeholder="Enter your Phone Number"
                className="w-full px-8 py-3 rounded-md dark:border-[#00AFC6] border dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              <p className="absolute text-xl top-8 left-2">
                <FaPhoneAlt />
              </p>
            </div>

            <button
              type="submit"
              className="block w-full p-3 text-center rounded-sm common-color text-white font-bold"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfiles;
