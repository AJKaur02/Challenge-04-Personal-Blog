document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('toggleMode');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.innerText = '🌚';
        } else {
            themeToggle.innerText = '🌞';
        }
    });

    const blogForm = document.getElementById('blogForm');
    if (blogForm) {
        blogForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const username = document.getElementById('username').value.trim();
            const title = document.getElementById('title').value.trim();
            const content = document.getElementById('content').value.trim();
            
            if (username !== '' && title !== '' && content !== '') {
                const postData = {
                    username: username,
                    title: title,
                    content: content
                };

                let posts = JSON.parse(localStorage.getItem('posts')) || [];
                posts.push(postData);
                localStorage.setItem('posts', JSON.stringify(posts));

                window.location.href = 'blog.html';
            } else {
                alert('Please complete all fields.');
            }
        });
    }
});
