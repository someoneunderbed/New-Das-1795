const arra = [
  {
    page_title: "Licenses",
    plans: [
      {
        name: "Free",
        active: true,
        slug: "free_license",
      },
      {
        name: "Pro",
        active: false,
        slug: "pro_license",
      },
      {
        name: "VIP",
        active: false,
        slug: "vip_license",
      },
    ],
    tabs: [
      {
        title: "Subscription",
        data: {},
      },
      {
        title: "Outright",
        data: {},
      },
      {
        title: "Offline Activation",
        data: {
          systems: [
            {
              system_name: "James-Main-Mackbook",
              id: 91520,
              created_date: "01 Jan 2019",
              active_licenses: 2,
            },
            {
              system_name: "James-Laptop",
              id: 91518,
              created_date: "15 Jan 2020",
              active_licenses: 1,
            },
          ],
          subsystems: [
            {
              system_id: 91520,
              licenses: "Lightworks Pro",
              expires: "Never",
              cost: "30.00",
            },
            {
              system_id: 91520,
              licenses: "QScan Max",
              expires: "29 Aug 2021",
              cost: "26.00",
            },
            {
              system_id: 91518,
              licenses: "Lightworks Pro",
              expires: "Never",
              cost: "30.00",
            },
            {
              system_id: 91518,
              licenses: "QScan Max",
              expires: "29 Jul 2021",
              cost: "78.00",
            },
          ],
        },
      },
    ],
  },
];

// Selectors
let plansImg = document.querySelector(".plans-div");
let blck = document.querySelector(".txt-block");
let txt = document.querySelector(".logo-txt");
let nameZ = document.querySelector(".two-divs");

// First Div
let btn1 = document.createElement("button");
let btnA = document.createElement("button");
// Second Div
let btn2 = document.createElement("button");
let btnB = document.createElement("button");

arra.map((elem) => {
  // console.log(elem);
  let tabs = elem.tabs;
  // console.log(tabs);
  blck.innerHTML = `<h1 class="three-txt">${tabs[0].title}</h1> <h1 class="three-txt">${tabs[1].title}</h1> <h1 class="three-txt">${tabs[2].title}</h1>`;
  let a = elem.plans;
  console.log(a, "asjkdsakdsjad");
  txt.innerHTML = `<h1>${elem.page_title} </h1>`;
  let block1 = document.createElement("div");
  block1.setAttribute("class", "img-div");
  block1.innerHTML = `<h1>${a[0].name}</h1> <h1>${a[1].name}</h1> <h1>${a[2].name}</h1> `;
  plansImg.prepend(block1);

  let b = elem.tabs;
  console.log(b, "546868");
  let sys = b[2].data.systems;
  console.log(sys);

  //First Div
  btn1.setAttribute("class", "btn-col");
  btn1.innerHTML = "Add License";
  //Remove BTN
  btnA.setAttribute("class", "btn-col-1");
  btnA.innerHTML = "Remove";
  //Add License BTN
  let block2 = document.createElement("div");
  block2.setAttribute("class", "names-div-1");
  block2.innerHTML = `<img src="./icons/polygon.png" /> <p style = width:250px;>${sys[0].system_name}</p> <p>${sys[0].id}</p> <p>${sys[0].created_date}</p> <p>${sys[0].active_licenses}</p>`;
  nameZ.append(block2);
  block2.append(btn1);
  block2.append(btnA);

  //Second Div
  btn2.setAttribute("class", "btn-col");
  btn2.innerHTML = "Add License";
  //Remove BTN
  btnB.setAttribute("class", "btn-col-1");
  btnB.innerHTML = "Remove";
  //Add License BTN
  let block3 = document.createElement("div");
  block3.setAttribute("class", "names-div-2");
  block3.innerHTML = `<img src="./icons/polygon.png" /> <p style = width:250px;>${sys[1].system_name}</p> <p>${sys[1].id}</p> <p>${sys[1].created_date}</p> <p>${sys[1].active_licenses}</p>`;
  nameZ.append(block3);
  block3.append(btn2);
  block3.append(btnB);
  // Something New
  btn1.addEventListener("click", () => {
    let blos = document.createElement("div");
    blos.classList.add("names-div");
    // block2.append(blos); /// Olmuyoooor
  });
});
