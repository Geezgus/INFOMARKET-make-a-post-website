function createPostComponent({ title, content, author, createdAt }) {
  const article = document.createElement('article')

  article.className = 'flex flex-col gap-2 w-full max-w-xl p-2 bg-white rounded'
  article.innerHTML = `
    <h2 class="break-words text-lg font-semibold">${title}</h2>
    <p class="text-sm">${content}</p>
    <span class="text-xs">Post made by ${author} at ${new Date(createdAt).toLocaleDateString()}</span>
  `

  return article
}

async function loadPosts() {
  const main = document.querySelector('main')
  const API_URL = 'https://makeapost-api.onrender.com/posts/'

  const posts = await (await fetch(API_URL)).json()

  main.append(...posts?.map((post) => createPostComponent(post)))
}

loadPosts()
