const containerEl = document.querySelector('.container')

const fetchData = async () => {
  try {
    const req = await fetch('https://api.chucknorris.io/jokes/random')
    if (!req.ok) {
      throw new Error("It's not possible to load data")
    }

    return await req.json()
  } catch (error) {
    console.error(error)
  }
}

const insertDataIntoDom = (data) => {
  const currentYear = new Date().getFullYear()

  const { id, value } = data

  containerEl.innerHTML = `
    <section class="card">
      <div class="card__controllers">
        <button class="card__button" onclick="location.reload()" title="reload the page">
          <img src="assets/reload.svg" alt="Reload Icon" />
        </button>
      </div>
        
      <span class="card__id">ID: ${id}</span>
      <p class="card__joke">${value} — Chuck Norris.</p>
      <p class="card__footer"> ${currentYear} — created by
        <a
        href="https://github.com/paulopbi/"
        target="_blank"
        class="card__link">Paulo Victor</a>.
      </p>
    </section>
  `
}

const init = async () => {
  const data = await fetchData()
  insertDataIntoDom(data)
}

document.addEventListener('DOMContentLoaded', init)
