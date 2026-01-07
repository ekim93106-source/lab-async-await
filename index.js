// Get the ul element
const postList = document.getElementById("post-list");

// Display posts
function displayPosts(posts) {
  posts.forEach(post => {
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    h1.textContent = post.title;
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  });
}

// Fetch posts using async/await
async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  // Required for Task 3 (console testing)
  console.log("Fetched posts:", data);

  displayPosts(data);
}

// Run the function
fetchPosts();