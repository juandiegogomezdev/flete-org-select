import "../styles/header.css";

document.getElementById("topPage").innerHTML = `
    <header >
        <h1>Selecciona tu espacio de trabajo</h1>
        <p>Organiza y gestiona tus trabajos y empresas desde un solo lugar.</p>
    </header>
    <section class="cardSection">
        <div class="card cardSpace" data-space-id="my-companies">
            <i class="material-icons">domain</i>
            <div>
                <h4><b>Mis empresas</b></h4>
                <p>Empresas creadas y administradas por ti</p>
            </div>
        </div>
        <div class="card cardSpace" data-space-id="my-jobs">
            <i class="material-icons">work</i>
            <div>
                <h4><b>Mis trabajos</b></h4>
                <p>Empresas donde trabajas como empleado</p>
            </div>
        </div>
    </section>
`;
