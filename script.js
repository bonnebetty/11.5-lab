document.querySelectorAll('.fact-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const fact = document.getElementById(button.getAttribute('aria-controls'));
    if (!fact) return;
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    fact.hidden = expanded;
    button.replaceChildren(document.createTextNode(expanded ? 'Show fun fact ' : 'Hide fun fact '));
    const icon = document.createElement('span');
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = expanded ? '＋' : '−';
    button.append(icon);
  });
});
