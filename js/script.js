const toggleIcon = document.querySelector('.toggle-icon')
const navigation = document.querySelector('.navigation')

toggleIcon.addEventListener('click', () => {
    toggleIcon.classList.toggle('fa-times')
    navigation.classList.toggle('active')
})