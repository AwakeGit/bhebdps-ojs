const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();

  xhr.upload.addEventListener('progress', function (event) {
    if (event.lengthComputable) {
      progress.value = event.loaded / event.total;
    }
  });

  xhr.open('POST', form.action);
  xhr.send(formData);
});