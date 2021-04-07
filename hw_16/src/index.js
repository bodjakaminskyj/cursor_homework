import {summ} from './hw/hw_01'
import {getSumm} from './hw/hw_02'
import {countLetter} from './hw/hw_03'
import {pairs} from './hw/hw_04'
import {getRandomArray} from './hw/hw_05'
import {calculateWordLetters} from './hw/hw_06'
import {totalTaxes} from './hw/hw_07'
import {ostap} from './hw/hw_08'
import {generateBlocks} from './hw/hw_10'

console.log(summ);
getSumm();
countLetter('a', 'ababahalamaha');
console.log(pairs)
console.log(getRandomArray(15,1,20));
console.log(calculateWordLetters('ababahalamaha'));
console.log(`Загальний податок:`, totalTaxes);
console.log(ostap.getInfo);
generateBlocks(5);


