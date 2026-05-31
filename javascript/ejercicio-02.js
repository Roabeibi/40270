const app = document.getElementById("app");

const url = "https://picsum.photos/id/";
const size = "/200/200";

const Picture = (parametro) => {
    const src = url + parametro.id + size;

    console.log(src);

    return `
        <figure>
            <img src="${src}" class="deformar">
            <figcaption>${parametro.nombre}</figcaption>
        </figure>
    `;
};

console.log(Picture({ id: 1, nombre: "Otro" }));

app.innerHTML = Picture({ id: 1, nombre: "Otro" });

for (let index = 2; index < 11; index++) {
    app.innerHTML += Picture({
        id: index,
        nombre: "John"
    });
}

let imgs = document.querySelectorAll("img");
console.log(imgs);

for (const key in imgs) {
    if (Object.prototype.hasOwnProperty.call(imgs, key)) {
        const element = imgs[key];
        element.addEventListener("click", deformar);
    }
}

function deformar(params) {
    console.log(params.target);
    params.target.classList.toggle("deformar");
}