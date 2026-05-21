// Replace this with your actual GitHub username
const username = 'Drakhmonov'; 

async function fetchGitHubProjects() {
    const container = document.getElementById('github-projects');
    
    try {
        // Fetch repositories sorted by most recently updated
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        const repos = await response.json();
        
        // Clear the loading message
        container.innerHTML = '';
        
        repos.forEach(repo => {
            // Skip forks to ensure only your original work shows up
            if (!repo.fork) {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                
                projectCard.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || 'No description provided. Click below to view the code structure on GitHub.'}</p>
                    <a href="${repo.html_url}" target="_blank" class="project-link">
                        View Repository <i class="fas fa-arrow-right"></i>
                    </a>
                `;
                
                container.appendChild(projectCard);
            }
        });
    } catch (error) {
        console.error("Error loading GitHub projects:", error);
        container.innerHTML = '<p class="error">Failed to load projects. Please visit my GitHub profile directly.</p>';
    }
}

// Execute when page loads
document.addEventListener('DOMContentLoaded', fetchGitHubProjects);