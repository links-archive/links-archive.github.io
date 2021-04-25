function createPage() {
    let array    = [
        ["", "..."],
        ["index.html", "На главную"],
        ["linux.html", "Linux"],
        ["android.html", "Android"]
    ];
    let select   = document.getElementById('navi');
    let filename = location.pathname.split('/').pop();//.slice(0, -5);
    let title    = document.getElementById('title');
    array.forEach(function(item, i) {
        let option   = document.createElement("option");
        option.value = item[0];
        option.textContent = item[1];
        select.append(option);

        if(filename == item[0]) {
            title.textContent = item[1];
        }
    });
}

function selectOpt(value) {
    location = value;
}

createPage();