var myarr = [];
function  Words(){
myarr.push(document.getElementById("wordInput").value);

}
var count = 0;
function showMe(){
   var myNode = document.getElementById("root");
   while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
    myarr.forEach(function(item){
        var text = document.createTextNode(item)
        var newItem = document.createElement("li")
        newItem.appendChild(text)
        document.getElementById("root").appendChild(newItem)
    })


    // document.getElementById("wordInput").appendChild(newItem)
    // count++ //increased the value of count by 1
}
