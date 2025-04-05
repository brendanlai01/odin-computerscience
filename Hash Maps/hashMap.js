export class Hash{
    #buckets;
    #capacity;
    #loadFactor;
    
    constructor(capacity = 16, loadFactor = 0.75){
        this.#capacity = capacity;
        this.#loadFactor = loadFactor;
        this.#buckets = new Array(capacity);
        this.size = 0;
    }

    #checkBounds(index){
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
          }
    }

    #checkBalance(){
        if (this.size >= this.#buckets * this.#loadFactor) {
            this.#buckets[this.#capacity * 2] = null;
        }
    }

    hash(key){
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode % this.capacity;
    }

    set(key, value){

    }

    get(key){

    }

    has(key){

    }

    remove(key){

    }

    length(){

    }

    clear(){

    }

    keys(){

    }

    values(){
        
    }

    entries(){ /** returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]] */

    }
}