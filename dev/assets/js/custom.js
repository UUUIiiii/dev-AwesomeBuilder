const planItem = document.querySelectorAll(".item-path");  
const cellAdress = document.getElementById('adress');
const cellFloors = document.getElementById('floors');
const cellFreeFlats = document.getElementById('freeFlats');
const cellSoldFlats = document.getElementById('soldFlats');
const cellActionFlats = document.getElementById('actionFlats');


const showInformation = (cell, dataAttr) => { planItem.forEach(building => {
    building.addEventListener("mouseover", () => {
        cell.innerText =  building.getAttribute(dataAttr);
    })

    const buildFreeFlats = building.getAttribute('data-free-flats');

    buildFreeFlats === '0' ? building.classList.add('sold') : null;

    if(building.classList.contains('sold')){
        const buildingLing = building.closest('.item-link');

        building.addEventListener('click', (event) => {
            event.preventDefault();
        })
    }

       
  })
}

showInformation(cellAdress , "data-adress");
showInformation(cellFloors , "data-floors");
showInformation(cellFreeFlats , "data-free-flats");


if(document.querySelector(".build-item-page")){
    showInformation(cellSoldFlats , "data-sold-flats");
    showInformation(cellActionFlats , "data-action-flats");
}