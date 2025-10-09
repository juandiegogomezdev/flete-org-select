import '../styles/companiesSection.css'
import '../styles/cardCompany.css'
import { loadMemberships, } from '../api/memberships';
import { applyFilter } from '../utils/companiesSection';
import { membershipsList, setLoadingMemberships,
    setMembershipsList } from './var';


const companiesSection = document.getElementById('companiesSection');
companiesSection.innerHTML = `
    <div class="spaceHeader">
        <h2 class="spaceSelected">Mis empresas</h2>
        <p class="spaceDescription">Elije y administra tu empresa.</p>
    </div>
` + companiesSection.innerHTML;

loadMemberships().then( memberships => {
    setMembershipsList(memberships);
    console.log("memberships loaded:", membershipsList);
}).catch((err) => {
    console.error("error loading memberships:", err);
}).finally(()=>{
    setLoadingMemberships(false);

    applyFilter();
});

