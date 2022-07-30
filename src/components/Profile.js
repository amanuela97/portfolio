import React from "react";
import profile from "../public/profile.jpg";

const Profile = () => {
  return (
    <div className="flex flex-col items-center py-10 border-b border-gray-200 dark:border-gray-700">
      <img
        className="mb-2 w-24 h-24 rounded-full shadow-lg object-cover"
        src={profile}
        alt="my image"
      />
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
    </div>
  );
};

export default Profile;
