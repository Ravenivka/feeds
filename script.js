const main = document.querySelector('.main');
const initialData = [
{
product: "Apple iPhone 13",
reviews: [
{
id: "1",
text: "Отличный телефон! Батарея держится долго.",
},
{
id: "2",
text: "Камера супер, фото выглядят просто потрясающе.",
},
],
},
{
product: "Samsung Galaxy Z Fold 3",
reviews: [
{
id: "3",
text: "Интересный дизайн, но дорогой.",
},
],
},
{
product: "Sony PlayStation 5",
reviews: [
{
id: "4",
text: "Люблю играть на PS5, графика на высоте.",
},
],
},
];

function checkText(text) {
    console.log(text.length);
    if (text.length < 30) {        
        throw new Error('Слишком короткий текст');
    } else if (text.length > 500) {
        throw new Error('Слишком длинный текст');
    } else {
        return text;
    }
}
function checkUser(text){
    if (text.length == 0) {
        throw new Error('Укажите имя или ID');
    } else {
        return text;
    }
    
}

function renderData(array) {     
    array.forEach(element => {
        renderSection(element);
    });
}
function renderSection(object) {
    const section = document.createElement('div');
    section.classList.add('section');
    const prodheader = document.createElement('div');
    prodheader.classList.add('header_top');
    const productTitle = document.createElement('h3');
    productTitle.textContent = `Отзывы о ${object.product}`;
    const btnDiv = document.createElement('div');
    btnDiv.classList.add('btn_div');
    const usId = document.createElement('input');
    usId.classList.add('userStyle');
    usId.classList.add('hidden');    
    const btn = document.createElement('button');
    const btn_send = document.createElement('button');
    btn_send.classList.add('hidden');
    const txtArea = document.createElement('textarea');    
    txtArea.classList.add('hidden');
    const span = document.createElement('span');    
    span.classList.add('user_span');
    span.classList.add('hidden');
//link to button
    btn.addEventListener('click', function(){                      
        txtArea.classList.remove('hidden') ; 
        txtArea.classList.add('shown'); 
        btn.classList.add('hidden'); 
        usId.classList.remove('hidden') ; 
        btn_send.classList.remove('hidden') ;              
    });
    btn_send.addEventListener('click', function(){
        try {
            let userName = checkUser(usId.value);
            let txt = checkText(txtArea.value);
            let obj_feed = {
                id: userName,
                text: txt
            }
            object.reviews.push(obj_feed);
            console.log(object);
            main.innerHTML = '';
            renderData(initialData);
        } catch(e){
            span.classList.remove('hidden');
            span.innerHTML = e.message;
        }
    });

// end link
    btnDiv.append(usId, txtArea, btn,btn_send, span);
    btn.textContent = 'Добавить отзыв';
    btn_send.innerHTML = "Oтправить";
    prodheader.append(productTitle, btnDiv);
    section.append(prodheader);
    section.append(document.createElement('hr'));
    renderFeedback(section, object);
    main.append(section);
}
function renderFeedback(htmlelem, obj) {
    const array = obj.reviews;
    array.forEach(element => {
        const feedText = document.createElement('div');
        const userId = document.createElement('h4');
        userId.textContent = element.id;
        feedText.append(userId);
        const txt = document.createElement('p');
        txt.innerHTML = element.text;
        feedText.append(txt);
        const hr = document.createElement('hr');
        hr.classList.add('new_hr'); 
        feedText.append(hr);  
        htmlelem.append(feedText)   ;  
    });
}




renderData(initialData);