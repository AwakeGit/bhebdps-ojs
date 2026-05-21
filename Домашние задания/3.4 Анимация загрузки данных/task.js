const loader = document.getElementById('loader');
const items = document.getElementById('items');

function createCurrencyItem(currency) {
  const item = document.createElement('div');
  item.classList.add('item');

  const code = document.createElement('div');
  code.classList.add('item__code');
  code.textContent = currency.CharCode;

  const value = document.createElement('div');
  value.classList.add('item__value');
  value.textContent = currency.Value;

  const symbol = document.createElement('div');
  symbol.classList.add('item__currency');
  symbol.textContent = 'руб.';

  item.appendChild(code);
  item.appendChild(value);
  item.appendChild(symbol);

  return item;
}

fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const valute = data.response.Valute;
    items.innerHTML = '';

    Object.values(valute).forEach(function (currency) {
      items.appendChild(createCurrencyItem(currency));
    });

    loader.classList.remove('loader_active');
  });
