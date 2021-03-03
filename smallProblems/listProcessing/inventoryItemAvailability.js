let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(inventoryItem, transactions) {
  let newArr = [];
  transactions.forEach(obj => {
    if (obj['id'] === inventoryItem) {
      newArr.push(obj);
    }
  });
  return newArr;
}

function isItemAvailable(item, transactions) {
  let idArr = transactionsFor(item, transactions);
  let idTot = 0;
  idArr.forEach(obj => {
    if (obj['movement'] === 'in') {
      idTot += obj['quantity'];
    } else {
      idTot -= obj['quantity'];
    }
  });
  console.log(idTot > 0);
  return idTot > 0;
}

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true