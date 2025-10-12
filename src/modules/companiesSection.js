import "../styles/companiesSection.css";
import "../styles/cardCompany.css";
import { applyFilter } from "../utils/companiesSection";
import {
	addMembership,
	setLoadingMemberships,
	setMembershipsList,
} from "./var";
import { fetchCreatePersonalCompanyAndMembership, fetchMemberships } from "../api/memberships";

loadMemberships();


async function loadMemberships(){
	fetchMemberships()
	.then((memberships) => {
		if (memberships.length === 0) {
			CreatePersonalMembership();
		}
		setMembershipsList(memberships);
	})
	.catch((err) => {
		// TODO: show error message to user
		console.error("error loading memberships:", err);
	})
	.finally(() => {
		setLoadingMemberships(false);
		applyFilter();
	});

}

async function CreatePersonalMembership(){
	fetchCreatePersonalCompanyAndMembership()
	.then((newMembership) => {
		addMembership(newMembership);
	})
	.catch((err) => {
		console.error("error creating personal company and membership:", err);
	})
}
