import { fetchCreateCompanyAndMembership } from "../api/memberships";
import "../styles/modalCreateCompany.css";
import { applyFilter } from "../utils/companiesSection";
import { addMembership } from "./var";

const modalCreateCompany = document.getElementById("modalCreateCompany");
modalCreateCompany.innerHTML = `
    <div class="modalContent">
        <div class="titleCreateCompany">Crear Nueva Empresa</div>
        <form id="createCompanyForm">
            <div class="inputGroup">
                <label for="companyName">Nombre de la Empresa</label>
                <textarea id="companyName" name="companyName" required></textarea>
            </div>
            <div class="buttonsCreateCompany">
                <button class="button buttonBlack" type="button" id="buttonModalCreateCompanyFetch">Crear Empresa</button>
                <button class="button buttonWhite" type="button" id="buttonModalCreateCompanyCancel">Cancelar</button>
            </div>
        </form>
    </div>
`;

// Add event listeners to buttons
const buttonCreateCompany = document.getElementById("buttonModalCreateCompanyFetch");
const buttonCancel = document.getElementById("buttonModalCreateCompanyCancel");

buttonCreateCompany.addEventListener("click", () => {
    const companyName = document.getElementById("companyName").value.trim();
    console.log("Creating company with name:", companyName);
    if (!companyName) {
        alert("El nombre de la empresa no puede estar vacío.");
        return;
    }

    // Fetch call to create company
    fetchCreateCompanyAndMembership(companyName)
    .then((newMembership) => {
        addMembership(newMembership);
        modalCreateCompany.style.display = "none";
    }).catch((err) => {
        alert(err.message);
    }).finally(() => {
        applyFilter();
    })
})

buttonCancel.addEventListener("click", () => {
    modalCreateCompany.style.display = "none";
});