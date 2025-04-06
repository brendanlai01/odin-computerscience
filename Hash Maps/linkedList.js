import { Node } from "./node.js";

export class linkedList {
    constructor(head = null){
        this.head = head;
    }

    append(key, value){
        let newnode=new Node(key, value);
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

    prepend(key, value){
        let newnode = new Node(key, value);
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
                return current;
            }
            current = current.nextNode;
            count++;
        }
        return "Does not exist";
    }

    pop(){
        let current = this.head;
        while(current){
            if(!current.nextNode.nextNode){
                current.nextNode = null;
                return this.toString();
            }
            current = current.nextNode;
            continue;
        }
        return;
    }

    contains(key){
        let current = this.head;
        if(current.key === key){
            return true;
        }
        current = current.nextNode;
        while(current){
            if(current.key === key){
                return true;
            }else if(current.key !== key){
               current = current.nextNode;
               continue;
            }
        }
        return false;
    }

    find(key){
        let current = this.head;
        let count = 0;
        if(current.key === key){
            return count;
        }
        current = current.nextNode;
        while(current){
            count++;
            if(current.key === key){
                return count;
            }else if(current.key !== key){
               current = current.nextNode;
               continue;
            }
        }
        return null;
    }

    toString(){ /** The format should be: ( value ) -> ( value ) -> ( value ) -> null */
        let current = this.head;
        let string = '';
        while(current){
            if(current.nextNode === null){
                string += `( ${current.value} ) -> null`;
                return string;
            }
            string += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        return string;
    }

}