const ratingCard = document.querySelector('.rating-card');
const thankCard = document.querySelector('.thankyou-card');

if (document.getElementById('submit')) {
document.getElementById('submit').addEventListener('click', handleSubmit)};

function handleSubmit() {
    ratingCard.style.display = 'none';
    thankCard.style.display = 'flex';

    const value = document.querySelector('.active');
    const selection = document.querySelector('span');
    
    selection.textContent = `You selected ${value.value} out of 5`;

};

const list = document.querySelectorAll('li');

list.forEach(item => {
    item.addEventListener('click', (e) => {
        list.forEach(li => li.classList.add('li'))
        item.setAttribute('class', 'active')
    });
});







