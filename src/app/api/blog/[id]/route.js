// export default function handler(req, res) {
//     const { id } = req.query; // Extract the dynamic ID from the query

//     // Sample blog posts data
//     const posts = [
//         { id: "1", title: "Blog 1", content: "Content for blog 1" },
//         { id: "2", title: "Blog 2", content: "Content for blog 2" },
//         { id: "3", title: "Blog 3", content: "Content for blog 3" },
//     ];

//     // Find the post with the matching ID
//     const post = posts.find((p) => p.id === id);

//     if (post) {
//         // If found, return the post data
//         res.status(200).json(post);
//     } else {
//         // If not found, return a 404 error
//         res.status(404).json({ message: "Post not found" });
//     }
// }



// src/app/api/blog/[id]/route.js

export async function GET(request, { params }) {
    const { id } = params; // Extract 'id' from the URL parameters
    // Fetch the blog post based on the 'id'
    const blogPost = await getBlogPostById(id); // Replace this with your actual fetching logic
    
    if (!blogPost) {
      return new Response(JSON.stringify({ error: "Blog post not found" }), {
        status: 404,
      });
    }
  
    return new Response(JSON.stringify(blogPost), {
      headers: { "Content-Type": "application/json" },
    });
  }
  
  export async function POST(request, { params }) {
    const { id } = params; // Extract 'id' from the URL parameters
    const body = await request.json(); // Get the request body
    
    // Update or save the blog post logic here
    const updatedBlogPost = await saveBlogPost(id, body); // Replace with your actual logic
    
    return new Response(JSON.stringify(updatedBlogPost), {
      headers: { "Content-Type": "application/json" },
    });
  }
  
  // Add similar named exports for PUT, DELETE, etc., if needed.
  
