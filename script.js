window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function responseMenu(){
    const menuBar = document.querySelector('.menu-bar');
    const navigation = document.querySelector('.navigation');
    menuBar.classList.toggle('active');
    navigation.classList.toggle('active');
}

window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.scrollButton');
    scroll.classList.toggle("active", window.scrollY > 50);
})

function scrollUp(){
    window.scrollTo({
        behavior:"smooth",
        top: 0
    });
};
