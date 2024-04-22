import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserPosts = ({ userId }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/user/${userId}/posts`);
                setPosts(response.data);
            } catch (error) {
                console.error(error);
                // Handle error
            }
        };
        fetchPosts();
    }, [userId]);

    return (
        <div>
            <h2>User Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <p>{post.content}</p>
                        <p>Star Rating: {post.starRating}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserPosts;
