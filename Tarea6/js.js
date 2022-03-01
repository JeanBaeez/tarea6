var noticias;

function cargarNoticias() {

    fetch("https://remolacha.net/wp-json/wp/v2/posts?_embed")
        .then((response) => {
            if (response.ok) {

                return response.json();
            } else {
                throw new Error("NETWORK RESPONSE ERROR");
            }
        }).then(data => Noticias(data))

}






function Save(data) {
    var info = JSON.parse(localStorage.getItem("data"));
    if (info != null) {
        localStorage.removeItem("data");

    } else {
        cargarNoticias();
    }


}

function Noticias(data) {
    noticias = data;




    var container = document.createElement("div");
    container.setAttribute("class", "container");
    container.setAttribute("id", "container");
    container.setAttribute("style", "margin-top:20px;");
    container.setAttribute("style", "margin-bottom:20px;");

    document.body.appendChild(container);
    var div = document.createElement("div");

    div.setAttribute("class", "noticias");
    div.setAttribute("class", "");

    container.appendChild(div);

    var row = document.createElement("div");
    row.setAttribute("class", "row ");
    div.appendChild(row);


    for (var i = 0; i < noticias.length; i++) {



        var col = document.createElement("div");
        col.setAttribute("class", "col-6 col-sm-4 d-flex justify-content-center");
        col.setAttribute("style", "display:inline-block;");

        row.appendChild(col);
        var carddiv = document.createElement("div");
        carddiv.setAttribute("class", "maincard");
        carddiv.setAttribute("style", "display:inline-block; !important;");
        carddiv.setAttribute("data-toggle", "modal");
        carddiv.setAttribute("data-target", "#modal-noticia");
        carddiv.setAttribute("onclick", "verNoticia(" + i + ")");
        col.appendChild(carddiv);
        var card = document.createElement("div");
        card.setAttribute("class", "card");


        card.setAttribute("id", "card");
        carddiv.appendChild(card);
        var cardbody = document.createElement("div");
        cardbody.setAttribute("class", "card-body");
        card.appendChild(cardbody);
        var img = document.createElement("img");
        img.setAttribute("class", "card-img-top");
        if (noticias[i]._embedded["wp:featuredmedia"] == null) {
            img.setAttribute("src", 'https://st.depositphotos.com/1987177/3470/v/450/depositphotos_34700099-stock-illustration-no-photo-available-or-missing.jpg');
        } else {
            img.setAttribute("src", noticias[i]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url);
        }

        cardbody.appendChild(img);
        var cardtitle = document.createElement("h5");
        cardtitle.setAttribute("class", "card-title");
        cardtitle.innerHTML = noticias[i].title.rendered;
        cardbody.appendChild(cardtitle);
        var cardtext = document.createElement("p");
        cardtext.setAttribute("class", "card-text");
        cardtext.innerHTML = noticias[i].excerpt.rendered;
        cardbody.appendChild(cardtext);
        var cardlink = document.createElement("a");
        cardlink.setAttribute("class", "btn btn-primary");
        cardlink.setAttribute("href", noticias[i].link);
        cardlink.innerHTML = "Leer más";
        cardbody.appendChild(cardlink);

    }


}
function verNoticia(i) {
    $('#modal-noticia').modal()

    var modalTitle = document.getElementById("modal-title");
    modalTitle.innerHTML = noticias[i].date;

    var modalimg = document.getElementById("modal-img");


    // if (noticias[i]._embedded["wp:featuredmedia"] == null) {
    //     modalimg.setAttribute("src", 'https://st.depositphotos.com/1987177/3470/v/450/depositphotos_34700099-stock-illustration-no-photo-available-or-missing.jpg');
    //     modalimg.setAttribute("class", "img");

    // } else {
    //     modalimg.setAttribute("src", noticias[i]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url);
    // }
    var modalbody = document.getElementById("modal-body");
    modalbody.innerHTML = noticias[i].content.rendered;

    var modalfooter = document.getElementById("leermas");
    modalfooter.setAttribute("href", noticias[i].link);







    // var modalDiv = document.createElement("div");
    // modalDiv.setAttribute("class", "modal fade");
    // modalDiv.setAttribute("id", "exampleModal");
    // modalDiv.setAttribute("tabindex", "-1");
    // modalDiv.setAttribute("role", "dialog");
    // modalDiv.setAttribute("aria-labelledby", "exampleModalLabel");
    // modalDiv.setAttribute("aria-hidden", "true");
    // var modalDialog = document.createElement("div");
    // modalDialog.setAttribute("class", "modal-dialog");
    // modalDialog.setAttribute("role", "document");
    // modalDiv.appendChild(modalDialog);
    // var modalContent = document.createElement("div");
    // modalContent.setAttribute("class", "modal-content");
    // modalDialog.appendChild(modalContent);
    // var modalHeader = document.createElement("div");
    // modalHeader.setAttribute("class", "modal-header");
    // modalContent.appendChild(modalHeader);
    // var modalTitle = document.createElement("h5");
    // modalTitle.setAttribute("class", "modal-title");
    // modalTitle.innerHTML = noticias[i].title.rendered;
    // modalHeader.appendChild(modalTitle);
    // var modalBody = document.createElement("div");
    // modalBody.setAttribute("class", "modal-body");
    // modalContent.appendChild(modalBody);
    // var modalText = document.createElement("p");
    // modalText.innerHTML = noticias[i].content.rendered;
    // modalBody.appendChild(modalText);
    // var modalFooter = document.createElement("div");
    // modalFooter.setAttribute("class", "modal-footer");
    // var footeButton = document.createElement("button");
    // footeButton.setAttribute("type", "button");
    // footeButton.setAttribute("class", "btn btn-secondary");
    // footeButton.setAttribute("data-dismiss", "modal");
    // footeButton.innerHTML = "Cerrar";
    // modalFooter.appendChild(footeButton);
    // modalContent.appendChild(modalFooter);
    // document.body.appendChild(modalDiv);

}


