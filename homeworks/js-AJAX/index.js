const searchPostOffices = async (settlement) => {
  const url = 'https://api.novaposhta.ua/v2.0/json/';
  const data = {
    apiKey: '0c5fa22ede2ce6d35f881110687dd24f',
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: {
      TypeOfWarehouseRef: '',
      CityName: settlement,
    },
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    if (responseData.success && responseData.data.length > 0) {
      displayResults(responseData.data);
    } else {
      displayError();
    }
  } catch (error) {
    displayError();
  }
};

const displayResults = (postOffices) => {
  const resultsList = document.getElementById('results');
  resultsList.innerHTML = '';

  postOffices.forEach((postOffice) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${postOffice.Description}, ${postOffice.Number}`;
    resultsList.appendChild(listItem);
  });
};

const displayError = () => {
  const resultsList = document.getElementById('results');
  resultsList.innerHTML =
    'Не знайдено жодного відділення за даною назвою населеного пункту';
};

const Submit = (event) => {
  event.preventDefault();
  const settlement = document.getElementById('settlement-input').value.trim();
  if (settlement === '') {
    alert('Введіть будь-ласка назву населеного  пункту');
    return;
  }
  searchPostOffices(settlement);
};

const searchCityByLink = (city, cityName) => {
  document.getElementById(`${city}-link`).addEventListener('click', (event) => {
    event.preventDefault();
    searchPostOffices(cityName);
  });
};

searchCityByLink('kiyv', 'Київ');
searchCityByLink('kharkiv', 'Харків');
searchCityByLink('odesa', 'Одеса');
searchCityByLink('lviv', 'Львів');
searchCityByLink('franik', 'Івано-Франківськ');

document.getElementById('search-form').addEventListener('submit', Submit);
