fetch("./data/posts.json")
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById("posts");

    posts.slice(0, 40).forEach(post => {
      let mediaHTML = "";

      if (post.video) {
        mediaHTML = `
          <video 
            src="${post.video}" 
            controls 
            poster="${post.poster || ''}" 
            playsinline 
            preload="metadata"
          ></video>
        `;
      } else if (post.image) {
        mediaHTML = `<img src="${post.image}" alt="${post.title}">`;
      }

      container.innerHTML += `
        <div class="news-card">
          <div class="media-wrapper">
            ${mediaHTML}
          </div>
          <h4>${post.title}</h4>
          <p>${post.text}</p>
        </div>
      `;
    });
  })
  .catch(err => console.error(err));
