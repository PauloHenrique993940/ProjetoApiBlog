document.addEventListener('DOMContentLoaded', () => {
    const blogPostsContainer = document.getElementById('blog-posts');

    fetch('https://gorest.co.in/public-api/posts')
        .then(response => response.json())
        .then(data => {
            const posts = data.data;
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'blog-post';

                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                    <p class="author">Autor: ${post.user_id}</p>
                `;

                blogPostsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Erro ao carregar as postagens:', error));
});
