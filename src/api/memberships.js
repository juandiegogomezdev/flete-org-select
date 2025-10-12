import { handleApiResponse } from "./api";


// Fetch memberships
export async function fetchMemberships() {
	const response = await fetch(`${window.APP_CONFIG.api_url}/memberships`, {
		credentials: "include",
	});

	const { response: res, err, action } = await handleApiResponse(response);

	if (err) {
		throw err;
	}

	if (action === "retry") {
		return await fetchMemberships();
	}

	return res.data;
}

export async function fetchCreatePersonalCompanyAndMembership() {
	const response = await fetch(
		`${window.APP_CONFIG.api_url}/org/personal`,
		{
			method: "POST",
			credentials: "include",
		},
	);

	const { response: res, err, action } = await handleApiResponse(response);

	if (err) {
		throw err;
	}

	if (action === "retry") {
		return await fetchCreatePersonalCompanyAndMembership();
	}

	return res.data;
}

export async function fetchCreateCompanyAndMembership(name) {
	const response = await fetch(`${window.APP_CONFIG.api_url}/org/company`, {
		method: "POST",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ companyName: name }),
	});

	const { response: res, err, action} = await handleApiResponse(response);

	if (err) {
		throw err;
	}
	
	if (action === "retry") {
		return await fetchCreateCompanyAndMembership(name);
	}

	return res.data;

}