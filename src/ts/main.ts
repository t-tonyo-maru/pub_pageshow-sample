import $ from 'jquery'
import 'jquery.cookie'

$(() => {
  // cookie hoge をセット
  $.cookie('hoge', 'hoge content', {
    domain: window.location.hostname,
    path: '/'
  })
  // cookie を表示
  $('.js-show-cookie').text(`${$.cookie('hoge')}`)
})
