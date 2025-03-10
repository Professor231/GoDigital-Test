const blogContainer = document.getElementById("blog-posts");

client.getEntries()
    .then((response) => {
        response.items.forEach((item) => {
            const title = item.fields.title;
            const body = item.fields.body; // Assuming it's plain text

            const postElement = document.createElement("div");
            postElement.classList.add("blog-post");
            postElement.innerHTML = `
                <h2>${title}</h2>
                <p>${body}</p>
            `;

            blogContainer.appendChild(postElement);
        });
    })
    .catch((error) => console.error("Error fetching content:", error));
