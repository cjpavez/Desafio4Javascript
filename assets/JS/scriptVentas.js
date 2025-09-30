const propiedadVenta = [
    {id: "Apartamento de lujo en zona exclusiva",
    imagen: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripción: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicación: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: "4 Habitaciones",
    baños: "4 Baños",
    piscina: "No cuenta con piscina",
    precio: "5.000",
    smoke: "No se permite fumar",
    pets: "No se permiten mascotas"
},
    {id: "Apartamento acogedor en la montaña",
    imagen: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripción: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicación: "89 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: "2 Habitaciones",
    baños: "1 Baño",
    piscina: "No cuenta con piscina",
    precio: "1.200",
    smoke: "Permitido fumar",
    pets: "Mascotas permitidas"
},
    {id: "Penthouse de lujo con terraza panorámica",
    imagen: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripción: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicación: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: "3 Habitaciones",
    baños: "3 Baños",
    piscina: "Cuenta con piscina",
    precio: "4.500",
    smoke: "No se permite fumar",
    pets: "Mascotas permitidas"
}];

const venta1 = document.getElementById("card");
for (let producto of propiedadVenta) {
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
    // Condicional para piscina
    let piscinaHTML = "";
    if (producto.piscina === "No cuenta con piscina") {
        piscinaHTML = `<p class="text-danger"><i class="fa-solid fa-person-swimming"></i> ${producto.piscina}</p>`;
    } else {
        piscinaHTML = `<p class="text-success"><i class="fa-solid fa-person-swimming"></i> ${producto.piscina}</p>`;
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
            <p><i class="fas fa-dollar-sign"></i> ${producto.precio}</p>
            ${smokeHTML}
            ${petsHTML}
            ${piscinaHTML}  
        </div>`;
    venta1.innerHTML += template;
}