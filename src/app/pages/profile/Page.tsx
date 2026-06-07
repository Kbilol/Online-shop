import React from "react";

const ProfilePage: React.FC = () => {
  const user = {
    name: "Bilol",
    email: "bilol9672@gmail.com",
    avatar:
      "https://i.pravatar.cc/300",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          />

          <h1 className="text-2xl font-bold mt-4">{user.name}</h1>

          <p className="text-gray-500 mt-1">{user.email}</p>

          <button
            className="
              mt-6
              px-6
              py-2
              bg-blue-500
              text-white
              rounded-lg
              font-medium
              transition-all
              hover:bg-blue-600
              hover:scale-105
            "
          >
            Редактировать профиль
          </button>
        </div>

        <div className="mt-8 border-t pt-6">
          <h2 className="text-lg font-semibold mb-4">
            Информация
          </h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-500">Имя</span>
              <span>{user.name}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Email</span>
              <span>{user.email}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Статус</span>
              <span className="text-green-600 font-medium">
                Активен
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;