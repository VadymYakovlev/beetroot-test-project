const DOMList = document.getElementById('js-list');
const playlist = [
  {
    author: 'LED ZEPPELIN',
    song: 'STAIRWAY TO HEAVEN',
  },
  {
    author: 'QUEEN',
    song: 'BOHEMIAN RHAPSODY',
  },
  {
    author: 'LYNYRD SKYNYRD',
    song: 'FREE BIRD',
  },
  {
    author: 'DEEP PURPLE',
    song: 'SMOKE ON THE WATER',
  },
  {
    author: 'JIMI HENDRIX',
    song: 'ALL ALONG THE WATCHTOWER',
  },
  {
    author: 'AC/DC',
    song: 'BACK IN BLACK',
  },
  {
    author: 'QUEEN',
    song: 'WE WILL ROCK YOU',
  },
  {
    author: 'METALLICA',
    song: 'ENTER SANDMAN',
  },
];

if (DOMList) {
  const addItemToList = (author, song) => {
    const li = document.createElement('li');
    li.classList.add('list-item');
    const span = document.createElement('span');
    span.innerText = `author: ${author}, song: ${song}`;
    li.appendChild(span);
    DOMList.appendChild(li);
    DOMList.style.color = 'green';
    li.style.fontFamily = 'Best Rock';
    li.style.fontSize = '18px';
    li.style.padding = '12px';
  };

  playlist.forEach((item) => addItemToList(item.author, item.song));
}
