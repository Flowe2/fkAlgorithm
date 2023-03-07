/*
* 
*/

function Node(val){
    this.val = val;
    this.next = null;
}
function List(){
    this.head = null;
    this.tail = null;
    this.length = 0;
}
List.prototype.add = function(newNode){
    if(this.length != 0){
        this.tail.next = newNode
        this.tail = newNode;
        this.length++;
    }else{
        this.head = newNode;
        this.tail = newNode
        this.length = 1;
    }
}
let list = new List();
let node1 = new Node(1);
list.add(node1);

console.log(list);
