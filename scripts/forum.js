// Sample data structure for posts
let posts = [
  {
    title: "Quero ficar rico, mas sou um pobre fodido.",
    content: "Alguém tem alguma ideia do que posso fazer?",
    comments: [
      "Se fodeu. Quem sabe na próxima vida?",
      "Você pode se inscrever no meu curso de trading de bitcoins. Clique aqui.",
    ],
  },
  {
    title: "Sou rico, mas sou um bosta.",
    content: "Alguém sabe como sair dessa?",
    comments: ["Comment 1", "Comment 2"],
  },
  // More posts...
];

// Check if there are posts in local storage
if (localStorage.getItem("posts")) {
  posts = JSON.parse(localStorage.getItem("posts"));
} else {
  // If not, use the sample data and save it to local storage
  localStorage.setItem("posts", JSON.stringify(posts));
}

// Function to create a post element
function createPostElement(post) {
  const postElement = document.createElement("div");
  postElement.classList.add("card", "my-4");

  postElement.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.content}</p>
                    <button class="btn btn-primary darker-gray" onclick="viewComments('${post.title}')">View Comments</button>
                </div>
            `;

  return postElement;
}

// Function to view comments
function viewComments(postTitle) {
  // Find the post by title
  const post = posts.find((p) => p.title === postTitle);

  // If the post exists, display its comments
  if (post) {
    alert(post.comments.join("\n"));
  }
}

// Get the post list element
const postList = document.getElementById("postList");

// Create and append post elements
for (const post of posts) {
  postList.appendChild(createPostElement(post));
}
