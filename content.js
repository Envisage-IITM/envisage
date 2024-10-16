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

        if (type === "Project") {
            if(projectsContainer){
            projectsContainer.innerHTML += `
                 <div class="gallery-item">
                    <a href = "${link}">
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
                <div class="game-card">
                    <img src="${imageUrl}" alt="${title}" class="game-image">
                    <h2 class="game-title">${title}</h2>
                    <p class="game-description">${description}</p>
                    <a href="${link}" class="play-now-button">Play Now</a>
                </div>
            `;
            }
        }
    });
}