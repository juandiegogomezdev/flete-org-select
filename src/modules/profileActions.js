import '../styles/profileActions.css';

const profileActionsContainer = document.querySelector('.profile-actions-container');
const profileImage = document.getElementById('profileImage');



profileActionsContainer.innerHTML = `
    <div class="profile-actions-window">
        <ul class="profile-actions-list">
            <li>Ver perfil</li>
            <li id="btn-logout">Salir</li>
        </ul>
    </div>`


const profileActionsWindow = document.querySelector('.profile-actions-window');


profileImage.addEventListener('click', () => {
    profileActionsWindow.classList.toggle('openProfileActions');
})


// Add event listener to logout button
const btnLogout = document.getElementById("btn-logout");
btnLogout.addEventListener("click", () => {
    // Clear session storage and redirect to login page
    logout();
});