// name and position data copy and pasted from Google Spreadsheet roster
const names = `Vivienne Tam
Jasmine Cai
Anushree Patil
Samridh Tuteja
Ruchi Gupta
Annette Sebastian
Meenakshi Iyer
Khiem Nguyen
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
Technology Assistant Director
Technology Director
Hardware
Hardware
Hardware
Hardware
Hardware
Hardware
Hardware
Logistics
Logistics
Logistics
Logistics
Logistics
Logistics
PR/Design
PR/Design
Sponsorship
Sponsorship
Sponsorship
Sponsorship
Technology
Technology
Technology
Technology`;

const nameArr = names.split('\n');
const posArr = positions.split('\n');

const namePosArr = [];
for (let i = 0; i < nameArr.length; i++) {
  namePosArr.push({ [nameArr[i]]: posArr[i] });
}

const test = document.querySelector;

/**
 * Each person needs name, title, and path to image
 * image title: [Firstname]_[Lastname].jpg
 *
 */
const sectionTemplate = `
<div class="row gap-y justify-content-center align-items-center">
  <div class="col-lg-3 col-md-6 col-sm-12 text-center">
    <img class="rounded-circle shadow-2 img-border object-fit-cover" src="assets/img/team/raymond_li.jpg"
      alt="Raymond Li" />
    <h5 class="primary-color">Raymond Li</h5>
    <h6 class="team-role">Co-Director, Logistics/Sponsorship</h6>
  </div>
  <div class="col-lg-3 col-md-6 col-sm-12 text-center">
    <img class="rounded-circle shadow-2 img-border object-fit-cover" src="assets/img/team/vivienne_tam.jpg"
      alt="Vivienne Tam" />
    <h5 class="primary-color">Vivienne Tam</h5>
    <h6 class="team-role">Co-Director, Logistics/Sponsorship</h6>
  </div>
  <div class="col-lg-3 col-md-6 col-sm-12 text-center">
    <img class="rounded-circle shadow-2 img-border object-fit-cover" src="assets/img/team/annette_sebastian.jpg"
      alt="Annette Sebastian" />
    <h5 class="primary-color">Annette Sebastian</h5>
    <h6 class="team-role">Director, Public Relations/Design</h6>
  </div>
  <div class="col-lg-3 col-md-6 col-sm-12 text-center">
    <img class="rounded-circle shadow-2 img-border object-fit-cover" src="assets/img/team/varsha_jawahar.jpg"
      alt="Varsha Jawahar" />
    <h5 class="primary-color">Varsha Jawahar</h5>
    <h6 class="team-role">Director, Technology</h6>
  </div>
  <div class="col-lg-3 col-md-6 col-sm-12 text-center">
    <img class="rounded-circle shadow-2 img-border object-fit-cover" src="assets/img/team/akshat_sahay.jpg"
      alt="Akshat Sahay" />
    <h5 class="primary-color">Akshat Sahay</h5>
    <h6 class="team-role">Director, Hardware</h6>
  </div>
  <div class="col-lg-3 col-md-6 col-sm-12 text-center">
    <img class="rounded-circle shadow-2 img-border object-fit-cover" src="assets/img/team/samridh_tuteja.jpg"
      alt="Samridh Tuteja" />
    <h5 class="primary-color">Samridh Tuteja</h5>
    <h6 class="team-role">Assistant Director, Hardware</h6>
  </div>
  <div class="col-lg-3 col-md-6 col-sm-12 text-center">
    <img class="rounded-circle shadow-2 img-border object-fit-cover" src="assets/img/team/anush_rathod.jpg"
      alt="Anush Rathod" />
    <h5 class="primary-color">Anush Rathod</h5>
    <h6 class="team-role">Assistant Director, Hardware</h6>
  </div>
</div>
`;

console.log(namePosArr);
