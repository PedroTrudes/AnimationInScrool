function scrolls(){
    document.querySelectorAll('div').forEach((di, index) => {
        if(di.getBoundingClientRect().top < window.innerHeight) {
            console.log('Paragrafo apareceu', index);
            di.classList.add('scrolando');  

        }else{
            di.classList.remove('scrolando');
        }
    })

}

window.addEventListener('scroll', scrolls);
