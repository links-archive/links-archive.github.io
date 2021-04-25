document.getElementById('navi').onchange = function(){
    //window.location.href=this.value;
    console.log(this.value, window.location.href);
};

function create(value, text) {
    let element, child, head, title, select;

    document.createElement("TITLE");
    
    if (value == false) {
        document.title = "Archive: " + title;
    } else {
        document.title = "Archive";
    }    

    element = document.createElement("meta");
    element.name = "viewport";
    element.content = "width=device-width, initial-scale=1";
    document.head.append(element);

    element = document.createElement("link");
    element.rel  = "stylesheet";
    element.href = "http://fonts.googleapis.com/css?family=Raleway:400,300,600";
    document.head.append(element);

    element = document.createElement("link");
    element.rel  = "stylesheet";
    element.type = "text/css";    
    element.href = "files/css/normalize.css";
    document.head.append(element);

    element = document.createElement("link");
    element.rel  = "stylesheet";
    element.type = "text/css";    
    element.href = "files/css/skeleton.css";
    document.head.append(element);

    element = document.createElement("link");
    element.rel  = "icon";
    element.type = "image/svg";
    element.href = "files/favicon.svg";
    document.head.append(element);
    
    element = document.createElement("div");
    element.className = "container";
    document.body.append(element);

    child = document.createElement("div");
    child.className = "row";
    element.append(child);

    head     = document.createElement("section");
    head.className = "header";
    child.append(head);

    title    = document.createElement("h1");
    title.textContent = "Archive";
    head.append(title);

    child.append(document.createElement("hr"));

    title    = document.createElement("h2");
    title.textContent = text;
    head.append(title);

    select   = document.createElement("select");
    select.className="u-full-width";
    select.onchange = function(){
        if (this.value != window.location.href) window.location.href=this.value;
    };

    child.append(select);

    let arr  = ["...", "На главную", "Дистрибутивы Linux", "Android"];

    arr.forEach(function(item, i) {
        let el = document.createElement("option");
        if (i == 0) {
            el.value = "";    
        } else if (i == 1) {
            el.value = "index.html";    
        } else {
            el.value = i + ".html";
        }
        el.textContent = item;
        select.append(el);
    });
}




if (i == "index") {
    title.textContent = array[1][1];
} else if (i >= 1) {
    i++;
    title.textContent = array[i][1];
    console.log(array[i]);
}
console.log(i);