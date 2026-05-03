let counter = 0;

document.getElementById("fetchBtn").addEventListener("click", function () {
    const loader = document.getElementById("loader");
    const accordion = document.getElementById("resultAccordion");

    loader.style.display = "block";

    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(data => {
            loader.style.display = "none";

            counter++;
            document.getElementById("counter").textContent = counter;

            const itemId = "item" + counter;

            // Lisää Bootstrap accordion -elementti
            accordion.innerHTML += `
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="heading${itemId}">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${itemId}">
                                    Fakta #${counter}
                                </button>
                            </h2>
                            <div id="collapse${itemId}" class="accordion-collapse collapse" data-bs-parent="#resultAccordion">
                                <div class="accordion-body">
                                ${data.value}
                                </div>
                            </div>
                        </div>
                    `;

            // jQuery accordion -versio
            $("#jqueryAccordion").append(`
                        <h3>Fakta #${counter}</h3>
                        <div><p>${data.value}</p></div>
                    `);

            $("#jqueryAccordion").accordion("destroy").accordion();
        })
        .catch(error => {
            loader.style.display = "none";
            alert("Virhe haussa!");
            console.error(error);
        });
});