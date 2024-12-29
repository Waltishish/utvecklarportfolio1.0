const username = "Waltishish";
    const projectsContainer = document.getElementById("projects-container");

    async function fetchProjects() {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);

        if (response.ok) {
            const repos = await response.json();
            renderProjects(repos);
        } else {
            console.error("Kunde inte hämta projekt", response.status);
            const errorMessage = document.createElement("p");
            errorMessage.textContent = "Kunde inte hämta projekt från GitHub.";
            projectsContainer.appendChild(errorMessage);
        }
    }

    function renderProjects(repos) {
        repos.forEach(repo => {
            const card = document.createElement("div");
            card.className = "col";
            card.innerHTML = `
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${repo.name}</h5>
                        <p class="card-text">${repo.description || "Ingen beskrivning."}</p>
                    </div>
                    <div class="card-footer text-center">
                        <a href="${repo.html_url}" target="_blank" class="btn btn-primary">Visa</a>
                    </div>
                </div>
            `;
            projectsContainer.appendChild(card);
        });
    }

    
fetchProjects();