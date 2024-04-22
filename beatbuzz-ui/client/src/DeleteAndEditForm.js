import React, { useState } from 'react';
import axios from 'axios';

const DeleteAndEditForm = ({ postId, onDelete, onEdit }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editedContent, setEditedContent] = useState('');

  const handleDelete = () => {
    axios.post('http://localhost:8080/post/delete', { reviewid: postId })
      .then((response) => {
        // Handle successful deletion
        console.log('Post deleted successfully');
        if (onDelete) {
          onDelete(postId);
        }
      })
      .catch((error) => {
        // Handle error, e.g., display an error message
        console.error('Error deleting post:', error);
      });
  };

  const handleEdit = () => {
    setEditing(true);
    setEditedContent(""); // Reset edited content
  };

  const handleChange = (e) => {
    setEditedContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`localhost:8080/post/${postId}`, { content: editedContent });
      onEdit(postId, editedContent); // Update the post content in the parent component
      setEditing(false);
    } catch (error) {
      console.error('Error editing post:', error);
    }
  };

  return (
    <div className="post-actions">
      <span className="ellipsis" onClick={() => setShowConfirmation(true)}>...</span>
      {showConfirmation && (
        <div className="actions-menu">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={() => setShowConfirmation(false)}>Cancel</button>
        </div>
      )}
      {editing && (
        <form onSubmit={handleSubmit} className="edit-form">
          <textarea value={editedContent} onChange={handleChange} />
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};

export default DeleteAndEditForm;
