let membershipsList = null;
let filteredCompaniesList = null;
let currentFilter = null;
let loadingMemberships = true;
let countRefresingToken = 0;

addEventListener("DOMContentLoaded", async (event) => {

  spaceEventListener();
  const cardsSpace = document.querySelectorAll(".cardSpace");
  loadMembershipCards();
});









const rolesClass = {
  'owner': 'rolOwner',
  'partner': 'rolPartner',
  'admin': 'rolAdmin',
  'driver': 'rolDriver',
  'accountant': 'rolAccountant'
}

const rolesTranslate = {
  'owner': 'Jefe',
  'partner': 'Socio',
  'admin': 'Administrador',
  'driver': 'Conductor',
  'accountant': 'Contador'
}

const statusClass = {
  'active': 'statusOrgActive',
  'revoked': 'statusOrgRevoked',
  'suspended': 'statusOrgSuspended',
  'finalized': 'statusOrgSuspended'

}

const statusTranslate = {
  'active': 'Activo',
  'revoked': 'Revocado',
  'suspended': 'Suspendido',
  'finalized': 'Finalizado'
}




