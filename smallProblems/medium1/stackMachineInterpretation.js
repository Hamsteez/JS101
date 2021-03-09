/* eslint-disable max-lines-per-function */
const LIST_OF_CMDS = ['PUSH', 'ADD', 'SUB', 'MULT', 'DIV', 'MOD', 'POP', 'PRINT'];
const EMPTY_STACK_ERROR = ['ADD', 'SUB', 'MULT', 'DIV', 'MOD', 'POP'];

function minilang(strOfCmds) {
  let valueTracker = {
    register: 0,
    stack: [],
  };
  let arrOfCmds = strOfCmds.split(' ');
  for (let counter = 0; counter < arrOfCmds.length; counter++) {
    if (!(Number.isInteger(Number(arrOfCmds[counter]))) &&
        !LIST_OF_CMDS.includes(arrOfCmds[counter])) {
      console.log('An appropriate value was not inputted.');
      break;
    }
    let error = errorHandling(arrOfCmds[counter], valueTracker);
    if (!error) {
      commands(arrOfCmds[counter], valueTracker);
    } else {
      console.log(undefined);
      return undefined;
    }
  }
  return valueTracker;
}

minilang('POP PRINT');

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

function errorHandling(cmd, valueTracker) {
  return (valueTracker.stack.length === 0 && EMPTY_STACK_ERROR.includes(cmd));
}

function commands(cmd, valueTracker) {
  switch (cmd) {
    case 'PUSH':
      push(valueTracker);
      break;
    case 'ADD':
      add(valueTracker);
      break;
    case 'SUB':
      sub(valueTracker);
      break;
    case 'MULT':
      mult(valueTracker);
      break;
    case 'DIV':
      div(valueTracker);
      break;
    case 'MOD':
      mod(valueTracker);
      break;
    case 'POP':
      pop(valueTracker);
      break;
    case 'PRINT':
      print(valueTracker);
      break;
    default:
      int(cmd, valueTracker);
  }
}

function int(cmd, valueTracker) {
  valueTracker.register = Number(cmd);
}

function push(valueTracker) {
  valueTracker.stack.push(valueTracker.register);
}

function add(valueTracker) {
  let poppedVal = valueTracker.stack.pop();
  valueTracker.register += poppedVal;
}

function sub(valueTracker) {
  let poppedVal = valueTracker.stack.pop();
  valueTracker.register -= poppedVal;
}

function mult(valueTracker) {
  let poppedVal = valueTracker.stack.pop();
  valueTracker.register *= poppedVal;
}

function div(valueTracker) {
  let poppedVal = valueTracker.stack.pop();
  valueTracker.register = Math.floor(valueTracker.register / poppedVal);
}

function mod(valueTracker) {
  let poppedVal = valueTracker.stack.pop();
  valueTracker.register %= poppedVal;
}

function pop(valueTracker) {
  let poppedVal = valueTracker.stack.pop();
  valueTracker.register = poppedVal;
}

function print(valueTracker) {
  console.log(valueTracker.register);
}

