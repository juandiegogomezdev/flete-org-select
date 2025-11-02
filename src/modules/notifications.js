import '../styles/notifications.css';

const notificationWindow = document.querySelector('.notification-window');
const notificationWrapper = document.querySelector('.notification-wrapper')
// Insert title and messages into notification window
notificationWrapper.addEventListener('click', () => {
    notificationWindow.classList.toggle('openNotification');
});

let cards = ''
for (let i = 0; i<=10;  i++) {
    cards += `<div class="notification-card">
            <div class="notification-card-header">
                <p><b>Nuevo trabajo</b></p>
                <p class="notification-date">Hace 2 dias</p>
            </div>
            <div class="notification-card-body">
                Hola, solo quería informarte que el proyecto ha sido aprobado.
            </div>
        </div>`
}

notificationWindow.innerHTML = `
    <div class="notification-title">Notificaciones</div>
    <div class="notification-cards-container">
        ${cards}

    </div>
`;

