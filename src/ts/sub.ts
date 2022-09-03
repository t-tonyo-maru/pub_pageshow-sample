import $ from 'jquery'
import 'jquery.cookie'

$(() => {
  // cookie hoge をセット
  $.cookie('hoge', 'updated_hoge_content', {
    domain: window.location.hostname,
    path: '/'
  })
  // cookie を表示
  $('.js-show-cookie').text(`${$.cookie('hoge')}`)

  setTimeout(() => {
    window.history.back()
  }, 10 * 1000)
})
