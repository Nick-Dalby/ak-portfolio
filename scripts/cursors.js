const cursorTag = document.querySelector('div.cursors')
const balls = cursorTag.querySelectorAll('div')

let aimX = 0
let aimY = 0

balls.forEach((ball, index) => {
  let currentX = 0
  let currentY = 0
  let speed = 0.3 - index * 0.015

  const animate = () => {
    currentX += (aimX - currentX) * speed
    currentY += (aimY - currentY) * speed

    ball.style.left = currentX + 'px'
    ball.style.top = currentY + 'px'
    requestAnimationFrame(animate)
  }

  animate()
})

document.addEventListener('mousemove', (e) => {
  aimX = e.pageX
  aimY = e.pageY
})
