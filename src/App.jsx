import React, { useState, useEffect } from "react";
import Skeleton from "./components/Table/Skeleton";
import Table from "./components/Table/Table";
import Incognoir from '@incognoir/browser-sdk';


function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 2000);

    try {
      Incognoir.init({
        apiBase: 'https://api.incognoir.com',
        apiKey: 'sk_live_55224b9d64944ab3',
        environmentId: 'Helix-staging'
      });
      
      console.log('Incognoir initialized successfully');
    } catch (error) {
      console.error('Failed to initialize Incognoir:', error);
    }

    return () => clearTimeout(timer); // Cleanup

  }, []);

  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 text-2xl font-bold">
        Admin Dashboard | <span className="text-xl text-blue-200">Employees List</span> 
      </header>

      {/* Main content */}
      <main className="p-4 ">
        {loading ? (
          <Skeleton /> // Show skeleton while loading
        ) : (
          <Table /> // Show table after loading
        )}
      </main>
    </div>
  );
}

export default App;
