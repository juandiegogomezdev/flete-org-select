import "../styles/navbar.css";
import logo from "/full-logo-black.svg";
import profileImage from "/205.jpg";
import { logout } from "../api/token";

const navbar = document.getElementById("navbar");

navbar.innerHTML = `
    <div class="nav-content">
        <div>
            <img src="${logo}" id="logo" alt="Logo" id="logo">
        </div>
        <div class="nav-container">
            <div class="notification-wrapper"> 
                <i class="material-icons-outlined btn-navbar" id="btn-notifications">mail</i>
                <div class="notification-badge" id="notification-badge">3</div>
        
            </div>
        
            
            <img src="${profileImage}" class="btn-navbar" id="profileImage" alt="profile image">

        </div>

    </div>
    <div class="profile-actions-container">
      
    </div>

    
    
`;
