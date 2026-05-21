// Matteria Technologies — shared site JS
(function () {
  function onScroll() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var st = window.scrollY || doc.scrollTop || 0;
    var el = document.getElementById('scrollProgress');
    if (el) el.style.width = (max > 0 ? (st / max) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
