const createCard = (data, parent, arr) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = data.id;

    const age = document.createElement("div");
    age.className = "age";
    age.innerText = data.age || "кто бы знал...";

    const rate = document.createElement("div");
    rate.className = "rate";
    rate.innerHTML = "<span>⭐</span>".repeat(Math.max(Math.min(data.rate, 10),0));

    const pic = document.createElement("div");
    pic.className = "pic";
    pic.style.backgroundImage = `url(${data.img_link || "image/zamena.jpeg"})`;

    const name = document.createElement("div");
    name.className = "name";
    name.innerText = data.name;

    card.append(pic, age, name, rate);

    parent.append(card);
}