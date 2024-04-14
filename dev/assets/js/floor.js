const flatArray = [{
    id: 0,
    house: '7',
    floor: '2',
    flatNumber: '1',
    rooms: '3',
    square: '79,3',
    price: '1900$',
    priceTotal: '150670$',
    status: 'sold'
},
{
    id: 1,
    house: '7',
    floor: '2',
    flatNumber: '2',
    rooms: '2',
    square: '60,7',
    price: '700$',
    priceTotal: '42000$',
    status: 'sold'
},
{
    id: 2,
    house: '7',
    floor: '1',
    flatNumber: '3',
    rooms: '3',
    square: '60,7',
    price: '700$',
    priceTotal: '42000$',
    status: 'free',
},
{
    id: 3,
    house: '7',
    floor: '2',
    flatNumber: '4',
    rooms: '3',
    square: '82',
    price: "700$",
    priceTotal: '2500',
    status:'action'
},
{
    id: 4,
    house: '7',
    floor: '2',
    flatNumber: '5',
    rooms: '3',
    square: '79.7',
    price: '700$',
    priceTotal: '55790$',
    status: 'action'
},
{
    id: 5,
    house: '7',
    floor: '2',
    flatNumber: '6',
    rooms: '1',
    square: '39.2',
    price: '700$',
    priceTotal: '27440$',
    status: 'bookin'
},
{
    id: 6,
    house: '7',
    floor: '2',
    flatNumber: '7',
    rooms: '1',
    square: '40.0',
    price: '700$',
    priceTotal: '29400$',
    status: 'sold'
},
{
    id: 7,
    house: '7',
    floor: '2',
    flatNumber: '8',
    rooms: '1',
    square: '39.2',
    price: '700$',
    priceTotal: '27440$',
    status: 'free'
},
{
    id: 8,
    house: '7',
    floor: '2',
    flatNumber: '9',
    rooms: '3',
    square: '79.3',
    price: '900$',
    priceTotal: '55510$',
    status: 'action',
}]



function installFloor () {
    const flats = document.querySelectorAll('.flat');
    const floorInfo = document.querySelector('.floor-options')


    const removeActiveClass = () => {
        flats.forEach(flat => {
            flat.classList.remove('active');
        })
    }
    flats.forEach(flat => {
        flat.addEventListener('click',() => {
            removeActiveClass();
            flat.classList.add('active');

            const thisFlat = flat.getAttribute('data-flat-number');
            console.log(thisFlat);
        })
    })
 }
document.querySelector('.floor-item-page') ? installFloor() : null;
