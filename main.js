const toggeleSearch = (search,button) =>{
    const searchBar = document.getElementById(search),
          searchButton = document.getElementById(button)
    
          searchButton.addEventListener('click', () =>{
            searchBar.classList.toggle('show-search')
          })

}
toggeleSearch('search-bar','search-button')
 