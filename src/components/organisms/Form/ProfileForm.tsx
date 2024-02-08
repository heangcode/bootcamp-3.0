"use client";

import React, { useState, useEffect } from "react";
import { Profile } from "@/utils/Profile"; // Adjust the import path as necessary
import Image from "next/image";

interface ProfileFormProps {
  profile?: Profile;
  onSubmit: (profile: Profile) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ profile, onSubmit }) => {
  const [id, setId] = useState<number>(profile ? profile.id : 0);
  const [name, setName] = useState<string>(profile ? profile.name : "");
  const [age, setAge] = useState<number>(profile ? profile.age : 0);
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>(
    profile ? profile.images : ""
  );

  useEffect(() => {
    if (profile) {
      setId(profile.id);
      setName(profile.name);
      setAge(profile.age);
      setPreviewUrl(profile.images);
    }
  }, [profile]);

  useEffect(() => {
    if (!image) {
      setPreviewUrl("");
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result as string);
    };
    fileReader.readAsDataURL(image);
  }, [image]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prepare data for submission, including the image if available
    // You might need to handle the image upload separately depending on your backend
    const formData = new FormData();
    formData.append("name", name);
    formData.append("age", age.toString());
    if (image) formData.append("image", image);

    // Assuming onSubmit can handle FormData or you might adjust to fit your submission logic
    onSubmit({
      id,
      name,
      age,
      images: previewUrl, // This might be replaced by the uploaded image URL from your server
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 border border-gray-200 rounded-lg shadow-lg">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {profile ? "Edit Profile" : "Add Profile"}
        </h3>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 h-10 block w-full rounded-md pl-4 border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            Age
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value, 10))}
            className="mt-1 h-10 block w-full rounded-md pl-4 border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Profile Image
          </label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className="mt-1 block w-full"
          />
          {previewUrl && (
            <Image
              src={previewUrl}
              height={32}
              width={32}
              alt="Preview"
              className="mt-2 w-32 h-32 object-cover rounded-full"
            />
          )}
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {profile ? "Save Changes" : "Create Profile"}
          </button>
        </div>
      </form>
    </div>
  );
};

export { ProfileForm };
