/* Copy from Organizers Team Roster (google sheet) */

const directorsNames = `Vivienne Tam
Jasmine Cai`;

const directorRoles = `Co-Director
Co-Director`;

const hardwareNames = `Samridh Tuteja
Anushree Patil
Poul Holm
Douglas Tran
Adi Nelson
Jessie Wang
Monil Bhavsar
Kavya Manchanda
Yav Rohatgi`;

const hardwareRoles = `Hardware Director
Hardware Co-Director
Hardware Member
Hardware Member
Hardware Member
Hardware Member
Hardware Member
Hardware Member
Hardware Member`;

const logisticsNames = `Ruchi Gupta
Ben Burns
Jason Dullaghan
Dev Mehta
Manya Phutela
Isaac Heitmann`;

const logisticsRoles = `Logistics Director
Logistics Member
Logistics Member
Logistics Member
Logistics Member
Logistics Member`;

const prdesignNames = `Annette Sebastian
Vianca Varma
Ian Anderson`;
const prdesignRoles = `PR/Design Director
PR/Design Member
PR/Design Member`;

const sponsorshipNames = `Vivienne Tam
Zeina Zahoori
Swetha Eppalapally
Anika Badkul
Renee Tsang`;

const sponsorshipRoles = `Sponsorship Director
Sponsorship Member
Sponsorship Member
Sponsorship Member
Sponsorship Member`;

const technologyNames = `Khiem Nguyen
Meenakshi Iyer
Yuni Jeong
Addie Padhi
Shiven Patel
Simran Lekhwani`;

const technologyRoles = `Technology Director
Technology Assistant Director
Technology Member
Technology Member
Technology Member
Technology Member`;

/* Get tab objects */
const directorsTab = document.getElementById('nav-directors');
const hardwareTab = document.getElementById('nav-hardware');
const logisticsTab = document.getElementById('nav-logistics');
const prdesignTab = document.getElementById('nav-prdesign');
const sponsorshipTab = document.getElementById('nav-sponsorship');
const technologyTab = document.getElementById('nav-technology');

const tabs = [
  directorsTab,
  hardwareTab,
  logisticsTab,
  prdesignTab,
  sponsorshipTab,
  technologyTab,
];

const createSplitArr = (arr) => arr.split('\n');

const createTeamArr = (namesArr, rolesArr) => {
  return namesArr.map((n, i) => {
    const [firstName, lastName] = n.split(' ');
    return {
      name: n,
      role: rolesArr[i],
      image: `assets/img/team/${firstName}-${lastName}.jpg`,
    };
  });
};

const makeRowDivElement = () => {
  const rowDivElement = document.createElement('div');
  rowDivElement.classList.add(
    'row',
    'gap-y',
    'justify-content-center',
    'align-items-center',
    'mt-3',
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
        <h6 class="team-role">${memberObj.role}</h6>
    `;
  return colDivElement;
};

const directorsTeam = createTeamArr(
  createSplitArr(directorsNames),
  createSplitArr(directorRoles),
);
const hardwareTeam = createTeamArr(
  createSplitArr(hardwareNames),
  createSplitArr(hardwareRoles),
);
const logisticsTeam = createTeamArr(
  createSplitArr(logisticsNames),
  createSplitArr(logisticsRoles),
);
const prdesignTeam = createTeamArr(
  createSplitArr(prdesignNames),
  createSplitArr(prdesignRoles),
);
const sponsorshipTeam = createTeamArr(
  createSplitArr(sponsorshipNames),
  createSplitArr(sponsorshipRoles),
);
const technologyTeam = createTeamArr(
  createSplitArr(technologyNames),
  createSplitArr(technologyRoles),
);

const teams = [
  directorsTeam,
  hardwareTeam,
  logisticsTeam,
  prdesignTeam,
  sponsorshipTeam,
  technologyTeam,
];

teams.forEach((team, i) => {
  const row = makeRowDivElement();
  team.forEach((memberObj) => {
    row.appendChild(makeColDivElement(memberObj));
  });
  tabs[i].appendChild(row);
});
