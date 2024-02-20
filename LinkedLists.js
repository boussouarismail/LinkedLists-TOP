class LinkedLists {
    constructor(){
        this.head = new Node();
        this.size = 0;
    }
    append (value) {
        let newNode = new Node(value);
        let tail = this.head;
        while (tail.nextNode) {
            tail=tail.nextNode;  
        }
        tail.nextNode = newNode;
        this.size++;
    }

    prepend (value) {
        let newNode = new Node(value);
        newNode.nextNode = this.head.nextNode;
        this.head.nextNode = newNode;
        this.size++;
    }

    Size(){
        return this.size;
    }

    Head(){
        if(this.head.nextNode){
            return this.head.nextNode.value;
        }else{
            return 'empty list'
        }
        
    }

    tail (){
        let tail = this.head;
        while (tail.nextNode) {
            tail=tail.nextNode;  
        }
        return tail.value;
    }

    at (index){
        let node = this.head;
        for (let i = -1; i < index; i++) {
            if (node.nextNode) {
                node = node.nextNode;    
            }else{
                return'index not exist';
            }
              
        }
        return node.value;
    }

    pop(){
        let node = this.head;
        if (!node.nextNode) {
            console.log('empty list')
        }
        while(node.nextNode){
            if (!node.nextNode.nextNode) {
                node.nextNode = null   
            }else{
                node = node.nextNode;
            }
        }
    }

    contains (value){
        let node = this.head;
        while (node.nextNode) {
            node = node.nextNode;
            if (node.value === value) {
                return true;
            }
        }
        return false;
    }

    finde (value){
        let node = this.head;
        let index = -1;
        while (node.nextNode) {
            index++;
            node = node.nextNode;
            if (node.value == value) {
                return index;
            }
        }
        return null;
    }

    toString(node = this.head){
        if (!node.nextNode) {
            return` null`
        }
        node = node.nextNode;
        return `( ${node.value} )-> ${this.toString(node)}`;
    }

    insertAt(value, index){
        if (index>this.size) {
            index = this.size;
        }
        let newnode = new Node(value);
        let node = this.head;
        for (let i = 1; i <= index; i++) {
           if (node.nextNode) {
                node = node.nextNode;
           }
        }
        newnode.nextNode = node.nextNode;
        node.nextNode = newnode;
    }

    removeAt(index){
        if (index>this.size) {
            index = this.size;
        }
        let node = this.head;
        for (let i = 1; i <= index; i++) {
           if (node.nextNode) {
                node = node.nextNode;
           }
        }
        node.nextNode = node.nextNode.nextNode;
    }
}

class Node {
    constructor(value=null){
        this.value = value;
        this.nextNode = null;
    }
}


let myList = new LinkedLists();
for (let index = 1; index <= 10; index++) {
    myList.append(index);     
}

myList.prepend(0);

console.log(myList.finde(1));
console.log('the size is :' + myList.Size());
console.log(myList.toString());
myList.pop();
myList.insertAt('sneaky element',9)
console.log(myList.toString());
myList.removeAt(9)
console.log(myList.toString());
myList.removeAt(0)
console.log(myList.toString());
console.log('the first element is : '+myList.Head());
console.log('the last element is : '+myList.tail());
console.log('the element n 2 is : '+myList.at(1));
console.log(myList.contains(6));
