import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaPhoneAlt } from "react-icons/fa";
import { MdDriveFileRenameOutline, MdInsertPhoto } from "react-icons/md";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/Provider";

const UpdateProfiles = () => {
  const { UpdateUser, setUser, user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, photoUrl } = data;
    UpdateUser(name, photoUrl)
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
          <form
            data-aos="zoom-in"
            data-aos-duration="1000"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div className="space-y-1 text-sm relative">
              <label htmlFor="username" className="block dark:text-gray-600">
                Your Name
              </label>
              <input
                defaultValue={user?.displayName}
                {...register("name", { required: true })}
                type="text"
                name="name"
                id="name"
                placeholder="Enter your Name"
                className="w-full px-8 py-3 rounded-md dark:border-[#00AFC6] border dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              {errors.name && (
                <span className="text-red-700">This field is required</span>
              )}
              <p className="absolute text-xl top-8 left-2">
                <MdDriveFileRenameOutline />
              </p>
            </div>
            <div className="space-y-1 text-sm relative">
              <label htmlFor="photoUrl" className="block dark:text-gray-600">
                PhotoURL
              </label>
              <input
                defaultValue={user?.photoURL}
                {...register("photoURL", { required: true })}
                type="text"
                name="photoUrl"
                id="photo"
                placeholder="PhotoURL"
                className="w-full px-8 py-3 rounded-md dark:border-[#00AFC6] border dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              {errors.photoURL && (
                <span className="text-red-700">This field is required</span>
              )}
              <p className="absolute text-xl top-8 left-2">
                <MdInsertPhoto />
              </p>
            </div>

            <div className="space-y-1 text-sm relative">
              <label htmlFor="username" className="block dark:text-gray-600">
                email
              </label>
              <input
                defaultValue={user?.email}
                type="email"
                name="email"
                id="email"
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
