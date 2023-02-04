import {suma, multiplica} from './controllers/controller.js'
import chalk from 'chalk';

const sum = suma (1, 2)
console.log(sum);

const mult = multiplica (4, 5)
console.log(mult);
console.log(chalk.green(mult, sum));