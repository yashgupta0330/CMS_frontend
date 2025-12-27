"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://smart-nest-0c47dbfbb7.strapiapp.com/api/blogs?populate=imagePost')
      .then(res => {
        // console.log('check', res.data.data);
        setBlogs(res.data.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  console.log('blogs', blogs);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Blog Posts</h1>
        {loading ? (
          <div className="text-center text-gray-500 text-lg">Loading...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map(blog => {
              const { title, description, imagePost ,category1 } = blog
              const imageUrl = imagePost?.url
                ? `https://smart-nest-0c47dbfbb7.strapiapp.com${imagePost.url}`
                : 'https://via.placeholder.com/400x250?text=No+Image';
              return (
                <div key={blog.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <div className='flex justify-between'> 

                    
            
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
                    <span className="text-xl font-semibold text-gray-800 mb-2">{category1}</span>
                    </div>
                   
                    <p className="text-gray-600">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPage;