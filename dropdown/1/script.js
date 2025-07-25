function toggler(_el) {
  if (_el == document.body) return null
  if (_el.classList.contains('toggler')) return _el;
  return toggler(_el.parentNode)
}

addEventListener('click', e => {
  let _t = toggler(e.target);

  if (_t && !_t.hasAttribute('disabled')) {
    // get target menu element and bit (0 or 1) value of whether expanded
    let _m = document.getElementById(_t.getAttribute('aria-controls')),
      b = 1 * (_t.getAttribute('aria-expanded') === 'true');

    // toggle aria-expanded attribute on button & inert attribute on menu
    _t.setAttribute('aria-expanded', !b);
    _m[`${['remove', 'set'][b]}Attribute`](...['inert', true].slice(0, b + 1))
  }
})