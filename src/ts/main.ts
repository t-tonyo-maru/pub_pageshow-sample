import $ from 'jquery'
import 'jquery.cookie'

$(() => {
  $('.js-button').on('click', () => {
    // cookie hoge をセット
    $.cookie('hoge', 'hoge_content', {
      domain: window.location.hostname,
      path: '/'
    })
  })
  // cookie を表示
  const cookieHoge = $.cookie('hoge') ? $.cookie('hoge') : ''
  $('.js-show-cookie').text(`${cookieHoge}`)
})

window.addEventListener('pageshow', () => {
  const cookieHoge = $.cookie('hoge') ? $.cookie('hoge') : ''
  console.log('cookie: hoge', cookieHoge)
})
