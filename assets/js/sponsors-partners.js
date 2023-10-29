// these names should match the image title
const sponsors = [
  'UMass-Engineering',
  'UMass-Manning-CICS',
  'UMass-Berthiaume-Center',
  'MITRE',
  'KPMG',
];
const sponsorsLinks = [
  'https://engineering.umass.edu/',
  'https://www.cics.umass.edu/',
  'https://www.isenberg.umass.edu/centers/berthiaume-center-for-entrepreneurship',
  'https://www.mitre.org/',
  'https://kpmg.com/xx/en/home.html',
];
// these names should match the image title
const partners = [
  'Wolfram-Alpha',
  'echo3d',
  'Google-Cloud',
  'Insomnia-Cookies',
  'M5',
  'Major-League-Hacking',
  'Standout-Stickers',
  'Silver-Screen-Design',
];
const partnersLinks = [
  'https://www.wolfram.com/',
  'https://www.echo3d.com/',
  'https://cloud.google.com/',
  'https://insomniacookies.com/',
  'https://www.umassamherstm5.org/',
  'https://mlh.io/',
  'http://hackp.ac/mlh-StandOutStickers-hackathons',
  'https://www.silverscreendesign.com/',
];

const makeCompanyRow = () => {
  const rowDivElement = document.createElement('div');
  rowDivElement.classList.add(
    'row',
    'gap-y',
    'justify-content-center',
    'align-items-center',
  );
  return rowDivElement;
};

const makeCompanyCol = (name, link, relation) => {
  const colDivElement = document.createElement('div');
  colDivElement.classList.add('col', 'col-6', 'm-2');
  colDivElement.style.width = '100%';
  colDivElement.style.maxWidth = '15rem';

  colDivElement.innerHTML = `
        <a target="_blank" href="${link}">
          <img src="assets/img/${relation}/hackumass-xi/${name}.png" alt="${name}" title="${name}"/>
        </a>`;
  return colDivElement;
};

const sponsorsContainer = document.getElementById('sponsors-container');
sponsorsContainer.style.maxWidth = '70%';
sponsorsContainer.style.margin = 'auto';
const partnersContainer = document.getElementById('partners-container');
partnersContainer.style.maxWidth = '70%';
partnersContainer.style.margin = 'auto';

const sponsorsRow = makeCompanyRow();
const partnersRow = makeCompanyRow();

sponsors.forEach((name, i) => {
  sponsorsRow.appendChild(makeCompanyCol(name, sponsorsLinks[i], 'sponsors'));
});
partners.forEach((name, i) => {
  partnersRow.appendChild(makeCompanyCol(name, partnersLinks[i], 'partners'));
});

sponsorsContainer.appendChild(sponsorsRow);
partnersContainer.appendChild(partnersRow);
