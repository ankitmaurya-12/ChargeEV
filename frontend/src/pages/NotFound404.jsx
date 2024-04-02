import React, { useState, useEffect } from "react";

function NotFound404() {
  const [notifications, setNotifications] = useState([
    "You have reviewed a charging station.",
    "You have booked a charging station.",
    "You have logged in from a different device.",
    "New charging stations have been added nearby.",
  ]);

  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);

  useEffect(() => {
    // Automatically cycle through notifications every 5 seconds
    const notificationTimer = setInterval(() => {
      setCurrentNotificationIndex((prevIndex) =>
        prevIndex < notifications.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => {
      clearInterval(notificationTimer);
    };
  }, [notifications]);

  const getRandomTimestamp = () => {
    const now = new Date();
    const randomMinutes = Math.floor(.56347845 * 60);
    now.setMinutes(now.getMinutes() - randomMinutes);
    return now.toLocaleTimeString();
  };

  return (
    <div className="h-[90vh] flex bg-gradient-to-tl from-rose-700 to-pink-600 justify-center items-center flex-col space-y-5">

      <table className="table-auto border border-blue-500">
        <thead>
          <tr>
            <th className="p-2 bg-blue-500 text-white font-bold py-2 px-4 rounded">Notification</th>
            <th className="p-2 bg-blue-500 text-white font-bold py-2 px-4 rounded">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((notification, index) => (
            <tr key={index}>
              <td className="p-2">{notification}</td>
              <td className="p-2">{getRandomTimestamp()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NotFound404;
