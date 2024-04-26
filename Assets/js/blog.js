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

    function displayPosts() {
        const blogList = document.getElementById('blogList');
        let posts = JSON.parse(localStorage.getItem('posts')) || [];

        // Display the last four posts or all posts if there are fewer than four
        const displayPosts = posts.slice(Math.max(posts.length - 4, 0));

        if (displayPosts.length === 0) {
            blogList.innerHTML = '<p>No blog posts available.</p>';
        } else {
            blogList.innerHTML = '';
            displayPosts.forEach((post, index) => {
                const postElement = document.createElement('div');
                postElement.classList.add('rectangle');
                if (index === displayPosts.length - 1) {
                    postElement.innerHTML = `
                        <h2 class="title">${post.title}</h2>
                        <p class="content">${post.content}</p>
                        <p class="posted-by">Posted by: ${post.username}</p>
                    `;
                } else {
                    postElement.innerHTML = `
                        <h2 class="title">Add title</h2>
                        <p class="content">Here is the content</p>
                        <p class="posted-by">Posted by: </p>
                    `;
                }
                blogList.appendChild(postElement);
            });
        }
    }

    displayPosts();
});
