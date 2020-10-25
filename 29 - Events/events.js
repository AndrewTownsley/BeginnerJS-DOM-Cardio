const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
    console.log('!@#it got clicked');

}

const hooray = () => console.log('Hoorat');

butts.addEventListener('click', function() {
    console.log('Im an anonymous function...');
});
coolButton.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);

// butts.removeEventListener('click', handleClick);



//   Listen on Multiple Items...

const buyButtons = document.querySelectorAll('button.buy');

