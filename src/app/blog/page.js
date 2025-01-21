import Link from 'next/link';
import React from 'react';

const blogs = [
  { id: 1, title: 'Debouncing and Throttling in React', content: `Struggling with performance issues caused by frequent API calls or event handling in your React apps? Master debouncing and throttling to improve your input fields and overall user experience.

👉 Debouncing: Delays function execution until the user pauses their actions, ideal for search boxes or filtering.

👉 Throttling: Limits function execution to a set interval, great for handling scroll events or resize listeners.

💡 These techniques not only improve performance but also make your application feel faster and more responsive.

Have you implemented these techniques in your projects? Share your thoughts or ask questions below! 👇` },

  { id: 2, title: 'Blog 2', content: 'Content for blog 2' },
  { id: 3, title: 'Blog 3', content: 'Content for blog 3' },
  { id: 4, title: 'Blog 4', content: 'Content for blog 4' },
  { id: 5, title: 'Blog 5', content: 'Content for blog 5' },
  { id: 6, title: 'Blog 6', content: 'Content for blog 6' },
  { id: 7, title: 'Blog 7', content: 'Content for blog 7' },
  { id: 8, title: 'Blog 8', content: 'Content for blog 8' },
  { id: 9, title: 'Blog 9', content: 'Content for blog 9' },
  { id: 7, title: 'Blog 7', content: 'Content for blog 7' },
  { id: 8, title: 'Blog 8', content: 'Content for blog 8' },
  { id: 9, title: 'Blog 9', content: 'Content for blog 9' },
  { id: 7, title: 'Blog 7', content: 'Content for blog 7' },
  { id: 8, title: 'Blog 8', content: 'Content for blog 8' },
  { id: 9, title: 'Blog 9', content: 'Content for blog 9' },
  { id: 7, title: 'Blog 7', content: 'Content for blog 7' },
  { id: 8, title: 'Blog 8', content: 'Content for blog 8' },
  { id: 9, title: 'Blog 9', content: 'Content for blog 9' },
  { id: 7, title: 'Blog 7', content: 'Content for blog 7' },
  { id: 8, title: 'Blog 8', content: 'Content for blog 8' },
  { id: 9, title: 'Blog 9', content: 'Content for blog 9' },
  { id: 7, title: 'Blog 7', content: 'Content for blog 7' },
  { id: 8, title: 'Blog 8', content: 'Content for blog 8' },
  { id: 9, title: 'Blog 9', content: 'Content for blog 9' },
  { id: 7, title: 'Blog 7', content: 'Content for blog 7' },
  { id: 8, title: 'Blog 8', content: 'Content for blog 8' },
  { id: 9, title: 'Blog 9', content: 'Content for blog 9' },
  { id: 7, title: 'Blog 7', content: 'Content for blog 7' },
  { id: 8, title: 'Blog 8', content: 'Content for blog 8' },
  { id: 9, title: 'Blog 9', content: 'Content for blog 9' },
  { id: 7, title: 'Blog 7', content: 'Content for blog 7' },
  { id: 8, title: 'Blog 8', content: 'Content for blog 8' },
  { id: 9, title: 'Blog 9', content: 'Content for blog 9' },
  { id: 7, title: 'Blog 7', content: 'Content for blog 7' },
  { id: 8, title: 'Blog 8', content: 'Content for blog 8' },
  { id: 9, title: 'Blog 9', content: 'Content for blog 9' },
  { id: 7, title: 'Blog 7', content: 'Content for blog 7' },
  { id: 8, title: 'Blog 8', content: 'Content for blog 8' },
  { id: 9, title: 'Blog 9', content: 'Content for blog 9' },
  { id: 7, title: 'Blog 7', content: 'Content for blog 7' },
  { id: 8, title: 'Blog 8', content: 'Content for blog 8' },
  { id: 9, title: 'Blog 9', content: 'Content for blog 9' },
  { id: 7, title: 'Blog 7', content: 'Content for blog 7' },
  { id: 8, title: 'Blog 8', content: 'Content for blog 8' },
  { id: 9, title: 'Blog 9', content: 'Content for blog 9' },
];

const BlogPage = () => {
  return (
    <div className="container h-[100vh] flex justify-center items-center mx-auto p-40"> 
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <Link href={`blog/${blog.id}`} key={blog.id} className="bg-dark-gradient rounded-lg shadow-lg p-8 hover:scale-95 border border-gray-500 duration-700 transition-transform">
            <h2 className="text-[18px] font-bold mb-3">{blog.title}</h2>
            <p>{blog.content.slice(0, 100 ) + "..."}</p>
          </Link>
        ))}
      </div> */}
      <p className='text-5xl font-bold'>Comming Soon....</p>
      
    </div>
  );
};

export default BlogPage; 