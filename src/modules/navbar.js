import '../styles/navbar.css'
import logo from '/logo.svg'
import profileImage from '/205.jpg'

document.getElementById('navbar').innerHTML = `
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
`