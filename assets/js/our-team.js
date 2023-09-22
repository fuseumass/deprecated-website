// name and position data copy and pasted from Google Spreadsheet roster
const names = `Vivienne Tam
Jasmine Cai
Anushree Patil
Samridh Tuteja
Ruchi Gupta
Annette Sebastian
Khiem Nguyen
Meenakshi Iyer
Poul Holm
Douglas Tran
Adi Nelson
Jessie Wang
Monil Bhavsar
Kavya Manchanda
Yav Rohatgi
Ben Burns
Jason Dullaghan
Anisha Prathi
Dev Mehta
Manya Phutela
Isaac Heitmann
Vianca Varma
Ian Anderson
Zeina Zahoori
Swetha Eppalapally
Anika Badkul
Renee Tsang
Yuni Jeong
Addie Padhi
Shiven Patel
Simran Lekhwani`;

const positions = `Co-Director & Sponsorship Director
Co-Director
Hardware Co-Director
Hardware Director
Logistics Director
PR/Design Director
Technology Director
Technology Assistant Director
Hardware Member
Hardware Member
Hardware Member
Hardware Member
Hardware Member
Hardware Member
Hardware Member
Logistics Member
Logistics Member
Logistics Member
Logistics Member
Logistics Member
Logistics Member
PR/Design Member
PR/Design Member
Sponsorship Member
Sponsorship Member
Sponsorship Member
Sponsorship Member
Technology Member
Technology Member
Technology Member
Technology Member`;

const namesArr = names.split('\n');
const positionsArr = positions.split('\n');

/**
 * Each person needs name, title, and path to image
 * image title: [Firstname]-[Lastname].jpg
 *
 * Display order: (Co)Directors and Team Directors, Members. Team sorted by A-Z
 *
 */

const membersArr = namesArr.map((n, i) => {
  const [firstName, lastName] = n.split(' ');
  return {
    name: n,
    position: positionsArr[i],
    image: `assets/img/team/${firstName}-${lastName}.jpg`,
  };
});

const teamContainerElement = document.getElementById('team-container');

const makeRowDivElement = () => {
  const rowDivElement = document.createElement('div');
  rowDivElement.classList.add(
    'row',
    'gap-y',
    'justify-content-center',
    'align-items-center',
  );
  return rowDivElement;
};

const makeColDivElement = (memberObj) => {
  const colDivElement = document.createElement('div');
  colDivElement.classList.add(
    'col-lg-3',
    'col-md-6',
    'col-sm-12',
    'text-center',
  );
  colDivElement.innerHTML = `
      <img class="rounded-circle shadow-2 img-border object-fit-cover" src="${memberObj.image}"
        alt="${memberObj.name}" />
      <h5 class="primary-color">${memberObj.name}</h5>
      <h6 class="team-role">${memberObj.position}</h6>
  `;
  return colDivElement;
};

// change each semester
const NUM_DIRECTORS = 2;
const NUM_TEAM_DIRECTORS = 6;
// 3 groups: directors, team directors, members
const membersRows = [
  makeRowDivElement(),
  makeRowDivElement(),
  makeRowDivElement(),
];

membersArr.forEach((member, i) => {
  if (i < NUM_DIRECTORS) {
    // populate directors row
    membersRows[0].appendChild(makeColDivElement(member));
  } else if (i < NUM_DIRECTORS + NUM_TEAM_DIRECTORS) {
    // populate team directors row
    membersRows[1].appendChild(makeColDivElement(member));
  } else {
    // populate members row
    membersRows[2].appendChild(makeColDivElement(member));
  }
});

// append each row into team section
membersRows.forEach((r) => teamContainerElement.appendChild(r));
