"use client";

import React, { useState } from "react";
import { Profile } from "@/utils/Profile";
import { ProfileCard, ProfileForm } from "@/components";

const ProfileTemplate = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [editingProfile, setEditingProfile] = useState<Profile | undefined>(
    undefined
  );

  const addProfile = (profile: Profile) => {
    // If the profile does not have an ID, it's new
    if (!profile.id) {
      const newProfile = { ...profile, id: Date.now() };
      setProfiles([...profiles, newProfile]);
    } else {
      // If the profile has an ID, update the existing profile
      const updatedProfiles = profiles.map((p) =>
        p.id === profile.id ? profile : p
      );
      setProfiles(updatedProfiles);
    }
    // Reset the editing profile to clear the form
    setEditingProfile(undefined);
  };

  const startEditProfile = (profile: Profile) => {
    setEditingProfile(profile);
  };

  const deleteProfile = (id: number) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  return (
    <div>
      <button
        onClick={() =>
          setEditingProfile({ id: 0, name: "", age: 0, images: "" })
        }
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Add Profile
      </button>
      {editingProfile && (
        <ProfileForm profile={editingProfile} onSubmit={addProfile} />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onEdit={() => startEditProfile(profile)}
            onDelete={() => deleteProfile(profile.id)}
          />
        ))}
      </div>
    </div>
  );
};

export { ProfileTemplate };
