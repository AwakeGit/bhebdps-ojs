const links = Array.from(document.querySelectorAll('.has-tooltip'));
let currentTooltip = null;
let currentLink = null;

function hideTooltip() {
  if (currentTooltip) {
    document.body.removeChild(currentTooltip);
    currentTooltip = null;
    currentLink = null;
  }
}

function showTooltip(link) {
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip', 'tooltip_active');
  tooltip.textContent = link.getAttribute('title');

  const rect = link.getBoundingClientRect();
  tooltip.style.left = (rect.left + window.scrollX) + 'px';
  tooltip.style.top = (rect.bottom + window.scrollY) + 'px';

  document.body.appendChild(tooltip);
  currentTooltip = tooltip;
  currentLink = link;
}

links.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    if (currentLink === link) {
      hideTooltip();
      return;
    }

    hideTooltip();
    showTooltip(link);
  });
});

document.addEventListener('click', function (event) {
  if (!event.target.classList.contains('has-tooltip') && currentTooltip) {
    hideTooltip();
  }
});
