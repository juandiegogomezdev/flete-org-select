import '../styles/space.css'
import { applyFilter } from '../utils/companiesSection';
import { spaceSelected, membershipsList, loadingMemberships, setSpaceSelected } from './var';
// Toggle selected class on space cards




const cardsSpace = document.querySelectorAll(".cardSpace");

spaceEventListener();


// Add event listeners to space cards
function spaceEventListener() {
  const spaceSelectedTitle = document.querySelector(".spaceSelected");
  const spaceDescription = document.querySelector(".spaceDescription");

  cardsSpace.forEach((card, idx) => {
    card.addEventListener("click", () => {
      console.log("Index", idx);
      console.log("Card --> ", card);
      setSpaceSelected(card.getAttribute("data-space-id"));
      applyFilter(membershipsList, spaceSelected, loadingMemberships );
      toggleSelectedCardSpace(card);


      if (spaceSelected == 'my-companies') {
        spaceSelectedTitle.textContent = "Mis empresas";
        spaceDescription.textContent = "Elije y administra tu empresa.";
      }
      if (spaceSelected == 'my-jobs') {
        spaceSelectedTitle.textContent = "Mis trabajos";
        spaceDescription.textContent = "Selecciona el trabajo que deseas gestionar.";
      }

      if (spaceSelected == 'independent') {
        spaceSelectedTitle.textContent = "Independiente";
        spaceDescription.textContent = "Gestiona tu perfil independiente.";
      }
    });
  });
}


function toggleSelectedCardSpace(card) {
  cardsSpace.forEach((c) => {
    c.classList.remove("selected");
  });

  // Check if card is already selected
  if (card.classList.contains("selected")) {
    card.classList.remove("selected");
    return;
  }
  card.classList.add("selected");
}
