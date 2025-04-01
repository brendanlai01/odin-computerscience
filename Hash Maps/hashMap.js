export class Hash{
    
    constructor(capacity, loadFactor){
        this.capacity = capacity;
        this.loadFactor = loadFactor;
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