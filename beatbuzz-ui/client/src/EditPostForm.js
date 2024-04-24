


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './StarRatingCreate';
// const EditPostForm = () => {
//     const { postId } = useParams(); // Extract postId from URL parameters
//     const [post, setPost] = useState(null);
//     const [editedPost, setEditedPost] = useState({});
  
//     useEffect(() => {
//       // Fetch the post data from the backend based on the postId
//       axios.get(`http://localhost:8080/api/posts/${postId}`)
//         .then(response => {
//           setPost(response.data);
//           setEditedPost(response.data); // Set initial edited post data
//         })
//         .catch(error => {
//           console.error('Error fetching post:', error);
//         });
//     }, [postId]); // Make sure to include postId in the dependency array
  
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setEditedPost({ ...editedPost, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             // Send updated post data to the backend for saving
//             await axios.put(`http://localhost:8080/api/posts/${postId}`, editedPost);
//             // Show a success message
//             alert('Post edited successfully');
//         } catch (error) {
//             console.error('Error updating post:', error);
//         }
//     };

//     if (!post) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="edit-post-form">
//             <h2>Edit Post</h2>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="content">Content:</label>
//                 <textarea
//                     id="content"
//                     name="content"
//                     value={editedPost.content || post.content || ''}
//                     onChange={handleChange}
//                 ></textarea>
//                 <label htmlFor="albumName">Album Name:</label>
//                 <input
//                     type="text"
//                     id="albumName"
//                     name="albumName"
//                     value={editedPost.albumName || post.albumName || ''}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="starRating">Star Rating:</label>
//                 <input
//                     type="number"
//                     id="starRating"
//                     name="starRating"
//                     value={editedPost.starRating || post.starRating || ''}
//                     onChange={handleChange}
//                 />
//                 <button type="submit">Save Changes</button>
//             </form>
//         </div>
//     );
// };

// export default EditPostForm;



// import StarRatingEdit from './StarRatingEdit'; // Import the StarRatingEdit component


// const EditPostForm = () => {
//   const { postId } = useParams(); // Extract postId from URL parameters
//   const [post, setPost] = useState(null);
//   const [editedPost, setEditedPost] = useState({});

//   useEffect(() => {
//     // Fetch the post data from the backend based on the postId
//     axios.get(`http://localhost:8080/api/posts/${postId}`)
//       .then(response => {
//         setPost(response.data);
//         setEditedPost(response.data); // Set initial edited post data
//       })
//       .catch(error => {
//         console.error('Error fetching post:', error);
//       });
//   }, [postId]); // Make sure to include postId in the dependency array

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedPost({ ...editedPost, [name]: value });
//   };

//   const handleRatingChange = (rating) => {
//     setEditedPost({ ...editedPost, starRating: rating });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Send updated post data to the backend for saving
//       await axios.put(`http://localhost:8080/api/posts/${postId}`, editedPost);
//       // Show a success message to the user
//       alert('Post edited successfully');
//     } catch (error) {
//       console.error('Error updating post:', error);
//     }
//   };

//   if (!post) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="edit-post-form">
//       <h2>Edit Post</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="content">Content:</label>
//         <textarea
//           id="content"
//           name="content"
//           value={editedPost.content || ''}
//           onChange={handleChange}
//         ></textarea>
//         <label htmlFor="albumName">Album Name:</label>
//         <input
//           type="text"
//           id="albumName"
//           name="albumName"
//           value={editedPost.albumName || ''}
//           onChange={handleChange}
//         />
//         <label htmlFor="starRating">Star Rating:</label>
//         <StarRatingEdit
//           initialValue={editedPost.starRating || 0}
//           onChange={handleRatingChange}
//         />
//         <button type="submit">Save Changes</button>
//       </form>
//     </div>
//   );
// };

// export default EditPostForm;



import StarRatingEdit from './StarRatingEdit'; // Import the StarRatingEdit component

const EditPostForm = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [editedPost, setEditedPost] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/api/posts/${postId}`)
      .then(response => {
        setPost(response.data);
        setEditedPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });
  }, [postId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPost({ ...editedPost, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setEditedPost({ ...editedPost, starRating: rating });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/posts/${postId}`, editedPost);
      window.alert("Post edited successfully");
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-post-form">
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="albumName"></label>
          <input
            type="text"
            id="albumName"
            name="albumName"
            value={editedPost.albumName || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="starRating"></label>
          <StarRatingEdit initialValue={editedPost.starRating || 0} onChange={handleRatingChange} />
        </div>
        <div className="form-group">
          <label htmlFor="content"></label>
          <textarea
            id="content"
            name="content"
            value={editedPost.content || ''}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default EditPostForm;
