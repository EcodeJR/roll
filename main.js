let main_T = document.getElementById('main_T');
let image = document.getElementById('image');
let bike = document.getElementById('bike');
let car = document.getElementById('car');
let plane = document.getElementById('plane');
let jet_ski = document.getElementById('jet_ski');
let index = 0;

let left = document.getElementById('left');
let right = document.getElementById('right');


let ImgList = [{
        text: 'CYCLING MODE',
        main_img: '/red-sports-bike.png',
        dot: bike
    }, {
        text: 'DRIVINNG MODE',
        main_img: '/red-sports-bike.png',
        dot: car
    },
    {
        text: 'FLYING MODE',
        main_img: '/red-sports-bike.png',
        dot: plane
    },
    {
        text: 'SKIING MODE',
        main_img: '/red-sports-bike.png',
        dot: jet_ski
    }
];

function loadContent(index) {
    main_T.innerHTML = ImgList[index].text;
    image.setAttribute('src', ImgList[index].main_img);
    if (ImgList[index]) {
        ImgList[index].dot.style.backgroundColor = '#fff';
    } else {
        ImgList[index].dot.style.backgroundColor = '#0f1414';
    }

}
loadContent(index);

//prev content
function prev_content() {
    if (index > 0) {
        index -= 1;
        loadContent(index);
    } else {
        index = 0;
        loadContent(index);
    }
};

left.addEventListener('click', () => {
    prev_content();
});

//next content
function next_content() {
    if (index < ImgList.length - 1) {
        index += 1;
        loadContent(index);
    } else {
        index = 0;
        loadContent(index);
    }
};

right.addEventListener('click', () => {
    next_content();
});


let openNav = document.getElementById('open_nav');
let closeNav = document.getElementById('close_nav');
let list = document.getElementById('list');
openNav.addEventListener('click', () => {
    openNav.style.display = 'none';
    closeNav.style.display = 'block';
    list.style.top = '10vh';
    list.style.transition = 'all .3s';
});
closeNav.addEventListener('click', () => {
    closeNav.style.display = 'none';
    openNav.style.display = 'block';
    list.style.top = '-10vh';
    list.style.transition = 'all .3s';
});