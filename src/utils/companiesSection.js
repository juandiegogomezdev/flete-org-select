import {
	loadingMemberships,
	membershipsList,
	spaceSelected,
} from "../modules/var";
import { convertoTimeStampToLegibleDate } from "./time";

const rolesClass = {
	owner: "rolOwner",
	partner: "rolPartner",
	admin: "rolAdmin",
	driver: "rolDriver",
	accountant: "rolAccountant",
};

const rolesTranslate = {
	owner: "Jefe",
	partner: "Socio",
	admin: "Administrador",
	driver: "Conductor",
	accountant: "Contador",
};

const statusClass = {
	active: "statusOrgActive",
	revoked: "statusOrgRevoked",
	suspended: "statusOrgSuspended",
	finalized: "statusOrgSuspended",
};

const statusTranslate = {
	active: "Activo",
	revoked: "Revocado",
	suspended: "Suspendido",
	finalized: "Finalizado",
};

// Apply filter to membershipsList and update the UI
export function applyFilter() {
	if (loadingMemberships) {
		showLoadingCard();
		return;
	} else {
		hiddenLoadingCard();
	}

	// If no membershipsList or no spaceSelected, no show cards
	if (membershipsList == null || spaceSelected == null) {
		return;
	}

	if (!membershipsList) return;

	// Filter companies based on spaceID
	var filteredCompaniesList = [];


	if (spaceSelected === "my-companies") {
		// filter membershipsList where org_type is 'company' and role is "owner" or "partner"
		
		filteredCompaniesList = membershipsList.filter(
			(membership) =>
				membership.org_type === "company" &&
				(membership.role_name === "owner" ||
					membership.role_name === "partner"),
		);
	}

	if (spaceSelected === "my-jobs") {
		// filter membershipsList where org_type is 'company' and role is not "owner" or "partner"
		filteredCompaniesList = membershipsList.filter(
			(membership) =>
				membership.org_type === "company" &&
				membership.role_name !== "owner" &&
				membership.role_name !== "partner",
		);
	}

	if (spaceSelected === "independent") {

		console.log("Memberships List:=>", membershipsList);
		// Go to independent page
		console.log(membershipsList.filter((mem) => true))
		console.log("true", true)
		filteredCompaniesList = membershipsList.filter(
			(membershipsList) =>
				membershipsList.org_type === "personal" &&
				membershipsList.role_name === "owner",
		);
	}

	CreateMembershipCards(filteredCompaniesList);
}

// Show loading card
function showLoadingCard() {
	// Che
	if (document.getElementById("loadingCard")) {
		return;
	}

	const loadingCard = document.createElement("div");
	loadingCard.id = "loadingCard";
	loadingCard.classList.add("card", "cardCompany");
	loadingCard.innerHTML = `
    <div class="cardCompanyHeader">
        
        <div class="loadingHeaderCompany">
            <div class="loadingRole"></div>
            <div class="loadingStatus"></div>
        </div>
        
        

    </div>
    <div class="loadingNameOrg"></div>
    <div class="loadingDate"> </div>

  `;
	console.log("Loading card created:", loadingCard);
	const cardsContainer = document.getElementById("companiesContainer");
	cardsContainer.appendChild(loadingCard);
}

// Hide loading card
function hiddenLoadingCard() {
	const loadingCard = document.getElementById("loadingCard");
	if (loadingCard) {
		loadingCard.remove();
	}
}

export async function CreateMembershipCards(filteredCompaniesList) {
	// Get container
	const cardsContainer = document.getElementById("companiesContainer");

	// Delete all cards
	const cards = document.querySelectorAll(".cardCompany");
	cards.forEach((card) => {
		card.remove();
	});

	filteredCompaniesList.forEach((membership) => {
		const card = document.createElement("div");
		card.classList.add("card", "cardCompany");

		const cardHeader = document.createElement("div");
		cardHeader.classList.add("headerTopCompany");

		const cardRol = document.createElement("div");
		const cardRolClass = rolesClass[membership.role_name] || "";
		cardRol.classList.add("rol", cardRolClass);
		cardRol.textContent = rolesTranslate[membership.role_name] || "";

		const cardStatus = document.createElement("div");

		cardStatus.classList.add("statusOrg", statusClass[membership.status] || "");
		cardStatus.textContent = statusTranslate[membership.status] || "";

		const cardBody = document.createElement("div");
		cardBody.classList.add("cardCompanyBody");

		const orgName = document.createElement("div");
		orgName.classList.add("nameOrg");
		orgName.textContent = membership.org_name;

		const date = document.createElement("div");
		date.classList.add("date");
		date.textContent = `🗓️ ${convertoTimeStampToLegibleDate(membership.created_at)}`;

		cardHeader.appendChild(cardRol);
		cardHeader.appendChild(cardStatus);
		cardBody.appendChild(orgName);
		cardBody.appendChild(date);
		card.appendChild(cardHeader);
		card.appendChild(cardBody);

		// Add to container
		cardsContainer.appendChild(card);
	});
}
