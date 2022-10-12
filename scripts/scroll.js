const h1 = document.querySelector('h1 a')

window.addEventListener('scroll', (e) => {
  const pixels = window.scrollY

  const fontWeight = pixels * 0.4 + 100
  const fontWidth = pixels * 0.1 + 100

  h1.style.fontVariationSettings = `'wght' ${fontWeight}, 'wdth' ${fontWidth}`
})
