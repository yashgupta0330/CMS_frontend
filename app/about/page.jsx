"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Page() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios.get('http://localhost:1337/api/about')
      .then(res => {
         console.log('check', res.data.data)
        setAbout(res.data.data || {});
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8">
        {loading ? (
          <div className="text-center text-gray-500 text-lg">Loading...</div>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {about?.title || 'No Title'}
            </h1>
            <p className="text-gray-600 text-lg">
              {about?.description || 'No Description'}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Page;