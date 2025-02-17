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
    let array = [];
    if(n === 0){ 
        array[n] = n;
        return console.log(array);
    }else if(n < 2){
        array[n] = n;
        return fibsRec(array[n] - 1);
    }
    else{
        return (fibsRec(n-1) + fibsRec(n-2));
    }
}