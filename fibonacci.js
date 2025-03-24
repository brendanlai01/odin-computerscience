function fibs(num){
    let array = [];
    for(let i = 0; i < num; i++){
        if (i === 0){
            array[0] = 0;
            continue;
        }else if(i < 2 && i !== 0){
            array[i] = 1;
            continue;
        }else{
            array[i] = array[i-1] + array[i-2];
            continue;
        }
    }
    return console.log(array);
}

function fibsRec(n){
    console.log("This was printed recursively");
    if (n < 2) {
        return [1];   
    }
    if (n < 3) {
        return [1, 1];
    }
    let arr = fibsRec(n - 1);
    arr.push(arr[n - 2] + arr[n - 3]);
    return arr;
}