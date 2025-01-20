// "use client";

// import { useParams } from "next/navigation";
// import React, { useEffect, useState } from "react";

// const BlogPost = () => {
//     const { id } = useParams(); // Access dynamic ID parameter
//     const [post, setPost] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (id) {
//             // Fetch the blog post data based on the ID                 
//             fetch(`/api/blog/${id}`)
//                 .then((response) => {
//                     if (!response.ok) {
//                         throw new Error("Failed to fetch post");
//                     }
//                     return response.json();
//                 })
//                 .then((data) => {
//                     setPost(data);
//                     setLoading(false);
//                 })
//                 .catch((error) => {
//                     console.error("Error fetching post:", error);
//                     setLoading(false);
//                 });
//         }
//     }, [id]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (!post) {
//         return <div>Post not found</div>;
//     }

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
//             <p className="text-lg">{post.content}</p>
//         </div>
//     );
// };

// export default BlogPost;


"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";     

const BlogPost = () => { 
    const { id } = useParams(); // Access the dynamic ID parameter
//     const [post, setPost] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (id) {
//             // Fetch the blog post data from the updated API route
//             fetch(`/api/blog/${id}`)
//                 .then((response) => {
//                     if (!response.ok) {
//                         throw new Error("Failed to fetch post");
//                     }
//                     return response.json();
//                 })
//                 .then((data) => {
//                     setPost(data);
//                     setLoading(false);
//                 })
//                 .catch((error) => {
//                     console.error("Error fetching post:", error);
//                     setLoading(false);
//                 });
//         }
//     }, [id]);                                                                

//     if (loading) {
//         return <div>Loading...</div>;
//     }

    // if (!post) {
    //     return <div>Post not found</div>;
    // }

    return (
        <div className="container mx-auto h-screen p-40">
            <h1 className="text-2xl font-bold mb-4">Post {id}</h1>
            <p className="text-lg">post details</p>
        </div>
    );
};

export default BlogPost; 

