var myarr = [];
function  Words(){
myarr.push(document.getElementById("wordInput").value);

}
var count = 0;
function showMe(){
    var newItem = document.createElement("li")
     var array.forEach(item => {
        newItem.appendChild(myarr)
    })
    document.getElementById("wordInput").appendChild(newItem)
    count++ //increased the value of count by 1
}

