document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.how__link').forEach(function(tabs) {
    tabs.addEventListener('click', function(event) {
      document.querySelectorAll('.how__link').forEach(function(x) {
        x.classList.remove('active');
      })
      event.currentTarget.classList.add('active');
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.how__content').forEach(function(content) {
        content.classList.remove('how__content_active');
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('how__content_active');
    })
  })
  document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('.burger__result').classList.add('burger__result-active')
  })
  document.querySelector('.burger-result__buttom').addEventListener('click', function() {
    document.querySelector('.burger__result').classList.remove('burger__result-active')
  })
})
