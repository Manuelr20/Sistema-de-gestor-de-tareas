document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            
            const response = await fetch("http://localhost:8080/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });
            
            const data = await response.json();
            if (data.status === "success") {
                localStorage.setItem("userType", "user");
                window.location.href = "principal.html";
            } else {
                alert("Credenciales incorrectas");
            }
        });
    }
    
    const registerForm = document.getElementById("register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            const username = document.getElementById("new-username").value;
            const password = document.getElementById("new-password").value;
            
            const response = await fetch("http://localhost:8080/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });
            
            const data = await response.json();
            if (data.status === "success") {
                alert("Usuario registrado exitosamente");
                window.location.href = "index.html";
            } else {
                alert("Error al registrar");
            }
        });
    }
    
    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            localStorage.removeItem("userType");
            window.location.href = "index.html";
        });
    }

    const tareasContainer = document.getElementById("tareas-container");
    if (tareasContainer) {
        fetch("http://localhost:8080/api/tareas")
            .then(response => response.json())
            .then(tareas => {
                tareasContainer.innerHTML = "";
                tareas.forEach(tarea => {
                    const tareaElement = document.createElement("div");
                    tareaElement.innerHTML = `<h3>${tarea.titulo}</h3><p>${tarea.descripcion}</p>`;
                    tareasContainer.appendChild(tareaElement);
                });
            });
    }
});

