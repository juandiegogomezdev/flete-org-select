import "../styles/space.css";
import { applyFilter } from "../utils/companiesSection";
import {
	spaceSelected,
	membershipsList,
	loadingMemberships,
	setSpaceSelected,
} from "./var";

const companiesSection = document.getElementById("companiesSection");
companiesSection.innerHTML = `
	<div id="spaceHeader">
		<div>
			<h2 class="spaceSelected"></h2>
			<p class="spaceDescription"></p>
		</div>  
		<div class="button buttonBlack" id="buttonOpenModalcreateCompany"> Crear empresa</div>
	</div>
${companiesSection.innerHTML}`;

const cardsSpace = document.querySelectorAll(".cardSpace");
const createCompanyButton = document.getElementById("buttonOpenModalcreateCompany");

spaceEventListener();
openModalListener();

// Add event listeners to space cards
function spaceEventListener() {
	const spaceSelectedTitle = document.querySelector(".spaceSelected");
	const spaceDescription = document.querySelector(".spaceDescription");

	cardsSpace.forEach((card, idx) => {
		card.addEventListener("click", () => {
			setSpaceSelected(card.getAttribute("data-space-id"));
			applyFilter(membershipsList, spaceSelected, loadingMemberships);
			toggleSelectedCardSpace(card);

			if (spaceSelected === "my-companies") {
				spaceSelectedTitle.textContent = "Mis empresas";
				spaceDescription.textContent = "Elije y administra tu empresa.";
				createCompanyButton.style.display = "inline-block";
			}
			if (spaceSelected === "my-jobs") {
				spaceSelectedTitle.textContent = "Mis trabajos";
				spaceDescription.textContent =
					"Selecciona el trabajo que deseas gestionar.";
				createCompanyButton.style.display = "none";
			}

			if (spaceSelected === "independent") {
				spaceSelectedTitle.textContent = "Independiente";
				spaceDescription.textContent = "Gestiona tu perfil independiente.";
				createCompanyButton.style.display = "none";
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


function openModalListener(){
	createCompanyButton.addEventListener("click", ()=> {
		const modalCreateCompany = document.getElementById("modalCreateCompany");
		modalCreateCompany.style.display= "flex"
	})
}