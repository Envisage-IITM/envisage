let charLim  = 70

function displayContent(items) {
    const projectsContainer = document.querySelector('.gallery-container');
    const gamesContainer = document.querySelector('.gallery');
    console.log(items.data);
    items.forEach(item => {
        const type = item['Type']; // Type from the first column
        const title = item['Title']; // Title from the second column
        const description = item['Description']; // Description from the third column
        const imageUrl = item['Image URL']; // Image URL from the fourth column
        const link = item['Link']; // Link from the fifth column
        const contentType = item['Content Type'];
        if (type === "Project") {
            if(projectsContainer){
            projectsContainer.innerHTML += `
                 <div class="gallery-item">
                    ${ link !='' ? `<a href = "${link}">` : `` }
                    <img src="${imageUrl}" alt="${title}">
                    <div class="project-info">
                        <h3 class="project-title">${title}</h3>
                        <p class="project-description">${description}</p>
                    </div>
                    </a>
                </div>
            `;
            }
        } else if (type === "Game") {
            if(gamesContainer){
            gamesContainer.innerHTML += `
                <div class="game-card" >
                <div class="background-overlay" id="${imageUrl}"  onmouseover  = "playVideo(event)" onmouseout = "pauseVideo(event)">
                 </div>
                    <h2 class="game-title">${title}</h2>
                    <p class="game-description" id="description-${title}">
                        ${description.substring(0, charLim)}
                        <span class="dots" id="dots-${title}">...</span>
                        <span class="more" id="more-${title}">${description.substring(charLim)}</span>
                        ${description.length > charLim ? `<a class="read-more" id="readMore-${title}" onclick="toggleReadMore('${title}')">Read More</a>` : ''}
                    </p>
                    ${ link !='' ? `<a href="${link}" class="play-now-button">Play Now</a>`:``}
                </div>               
            `;
            setBackground(contentType , imageUrl)
            }
        }
    });
}
function toggleReadMore(title) {
    const dots = document.getElementById(`dots-${title}`);
    const moreText = document.getElementById(`more-${title}`);
    const readMoreLink = document.getElementById(`readMore-${title}`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        readMoreLink.textContent = "Read More";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        readMoreLink.textContent = "Read Less";
    }
}
function playVideo(event){
    // console.log(event.target.tagName);
        if (event.target.tagName == "VIDEO") console.log(event.target.play());
         
}
function pauseVideo(event){
    if (event.target.tagName == "VIDEO") console.log(event.target.pause());
     
}

function setBackground(type, src) {
    const backgroundOverlay = document.getElementById(src);
    
    // Clear any existing background content
    backgroundOverlay.innerHTML = '';
  
    // Dynamically create and append the correct tag based on type
    if (type === 'image') {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Game Background";
      img.classList.add("game-background");
      backgroundOverlay.appendChild(img);
    } else if (type === 'video') {
        const video = document.createElement("video");
        // video.innerHTML = `<source src="${src}"  type="video/mp4"></source>`
        video.src = src;
        video.autoplay = false;
        video.muted = true;
        video.loop = true;        
          

        video.classList.add("game-background");
        
        backgroundOverlay.appendChild(video);
        
    }
    
       
  }
  
