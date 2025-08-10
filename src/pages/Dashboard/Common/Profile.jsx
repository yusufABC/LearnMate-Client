import { useState } from 'react';
import UseAuth from '../../../Hooks/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const Profile = () => {
  const { user } = UseAuth();

  const [about, setAbout] = useState(user?.about || '');
  const [bio, setBio] = useState(user?.bio || '');
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // Example: Update backend
    axios
      .put(`https://your-server.com/users/${user.uid}`, { about, bio })
      .then((res) => {
        Swal.fire('Success', 'Profile updated successfully!', 'success');
        setIsEditing(false);
      })
      .catch((err) => {
        console.error(err);
        Swal.fire('Error', 'Could not update profile', 'error');
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5">
        {/* Cover Photo */}
        <img
          alt="cover photo"
          src="cover.jpg"
          className="w-full mb-4 rounded-t-lg h-56 object-cover"
        />

        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          {/* Profile Image */}
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24 border-2 border-white"
            />
          </a>

          <p className="p-2 px-4 text-xs text-white bg-blue-500 rounded-full">
            Customer
          </p>

          <p className="mt-2 text-xl font-medium text-gray-800">
            User Id: {user.uid}
          </p>

          {/* Name and Email */}
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black">{user.displayName}</span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black">{user.email}</span>
              </p>

              <div>
                <button className="bg-blue-500 px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-blue-700 block mb-1">
                  Update Profile
                </button>
                <button className="bg-blue-500 px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-blue-700">
                  Change Password
                </button>
              </div>
            </div>
          </div>

          {/* About & Bio Section */}
          <div className="w-full p-4 border-t mt-4">
            <h2 className="text-lg font-semibold mb-2">About Me</h2>
            {isEditing ? (
              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="w-full border p-2 rounded mb-3"
                rows={3}
                placeholder="Write something about yourself..."
              />
            ) : (
              <p className="text-gray-700">{about || 'No about information yet.'}</p>
            )}

            <h2 className="text-lg font-semibold mt-4 mb-2">Bio</h2>
            {isEditing ? (
              <input
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full border p-2 rounded mb-3"
                placeholder="Short bio (e.g., MERN Stack Developer)"
              />
            ) : (
              <p className="text-gray-700">{bio || 'No bio yet.'}</p>
            )}

            {/* Edit/Save Buttons */}
            {isEditing ? (
              <div className="mt-3 flex gap-3">
                <button
                  onClick={handleSave}
                  className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-400 text-white px-4 py-1 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="mt-3 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
