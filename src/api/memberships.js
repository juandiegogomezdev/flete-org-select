import { refreshToken } from './token.js';
import { applyFilter } from '../utils/companiesSection';


// Fetch memberships
async function fetchMemberships() {
  const response = await fetch(`${window.APP_CONFIG.api_url}/memberships`, {
    credentials: 'include',
  });
  return response;
}

async function handleMembershipsResponse(response) {
  if (response.ok) {
    const { memberships } = await response.json();
    if (memberships.length === 0) {
      const createdMembership = await CreatePersonalMembership();
      return [createdMembership];
    }
    return memberships;
  }

  if (response.status === 401) {
    const res = await response.json();
    if (!res.details || res.details.token_status === "token_invalid") {
      alert("invalid token, please login again");
        //window.location.href = window.APP_CONFIG.base_url + '/static/login';
      return null;
    }
    if (res.details.token_status === "token_expired") {
      await refreshToken();
      return await loadMemberships();
    }


    throw new Error("Unknown 401 error refreshing token");
  }

  throw new Error("Estatus response unknown");
}

export async function loadMemberships() {
    try {
        const response = await fetchMemberships();
        return await handleMembershipsResponse(response);
    } catch (err) {
        console.error("Error in loadMemberships: ", err);
    }
}


// Create personal membership
async function CreatePersonalMembership() {
  try {
   
    const response = await fetch(`${window.APP_CONFIG.api_url}/org/personal`, {
      method: "POST",
      credentials: "include",
    });
    if (response.ok) {
      const res = await response.json();
      return membershipsList = [res.membership];
    } else if (response.status === 401) {

      await refreshToken();
      await CreatePersonalMembership();

    }
    throw new Error("Error creating personal membership");
  } catch (err) {
    console.error("Error creating personal membership card:", err);
  }

}
