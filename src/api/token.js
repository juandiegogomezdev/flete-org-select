var countRefresingToken = 0;

// This refresh the token
export async function refreshToken() {
	countRefresingToken++;
	if (countRefresingToken > 4) {
		throw new Error("Too many token refresh attempts");
	}
	try {
		const response = await fetch(`${window.APP_CONFIG.api_url}/auth/refresh`, {
			method: "POST",
			credentials: true,
		});
		if (!response.ok) {
			window.location.href = `${window.APP_CONFIG.base_url}/static/login`;
		}
	} catch (err) {
		console.log("Error refreshing token: ", err);
		throw err;
	}
}


export async function logout() {
	// Delete the cookie between the backend
	const response = await fetch(`${window.APP_CONFIG.base_url}/session/delete/web`, {
		method: "DELETE",
		credentials: "include",
	});

	console.log("Logout response:", response);

	if (response.ok) {
		window.location.href = `${window.APP_CONFIG.base_url}/static/login`;
	}
	if (!response.ok) {
		alert("Error logging out, please try again.");
		throw new Error("Error logging out");
	}
}