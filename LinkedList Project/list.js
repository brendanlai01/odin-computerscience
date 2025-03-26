import { Node } from "./node";

export class linkedList {
    constructor(head = null){
        this.head = head;
    }

    append(value){
        let newnode=new Node(value);
        if(this.head === null){
            this.head = newnode;
            return;
        }
        let current = this.head;
        while(current.nextNode){
            current = current.nextNode;
        }
        current.nextNode = newnode;   
    }

    prepend(value){
        let newnode = new Node(value);
        if(this.head === null){
            this.head = newnode;
            return;
        }
        let current = this.head;
        this.head = newnode;
        newnode.nextNode = current;
        return this.toString();
    }

    size(){
        let current = this.head;
        let count = 0;
        while(current){
            current = current.nextNode;
            count++;
        }
        return count;
    }

    head(){
        return this.head;
    }

    tail(){
        let current = this.head;
        while(current){
            if(current.nextNode === null){
                return current;
            }
            current = current.nextNode;
            continue;
        }
        return;
    }

    at(index){
        let current = this.head;
        let count = 0;
        while(current){
            if(count === index){
                return current.value;
            }
            current = current.nextNode;
            count++;
        }
        return "Does not exist";
    }

    pop(){

    }

    contains(value){
        let current = this.head;
        if(current.value === value){
            return true;
        }
        current = current.nextNode;
        while(current){
            if(current.value === value){
                return true;
            }else if(current.value !== value){
               current = current.nextNode;
               continue;
            }
        }
        return false;
    }

    find(value){
        let current = this.head;
        let count = 0;
        if(current.value === value){
            return count;
        }
        current = current.nextNode;
        while(current){
            count++;
            if(current.value === value){
                return count;
            }else if(current.value !== value){
               current = current.nextNode;
               continue;
            }
        }
        return null;
    }

    toString(){ /** The format should be: ( value ) -> ( value ) -> ( value ) -> null */

    }

}