const matrixExample = [
   [ 1, 2, 3, 4 ],
   [ 4, 5, 6, 5 ],
   [ 7, 8, 9, 7 ],
   [ 7, 8, 9, 7 ]
 ];

function sumUpDiagonals(matrix) {
    let sumMain = 0;
    let sumSec = 0;
    var j = 0;
    var k = 1;

    for (let i = 0; i < matrixExample.length; i++) {
    	for(j; j < matrixExample[i].length; j++) {
    		if (j == i) {
    			sumMain += matrixExample[i][j];
    			sumSec += matrixExample[i][matrixExample[i].length - k];
    			k++; 
    			break;
    		}
    	}
    }
    return {"sumMain": sumMain, "sumSec": sumSec};
}

console.log(sumUpDiagonals(matrixExample))