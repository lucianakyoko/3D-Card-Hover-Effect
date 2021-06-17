const container = document.querySelector('.card-container');
const card = document.querySelector('.card');
const cardMainImage = document.querySelector('.card__mario img');
const cardName = document.querySelector('.name');
const itemImage = document.querySelector('.detail__img');
const description = document.querySelector('.detail__description');

container.addEventListener('touchmove', movingEvent);
container.addEventListener('mousemove', movingEvent);

container.addEventListener('touchstart', animationIn);
container.addEventListener('mouseenter', animationIn);

container.addEventListener('touchend', animationOut);
container.addEventListener('mouseleave', animationOut);

function movingEvent(event) {
  if(event.type === 'touchmove') {
    event.preventDefault();
    
    let i;
    let xAxis;
    let yAxis;

    for (i=0; i < event.changedTouches.length; i++) {
      xAxis = (window.innerWidth / 2 - event.changedTouches[i].pageX) / 25;
      yAxis = (window.innerHeight / 2 - event.changedTouches[i].pageY) / 25;
    }
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  };

  let xAxis = (window.innerWidth / 2 - event.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - event.pageY) / 25;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
}


function animationIn(event) {
  if(event.type === 'touchmove') event.preventDefault();

  card.style.transition = 'none';
  
  cardMainImage.style.transform = `translateZ(300px)`;
  cardMainImage.style.filter = `drop-shadow(-40px 64px 20px rgba(0, 0, 0, 0.3))`;
  
  cardName.style.transform = `translateZ(100px)`;
  cardName.style.filter = `drop-shadow(-20px 64px 20px rgba(0, 0, 0, 0.6))`;
  
  itemImage.style.transform = `translateZ(150px)`;
  itemImage.style.filter = `drop-shadow(-30px 64px 20px rgba(0, 0, 0, 0.6))`;
  
  description.style.transform = `translateZ(130px)`;
  description.style.filter = `drop-shadow(-30px 64px 20px rgba(0, 0, 0, 0.6))`;
}

function animationOut(event) {
  if(event.type === 'touchend') event.preventDefault();

  card.style.transition = `all 0.5s ease`;
  card.style.transform = `translateZ(0px)`;
  
  cardMainImage.style.transform = `translateZ(0px)`;
  cardMainImage.style.filter = `none`;
  
  cardName.style.transform = `translateZ(0px)`;
  cardName.style.filter = `none`;
  
  itemImage.style.transform = `translateZ(0px)`;
  itemImage.style.filter = `none`;
  
  description.style.transform = `translateZ(0px)`;
  description.style.filter = `none`;
}
