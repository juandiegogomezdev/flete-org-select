export let spaceSelected = null;
export let membershipsList = null;
export let loadingMemberships = true;

export function setSpaceSelected(space) {
    spaceSelected = space;
}

export function setMembershipsList(memberships) {
    membershipsList = memberships;
}

export function setLoadingMemberships(isLoading) {
    loadingMemberships = isLoading;
}