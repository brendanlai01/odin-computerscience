import { linkedList } from "./linkedList.js";

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
        if (index < 0 || index >= this.#buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
    }

    #checkBalance(){
        if (this.size >= this.#buckets.length * this.#loadFactor) {
            this.#buckets[this.#capacity * 2] = undefined;
            this.#capacity *= 2;
        }
    }

    hash(key){
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode;
    }

    set(key, value){
        let h = this.hash(key);
        let index = h % this.#buckets.length;
        let node = this.#buckets[index];

        if(node === undefined){
            this.#checkBalance();
            this.#checkBounds(index);
            this.#buckets[index] = new linkedList();
            this.#buckets[index].append(key, value);
            this.size++;
            return this.#buckets;
        }
        else if(this.#buckets[index].contains(key)){
            let linkIndex = this.#buckets[index].find(key);
            let linkedNode = node.at(linkIndex);
            return linkedNode.value = value;
        }
        else{
            this.#checkBalance();
            this.#buckets[index].append(key, value);
            this.size++;
        }
    }

    get(key){
        let h = this.hash(key);
        let node = this.#buckets[h % this.#buckets.length];
        
        if(node !== undefined) return node.value;
        else return null;
    }

    has(key){
        let arr = this.#buckets;
        for(let item of arr){
            if(item !== undefined && item.key === key){
                return true;
            }
        }
        return false;
    }

    remove(key){
        let hashCode = hash(key);
        let removeKey = this.#buckets[hashCode].key;
        
        if(!removeKey){
            this.#buckets[hashCode] = null;
            return true;
        }
        else return false;
    }

    length(){
        return `buckets length is: ${this.size} and capacity is ${this.#capacity}`;
    }

    clear(){
        this.#buckets.length = 0;
        return this.#buckets = new Array(this.#capacity);
    }

    keys(){
        let keys = [];

        this.#buckets.forEach((item) =>{
            if(!item){
                keys.push(item.key);
            }
        })
        return keys;
    }

    values(){
        let values = [];
        
        this.#buckets.forEach((item) =>{
            if(!item){
                values.push(item.value);
            }
        })
        return values;
    }

    entries(){ /** returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]] */
        let entries = [];
        
        this.#buckets.forEach((item) =>{
            if(item){
                entries.push(item);
            }
        })
        return entries;
    }
}