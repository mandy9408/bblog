function openTab(tabId) {
    const tabs = document.querySelectorAll('.form-container');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');

    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`.tab-link[onclick="openTab('${tabId}')"]`).classList.add('active');
}

function scrollToSection(sectionId) {
    openTab(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function showForm() {
    const container = document.querySelector('.container');
    container.classList.remove('hidden');
    setTimeout(() => {
        container.classList.add('visible');
    }, 100);
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = {
        username,
        password
    };

    fetch('https://tu-api-url.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Inicio de sesión exitoso');
            window.location.href = 'dashboard.html'; // Redirigir a la página principal o dashboard
        } else {
            alert('Error en el inicio de sesión: ' + data.message);
        }
    })
    .catch((error) => {
        alert('Error en el inicio de sesión');
        console.error('Error:', error);
    });
});

document.getElementById('formRegistroPadre').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombreApellidos = document.getElementById('nombreApellidos').value;
    const telefono = document.getElementById('telefono').value;
    const password = document.getElementById('password').value;

    const data = {
        nombreApellidos,
        telefono,
        password
    };

    fetch('https://tu-api-url.com/registro_padre', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Registro exitoso');
        console.log('Success:', data);
    })
    .catch((error) => {
        alert('Error en el registro');
        console.error('Error:', error);
    });
});
