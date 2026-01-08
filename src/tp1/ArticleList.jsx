import React, { useState } from 'react';
import CommentsSection from './CommentsSection.jsx';

function ArticleList({ articles, onActiveArticle, onShowComments, onShowDetails }) {
    const [visibleCommentsId, setVisibleCommentsId] = useState(null);

    return (
        <ul>
            {articles.map(article => (
                <li key={article.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
                    <h3>{article.title}</h3>
                    <button onClick={() => 
                        {
                            onActiveArticle(article)
                            onShowDetails()
                        }
                    }>Détails</button>
                    <button onClick={() => {
                        onActiveArticle(article)
                        onShowComments()
                    }}>
                        Commentaires
                    </button>
                    <button style={{color: 'red'}}>Supprimer</button>

                </li>
            ))}
        </ul>
    );
}

export default ArticleList;