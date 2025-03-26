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

    }

    tail(){

    }

    at(index){

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

    }

    toString(){ /** The format should be: ( value ) -> ( value ) -> ( value ) -> null */

    }

}