
import React, { useState } from 'react';

function CommentForm({postId, onAdd }) {
    const [formData, setFormData] = useState({ email: '', body: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({...formData, postId: postId});
        setFormData({ email: '', body: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h5>Ajouter un commentaire</h5>
            <input 
                type="email" 
                placeholder="Votre Email" 
                value={formData.email}
                required
                onChange={(e) => setFormData({...formData, email: e.target.value})} 
            />
            <br />
            <textarea 
                placeholder="Votre commentaire" 
                value={formData.body}
                required
                onChange={(e) => setFormData({...formData, body: e.target.value})}
            />
            <br />
            <button type="submit">Ajouter</button>
        </form>
    );
}

export default CommentForm;