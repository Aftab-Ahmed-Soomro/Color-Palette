function colorPalette() {
    let main = document.querySelector('#main')
    let colors = [
        "Red",
        "Green",
        "Blue",
        "Aquamarine",
        "Purple",
        "Orange",
        "Pink",
        "Brown",
        "Black",
        "Cyan",
        "Magenta",
        "Lime",
        "Olive",
        "Navy",
        "Teal",
        "Maroon",
        "Coral",
        "Turquoise",
        "Indigo",
        "Crimson",
        "Salmon",
        "Gold",
        "Lavender",
        "Plum"
    ]
    
    for (let i = 0; i < 24; i++) {
    main.innerHTML += `<div style = "width:16.6667%;height:146px;background-color:${colors[i]};border:1px solid #fff";><p style="margin-right:12px;margin-top:10px;display:flex;justify-content:end;align-items:end;">${colors[i]}</p><button onclick="copy('${colors[i]}')" class="button" style="">COPY</button></div>`
    }
}

colorPalette();

function copy (values) {
    navigator.clipboard.writeText(values);
    Swal.fire({
        icon: "success",
        title: "Color Copied!",
        showConfirmButton: false,
        timer: 1500
    });
}