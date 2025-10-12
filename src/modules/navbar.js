import "../styles/navbar.css";
import logo from "/logo2.svg";
import profileImage from "/205.jpg";
import { logout } from "../api/token";

document.getElementById("navbar").innerHTML = `
    <div>
        <img src="${logo}" id="logo" alt="Logo" id="logo">
    </div>
    <div class="nav-container">
        <i class="material-icons btn-navbar" id="btn-notifications">notifications_none</i>
        <div class="btn-navbar" id="btn-logout">
            <!-- <i class="material-icons">exit_to_app</i> -->
                Salir
        </div>
        <img src="${profileImage}" class="btn-navbar" id="profileImage" alt="profile image">

    </div>
`;


// Add event listener to logout button
const btnLogout = document.getElementById("btn-logout");
btnLogout.addEventListener("click", () => {
    // Clear session storage and redirect to login page
    logout();
});