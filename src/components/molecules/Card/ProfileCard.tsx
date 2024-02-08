"use client";

import React from "react";
import { Profile } from "@/utils/Profile"; // Adjust import path as necessary
import Image from "next/image";

interface ProfileCardProps {
  profile: Profile;
  onEdit: (profile: Profile) => void; // Function to initiate editing
  onDelete: (id: number) => void; // Function to delete the profile
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  profile,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="card bg-white shadow-lg rounded-lg p-4 m-4">
      <Image
        src={profile.images}
        alt={profile.name}
        width={200}
        height={200}
        className="rounded-lg mx-auto"
      />
      <div className="text-center mt-2">
        <p className="text-xl">{profile.name}</p>
        <p className="text-gray-600">{profile.age} years old</p>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => onEdit(profile)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(profile.id)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export { ProfileCard };
