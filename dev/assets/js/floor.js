const flatArray = [{
    id: 0,
    house: '7',
    floor: '2',
    flatNumber: 1,
    rooms: '3',
    square: '79,3',
    price: '1900$',
    priceTotal: '150670$',
    status: 'продана'
},
{
    id: 1,
    house: '7',
    floor: '2',
    flatNumber: 2,
    rooms: '2',
    square: '60,7',
    price: '700$',
    priceTotal: '42000$',
    status: 'продана'
},
{
    id: 2,
    house: '7',
    floor: '2',
    flatNumber: 3,
    rooms: '3',
    square: '60,7',
    price: '700$',
    priceTotal: '42000$',
    status: 'вільна',
},
{
    id: 3,
    house: '7',
    floor: '2',
    flatNumber: 4,
    rooms: '3',
    square: '82',
    price: "700$",
    priceTotal: '25000$',
    status:'акція'
},
{
    id: 4,
    house: '7',
    floor: '2',
    flatNumber: 5,
    rooms: '3',
    square: '79.7',
    price: '700$',
    priceTotal: '55790$',
    status: 'акція'
},
{
    id: 5,
    house: '7',
    floor: '2',
    flatNumber: 6,
    rooms: '1',
    square: '39.2',
    price: '700$',
    priceTotal: '27440$',
    status: 'заброньована'
},
{
    id: 6,
    house: '7',
    floor: '2',
    flatNumber: 7,
    rooms: '1',
    square: '40.0',
    price: '700$',
    priceTotal: '29400$',
    status: 'продана'
},
{
    id: 7,
    house: '7',
    floor: '2',
    flatNumber: 8,
    rooms: '1',
    square: '39.2',
    price: '700$',
    priceTotal: '27440$',
    status: 'вільна'
},
{
    id: 8,
    house: '7',
    floor: '2',
    flatNumber: 9,
    rooms: '3',
    square: '79.3',
    price: '900$',
    priceTotal: '55510$',
    status: 'акція',
}]

const initialValue = [
    {
        id: 0,
        house: '7',
        floor: '2',
        flatNumber: 1,
        rooms: '3',
        square: '79,3',
        price: '1900$',
        priceTotal: '150670$',
        status: 'продана'
    }
];

function installFloor () {
    const flats = document.querySelectorAll('.flat');
    const flatInfo = document.querySelector('.floor-options')

    const renderInformation = (array) => {
        const flatInformation = array.map(item => {

            localStorage.setItem("Квартира", JSON.stringify(item))


            return(`<div class="floor-options">
            <div class="floor-option-item">
                <div>Номер будинку:</div>
                <div>${item.house}</div>
            </div>
            <div class="floor-option-item">
                <div>Поверх:</div>
                <div>${item.floor}</div>
            </div>
            <div class="floor-option-item">
                <div>Номер квартири:</div>
                <div>${item.flatNumber}</div>
            </div>
            <div class="floor-option-item">
                <div>Кіл-ть кімнат:</div>
                <div>${item.rooms}</div>
            </div>
            <div class="floor-option-item">
                <div>Площа квартири:</div>
                <div>${item.square}</div>
            </div>
            <div class="floor-option-item">
                <div>Ціна за м²:</div>
                <div>${item.price}</div>
            </div>
            <div class="floor-option-item">
                <div>Ціна за квартиру:</div>
                <div>${item.priceTotal}</div>
            </div>
            <div class="floor-option-item">
                <div>Статус квартири:</div>
                <div>${item.status}</div>
            </div>
            <div class="floor-option-item">
                <a class="flat-url" href="../flat-item.html">
                    Переглянути квартиру
                </a>
            </div>
        </div>`)
        
    })
        flatInfo.innerHTML = flatInformation;
    }
    renderInformation(initialValue);



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

            let flatNumber = flatArray.filter(item => item.flatNumber === Number(thisFlat));
            renderInformation(flatNumber);


            
            

        })

            if(flat.classList.contains('booking')){
                flat.querySelector('.status-text').innerHTML = 'Бронь';
            }
            else if(flat.classList.contains('already-sold')){
                flat.querySelector('.status-text').innerHTML = 'Продана';
            }
            else if(flat.classList.contains('action')){
                flat.querySelector('.status-text').innerHTML = 'Акція';
            }
            else {
                flat.querySelector('.status-text').innerHTML = 'Вільна'
            }
        })
 }
document.querySelector('.floor-item-page') ? installFloor() : null;




if(document.querySelector('.flat-item-page')){
    const flat = localStorage.getItem('Квартира');
    const flatInfo = document.querySelector('.floor-options')

    const renderInformation = (array) => {
        const flatInfo = JSON.parse(flat)



            return(`<div class="floor-options">
            <div class="floor-option-item">
                <div>Номер будинку:</div>
                <div>${flatInfo.house}</div>
            </div>
            <div class="floor-option-item">
                <div>Поверх:</div>
                <div>${flatInfo.floor}</div>
            </div>
            <div class="floor-option-item">
                <div>Номер квартири:</div>
                <div>${flatInfo.flatNumber}</div>
            </div>
            <div class="floor-option-item">
                <div>Кіл-ть кімнат:</div>
                <div>${flatInfo.rooms}</div>
            </div>
            <div class="floor-option-item">
                <div>Площа квартири:</div>
                <div>${flatInfo.square}</div>
            </div>
            <div class="floor-option-item">
                <div>Ціна за м²:</div>
                <div>${flatInfo.price}</div>
            </div>
            <div class="floor-option-item">
                <div>Ціна за квартиру:</div>
                <div>${flatInfo.priceTotal}</div>
            </div>
            <div class="floor-option-item">
                <div>Статус квартири:</div>
                <div>${flatInfo.status}</div>
            </div>
        </div>`)
        
   
    }
        flatInfo.innerHTML = renderInformation(flat);
    }
