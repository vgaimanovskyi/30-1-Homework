
// 1. Создать HTML-страницу для отображения/редактирования текста. При открытии страницы текст отображается с помощью тега div.
// При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать.
// При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом.
// Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.
let div = document.getElementById("div").childNodes;
let text = div[0].textContent;
document.addEventListener("keydown", function (event) {
    if ((event.ctrlKey || event.metaKey) && event.code == "KeyE") {
        event.preventDefault();
        let result = `<textarea id="textarea">${text}</textarea>`;
        document.getElementById("task-1").innerHTML = result;
    }
});
document.addEventListener("keydown", function (event) {
    let textarea = document.getElementById("textarea").value;
    if ((event.ctrlKey || event.metaKey) && event.code == "NumpadAdd") {
        event.preventDefault();
        let result = `<div id="div">${textarea}</div>`;
        document.getElementById("task-1").innerHTML = result;
    }
});

// 2. Создать HTML-страницу с большой таблицей. При клике по заголовку колонки, необходимо отсортировать данные по этой колонке.
// Учтите, что числовые значения должны сортироваться как числа, а не как строки.
// !! error !!
function sortTable() {
    const table = document.getElementById("table");
    let rows = table.rows;
    let arr = [];
    let cells;
    for (let tr = 1; tr < rows.length; tr++) {
        cells = rows[tr].cells;
        arr.push(cells[0].textContent);
        arr.sort();
    };
    document.getElementById("table").innerHTML = arr.join("<br>");
};

// 3. Создать HTML-страницу с блоком текста в рамочке.
// Реализовать возможность изменять размер блока, если зажать мышку в правом нижнем углу и тянуть ее дальше.
