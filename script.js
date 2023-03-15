'use strict'

const main = () => {
  const aspects = [
    'שירות מקצועי',
    'מחיר ממוצע',
    'מקצועיות הצוות',
    'זמינות בעל העסק',
    'התרשמות כללית',
  ]

  const elAspectList = document.querySelector('.aspects')
  aspects.forEach((aspect) => {
    elAspectList.innerHTML += `
    <li class="aspect">
      <h3>${aspect}</h3>
      <div class="stars">
        <button class="star" type="button">1</button>
        <button class="star" type="button">2</button>
        <button class="star" type="button">3</button>
        <button class="star" type="button">4</button>
        <button class="star" type="button">5</button>
      </div>
    </li>`
  })

  const elAspects = document.querySelectorAll('.aspect')

  elAspects.forEach((aspect) => {
    const elStars = aspect.querySelectorAll('.star')

    elStars.forEach((star, i) => {
      star.onclick = () => {
        elStars.forEach((star, j) => {
          if (j <= i) {
            star.style.backgroundImage = "url('./assets/star-full.svg')"
            star.setAttribute('selected', true)
          } else {
            star.style.backgroundImage = "url('./assets/star-empty.svg')"
            star.removeAttribute('selected')
          }
        })
      }

      star.onmouseover = () => {
        elStars.forEach((star, j) => {
          if (j <= i)
            star.style.backgroundImage = "url('./assets/star-full.svg')"
        })
      }

      star.onmouseleave = () => {
        elStars.forEach((star, j) => {
          if (!star.hasAttribute('selected'))
            star.style.backgroundImage = "url('./assets/star-empty.svg')"
        })
      }
    })
  })
}
