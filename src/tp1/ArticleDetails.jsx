
function ArticleDetails({ article }) {
    return (
        <div style={{ border: '2px solid blue', padding: '15px' }}>
            <h2>Informations de l'article</h2> 
            <p><strong>ID:</strong> {article.id}</p>
            <p><strong>User ID:</strong> {article.userId}</p>
            <p><strong>Titre:</strong> {article.title}</p>
            <p><strong>Contenu:</strong> {article.body}</p>
        </div>
    );
}

export default ArticleDetails;