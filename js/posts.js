fetch("data/posts.json")
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById("posts");

    posts.slice(0, 40).forEach(post => {
      let mediaHTML = "";

      if (post.video) {
        mediaHTML = `<video src="${post.video}" controls width="300"></video>`;
      } else if (post.image) {
        mediaHTML = `<img src="${post.image}" width="300">`;
      }

      container.innerHTML += `
        <div class="news-card">
          ${mediaHTML}
          <h4>${post.title}</h4>
          <p>${post.text}</p>
        </div>
      `;
    });
  })
  .catch(err => console.error(err));
