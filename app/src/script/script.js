const projectLink = document.querySelectorAll('.main__project-link')
projectLink.forEach(link =>{
    link.addEventListener('click', (e) =>{
        if(link.classList.contains('active')){
            link.classList.remove('active')
        } else{
            link.classList.add('active')
        }
        e.preventDefault()
    })
  
})