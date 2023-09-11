const searchButton = document.getElementById('search');
let validation = true;
const searchText = document.querySelector('.search-text');

searchButton.addEventListener('click', function() {
 
    if(validation === true) {
        searchButton.style.transform = 'translateX(-120px)';
        
        validation = false;

        setTimeout(() => {
            searchText.style.display = 'flex';
        }, 400);
    }else {
        searchButton.style.transform = 'translateX(0)';
        validation = true;
        searchText.style.display = 'none';
    }
    
})