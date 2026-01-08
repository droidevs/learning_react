import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm.jsx';

function CommentsSection({postId, comments, addComment}) {

    return (
        <div style={{ marginLeft: '20px', background: '#f9f9f9', padding: '10px' }}>
            <h4>Commentaires</h4>
            {comments.map(c => (
                <p key={c.id}><strong>{c.email}:</strong> {c.body}</p>
            ))}
            <hr />
            <CommentForm postId={postId} onAdd={addComment} />
        </div>
    );
}

export default CommentsSection;