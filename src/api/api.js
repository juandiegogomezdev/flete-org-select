import { refreshToken } from "./token";

export async function handleApiResponse(
	response,
	errorContext = "handleApiResponse",
) {
	if (response.ok) {
		response = await response.json();
		return { response: response, err: null, action: null };
	}

	if (response.status === 401) {
        return await handleUnauthorizedResponse(response);
	}

	// try get the controled error fron the backend
	try {
		const errorData = await response.json();
		const errorMessage = errorData.message;
		return { response: null, err: new Error(errorMessage), action: null };
	} catch (err) {
		console.error(`Error parsing error response in ${errorContext}: `, err);
		return { response: null, err: new Error(`Error en el sistema.`), action: null };
	}
}

export async function handleUnauthorizedResponse(response) {
    try {
        const res = await response.json();
        console.log("handleUnauthorizedResponse:", res);
        if (!res.details || res.details.token_status === "token_invalid") {
            alert("invalid token, please login again");
            window.location.href = window.APP_CONFIG.base_url + '/static/login';
            return {response: null, err: new Error("Debes iniciar sesión de nuevo."), action: null};
        }
        if (res.details.token_status === "token_expired") {
            await refreshToken();
            return {response: null, err: null, action: "retry"};
        }

        return { response: null, err: new Error("Error en el sistema."), action: null};

    } catch {
        console.log("Error parsing error response in handleUnauthorizedResponse");
        return { response: null, err: new Error(`Error en el sistema.`), action: null };

    }
}
