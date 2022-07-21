/* Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]

Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []

Output -> -1 */

let array  = [1, 3, 4, 6, 80, 33, 23, 90];

    function inicio(array) {
        if (array.length === 0) {
            console.log(-1);
        }else{
            for (let i = 0; i < array.length; i++) {
                if (array[i]%2 === 0) {
                    array[i] = 0;
                }    
            }
            console.log(array);
        }
    }


inicio(array);    

        
    

    

