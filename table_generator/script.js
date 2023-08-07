function generate(){
    var table=document.createElement("table");

    var numrow=parseInt(document.getElementById("rows").value);
    var numcol=parseInt(document.getElementById("cols").value);

    for(let i=0;i<numrow;i++){
        let row=document.createElement("tr");
        for(let j=0;j<numcol;j++){
            let col=document.createElement("td");
            let text=document.createTextNode("Rows "+ (i+1) + "Cols "+ (j+1));
            col.appendChild(text);
            row.appendChild(col);

        }
        table.appendChild(row);
    }
    var tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML=" ";
    tableContainer.appendChild(table);
}