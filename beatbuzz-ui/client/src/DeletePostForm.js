import React, { useState } from 'react';
import axios from 'axios';

const DeletePostForm = ({ postId, onDelete }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = () => {
    axios.post('/post/delete', { reviewid: postId })
      .then((response) => {
        // Handle successful deletion
        console.log('Post deleted successfully');
        // Inform parent component (if provided) about the deletion
        if (onDelete) {
          onDelete(postId);
        }
      })
      .catch((error) => {
        // Handle error, e.g., display an error message
        console.error('Error deleting post:', error);
      });
  };

  return (
    <div className="delete-post">
      <span className="ellipsis" onClick={() => setShowConfirmation(true)}>...</span>
      {showConfirmation && (
        <div className="delete-confirmation">
          <p>Are you sure you want to delete this post?</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={() => setShowConfirmation(false)}>No</button>
        </div>
      )}
    </div>
  );
};

export default DeletePostForm;
