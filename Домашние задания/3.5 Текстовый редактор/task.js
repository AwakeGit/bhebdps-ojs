const editor = document.getElementById('editor');
const storageKey = 'editor-content';

editor.value = localStorage.getItem(storageKey) || '';

editor.addEventListener('input', function () {
  localStorage.setItem(storageKey, editor.value);
});