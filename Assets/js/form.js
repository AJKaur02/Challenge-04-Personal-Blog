document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    if (username && title && content) {
        const postData = {
            username: username,
            title: title,
            content: content
        };

        // Retrieve existing posts from localStorage or initialize empty array
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(postData);
        localStorage.setItem('posts', JSON.stringify(posts));

        // Redirect to blog page
        window.location.href = 'blog.html';
    } else {
        alert('Please complete all fields.');
    }
});
