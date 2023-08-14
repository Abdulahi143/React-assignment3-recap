import React, { useEffect, useState } from 'react';



const Users = () => {
  const [username, setUsername] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchUserInfo = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const userInfo = await response.json();
      return userInfo;
    } catch (error) {
      console.log(error.message);
      setErrorMessage('User not found');
      return null;
    }
  };

  const handleSearch = async () => {
    if (username.trim() === "") {
      setErrorMessage('Please enter a username');
      setUserInfo(null);
      return;
    }

    const fetchedUserInfo = await fetchUserInfo(username);
    if (fetchedUserInfo) {
      setUserInfo(fetchedUserInfo);
      setErrorMessage('');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full sm:max-w-md">
        <input
          id="search-input"
          className="w-3/4 p-2 text-base border border-gray-300 rounded"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter a username"
        />
        <button
          id="search-button"
          className="w-1/4 mt-4 p-2 text-base bg-blue-500 text-white rounded cursor-pointer transition duration-300 hover:bg-blue-600"
          onClick={handleSearch}
        >
          Search
        </button>
        <div id="user-info" className="mt-4 p-6 bg-white rounded shadow-md">
          {errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            userInfo ? (
              displayUserInfo(userInfo)
            ) : (
              <p>Please enter a username</p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

const displayUserInfo = (userInfo) => {
  return (
    <div>
      <img
        id="user-avatar"
        className="w-20 h-20 rounded-full object-cover mb-4"
        src={userInfo.avatar_url}
        alt=""
      />
      <h2 className="text-2xl text-gray-800 mb-2">{userInfo.name}</h2>
      <p className="text-gray-600">Username: {userInfo.login}</p>
      <p className="text-gray-600">
        Date of Joining: {new Date(userInfo.created_at).toLocaleDateString()}
      </p>
      <p className="text-gray-600">Following: {userInfo.following}</p>
      <p className="text-gray-600">Followers: {userInfo.followers}</p>
      <p className="text-gray-600">
        Last updated: {new Date(userInfo.updated_at).toLocaleDateString()}
      </p>
      <p className="text-gray-600">Repos: {userInfo.public_repos}</p>
    </div>
  );
};

export default Users;
