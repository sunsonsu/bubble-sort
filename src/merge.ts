
export function merge(collection_1: number[], collection_2: number[], collection_3: number[]) : number[] {
    let combinedArray: number[] = [...collection_1, ...collection_2, ...collection_3];
    
    for (let i=0; i< combinedArray.length-1; i++){
        for (let j=0; j < combinedArray.length-1; j++){
            let current = combinedArray[j];
            let next = combinedArray[j+1];

            if(current != undefined && next != undefined){
                if (current > next){
                    let temp = combinedArray[j]; 
                    combinedArray[j] = next;
                    combinedArray[j+1] = current;
                }
            }
        }
    }
    return combinedArray;
}


console.log(merge([0, 1, 2, 3], [11, 10 ,9, 8], [4, 5, 6, 7]))