function atras() {
    history.back();
}


function GetBinance() {
    setInterval(() => {
        fetch("https://api2.binance.com/api/v3/ticker/24hr")
            .then((response) => {
                if (response.ok) {

                    return response.json();
                } else {
                    throw new alert("probablemente me banearion la cuenta por muchas peticiones");
                }
            }).then(data => LoadBinance(data))

    }, 10000);

}

function LoadBinance(data) {





    var container = document.createElement("div");
    container.setAttribute("class", "container");
    container.setAttribute("id", "container");
    container.setAttribute("style", "margin-top:20px;");
    container.setAttribute("style", "margin-bottom:20px;");
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary");
    button.setAttribute("onclick", "atras()");
    button.innerHTML = "Atrás";
    document.body.appendChild(button);
    var table = document.createElement("table");
    table.setAttribute("class", "table table-striped table table-dark");
    table.setAttribute("id", "table");
    container.appendChild(table);
    var thead = document.createElement("thead");
    table.appendChild(thead);
    var tr = document.createElement("tr");
    thead.appendChild(tr);
    var th = document.createElement("th");
    th.innerHTML = "Symbol";
    tr.appendChild(th);
    var th = document.createElement("th");
    th.innerHTML = "Price";
    tr.appendChild(th);
    var th = document.createElement("th");
    th.innerHTML = "Change";
    tr.appendChild(th);
    var th = document.createElement("th");
    th.innerHTML = "Volume";
    tr.appendChild(th);
    var th = document.createElement("th");
    th.innerHTML = "MarketCap";
    tr.appendChild(th);
    var tbody = document.createElement("tbody");
    table.appendChild(tbody);
    for (var i = 0; i < data.length; i++) {
        var tr = document.createElement("tr");
        tbody.appendChild(tr);
        var td = document.createElement("td");
        td.innerHTML = data[i].symbol;
        tr.appendChild(td);
        var td = document.createElement("td");
        td.innerHTML = data[i].lastPrice;
        tr.appendChild(td);
        var td = document.createElement("td");
        td.innerHTML = data[i].priceChangePercent;
        tr.appendChild(td);
        var td = document.createElement("td");
        td.innerHTML = data[i].volume;
        tr.appendChild(td);
        var td = document.createElement("td");
        td.innerHTML = data[i].marketCap;
        tr.appendChild(td);


    }

    document.body.appendChild(container);



}
