const tableArr = [1];
const tBody = document.getElementById('tBody');
addRow = () => {
    // let currentSerialNo = document.getElementById("tBody").rows.length
    // console.log(currentSerialNo);
    if (tableArr.length != 0) {
        var lastELem = tableArr[tableArr.length - 1];
        console.log(lastELem);
        var currentElem = lastELem + 1;
    } else if (tableArr.length==0){
        var currentElem = 1;
    }
    tableArr.push(currentElem);
    tBody.innerHTML = '';
    tableArr.map(ele => {
        let tRow = document.createElement('tr');
        let tData1 = document.createElement('td');
        let tData2 = document.createElement('td');
        tData1.innerText = ele;
        tData2.innerHTML = '<button class="btn btn-info" onclick="deleteRow()">Delete</button>';
        tRow.appendChild(tData1);
        tRow.appendChild(tData2);
        tBody.appendChild(tRow);
        
    });
}

let deleteRow = () => {
    tableArr.pop();
    tBody.innerHTML = '';
    tableArr.map(ele => {
        let tRow = document.createElement('tr');
        let tData1 = document.createElement('td');
        let tData2 = document.createElement('td');
        tData1.innerText = ele;
        tData2.innerHTML = '<button class="btn btn-info" onclick="deleteRow()">Delete</button>';
        tRow.appendChild(tData1);
        tRow.appendChild(tData2);
        tBody.appendChild(tRow);
        
    });
}