fetch('posts.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.createElement('ul');
    posts.forEach(post => {
      const item = document.createElement('li');
      item.innerHTML = `<a href="posts/${post.filename}">${post.title}</a> <small>(${post.date})</small>`;
      container.appendChild(item);
    });

    document.querySelector('main').appendChild(container);
  });
