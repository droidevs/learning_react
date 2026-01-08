import React, { useState, useEffect } from 'react';
import ArticleList from './ArticleList';
import ArticleDetails from './ArticleDetails.jsx';
import CommentsSection from './CommentsSection.jsx';

export default function ArticlesApp() {
    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedUser, setSelectedUser] = useState("");
    const [activeArticle, setActiveArticle] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setArticles(data));
    }, []);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then(res => res.json())
            .then(data => {
                setComments(data);
            });
    }, []);


    // Filter logic for search by title and filter by user ID [cite: 15, 16, 17]
    const filteredArticles = articles.filter(art => 
        art.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedUser === "" || art.userId === parseInt(selectedUser))
    );

    // Your requested filter logic
    const filteredComments = activeArticle ? comments.filter(c => c.postId === activeArticle.id) : [];

    const distinctUserIds = [...new Set(articles.map(art => art.userId))].sort((a, b) => a - b);

    function addComment(newComment) {
        setComments(prevComments => [...prevComments, newComment]);
    }

    return (
        <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
            <div style={{ flex: 1 }}>
                <h1>Articles</h1>
                
                {/* Search and Filter Controls  */}
                <input 
                    type="text" 
                    value={searchTerm}
                    placeholder="Recherche par titre..." 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
                
                <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
                    <option value="">Tous les Utilisateurs</option>
                    {
                     distinctUserIds.map((_, userId) => (
                        <option key={userId} value={userId}>Utilisateur {userId}</option>
                    ))
                    }
                </select>

                <ArticleList 
                    articles={filteredArticles} 
                    onActiveArticle={setActiveArticle}
                    onShowDetails={ () => {
                        setShowDetails(true)
                        setShowComments(false)
                    }
                    }
                    onShowComments = { () => {
                        setShowComments(true)
                        setShowDetails(false)
                    }
                    }
                    
                />
            </div>

            {/* Side block for Details  */}
            <div style={{ flex: 1 }}>
                {activeArticle && showDetails && <ArticleDetails article={activeArticle} />}
                {
                activeArticle && showComments && 
                    <CommentsSection postId={activeArticle.id} comments={filteredComments} addComment={addComment}/>
                }
            </div>
        </div>
    );
}