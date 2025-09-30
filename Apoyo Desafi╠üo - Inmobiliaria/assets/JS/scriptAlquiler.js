const propiedadAlquiler = [
    {id: "Apartamento en el centro de la ciudad",
    imagen: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripción: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicación: "123 Main Street, Anytown, CA 91234",
    habitaciones: "2 Habitaciones",
    baños: "2 Baños",
    amueblado: "Cuenta con muebles",
    precio: "2,000",
    smoke: "No se permite fumar",
    pets: "Mascotas permitidas"
},
    {id: "Apartamento luminoso con vista al mar",
    imagen: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripción: "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicación: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: "3 Habitaciones",
    baños: "3 Baños",
    amueblado: "Cuenta con muebles",
    precio: "2,500",
    smoke: "Permitido fumar",
    pets: "Mascotas permitidas"
},
    {id: "Condominio moderno en zona residencial",
    imagen: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripción: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicación: "123 Main Street, Anytown, CA 91234",
    habitaciones: "2 Habitaciones",
    baños: "2 Baños",
    amueblado: "No cuenta con muebles",
    precio: "2,200",
    smoke: "No se permite fumar",
    pets: "No se permiten mascotas"
}];

const alquiler1 = document.getElementById("card");
for (let producto of propiedadAlquiler) {
    // Condicional para smoke
    let smokeHTML = "";
    if (producto.smoke === "No se permite fumar") {
        smokeHTML = `<p class="text-danger"><i class="fas fa-smoking-ban"></i> ${producto.smoke}</p>`;
    } else {
        smokeHTML = `<p class="text-success"><i class="fas fa-smoking"></i> ${producto.smoke}</p>`;
    }

    // Condicional para pets
    let petsHTML = "";
    if (producto.pets === "No se permiten mascotas") {
        petsHTML = `<p class="text-danger"><i class="fa-solid fa-ban"></i> ${producto.pets}</p>`;
    } else {
        petsHTML = `<p class="text-success"><i class="fa-solid fa-check"></i> ${producto.pets}</p>`;
    }

    const template = `
        <img src="${producto.imagen}" alt="${producto.id}">
        <div class="card-body">
            <h5 class="card-title">${producto.id}</h5>
            <p class="card-text">${producto.descripción}</p>
            <p>
                <i class="fas fa-map-marker-alt"></i> ${producto.ubicación} 
            </p>
            <p>
                <i class="fas fa-bed"></i> ${producto.habitaciones} |
                <i class="fas fa-bath"></i> ${producto.baños}
            </p>
            <p>
                <i class="fa-solid fa-couch"></i> ${producto.amueblado}
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${producto.precio}</p>
            ${smokeHTML}
            ${petsHTML}
        </div>`;
    alquiler1.innerHTML += template;
}
