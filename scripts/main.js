import barba from '@barba/core'
import barbaCss from '@barba/css'

barba.use(barbaCss)

const bodyTag = document.querySelector('body')

barba.init({
  views: [
    {
      namespace: 'work',
      beforeEnter() {
        bodyTag.classList.add('work')
      },
      beforeLeave() {
        bodyTag.classList.remove('work')
      },
    },
    {
      namespace: 'contact',
      beforeEnter() {
        bodyTag.classList.add('contact')
      },
      beforeLeave() {
        bodyTag.classList.remove('contact')
      },
    },
  ],
})
