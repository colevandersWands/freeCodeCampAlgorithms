const denominations = [
  { name: 'ONE HUNDRED', value: 100.00 },
  { name: 'TWENTY', value: 20.00 },
  { name: 'TEN', value: 10.00 },
  { name: 'FIVE', value: 5.00 },
  { name: 'ONE', value: 1.00 },
  { name: 'QUARTER', value: 0.25 },
  { name: 'DIME', value: 0.10 },
  { name: 'NICKEL', value: 0.05 },
  { name: 'PENNY', value: 0.01 },
];

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  const totalCid = cid.reduce((sum, currencyType) => sum + currencyType[1], 0);

  if (totalCid < change) {
    return {status: 'INSUFFICIENT_FUNDS', change: []};
  }

  if (totalCid === change) {
    return {status: 'CLOSED', change: [...cid]};
  }

  cid = cid.reverse();

  const result = denominations.reduce((acc, next, index) => {
    let currentValue = 0;

    while (change >= next.value && cid[index][1] >= next.value) {
      currentValue += next.value;
      change -= next.value;
      change = Math.round(change * 100) / 100;
      cid[index][1] -= next.value;
    }

    if (currentValue > 0) {
      acc.push([next.name, currentValue]);
    }

    return acc;
  }, []);

  if (result.length < 1 || change > 0) {
    return {status: 'INSUFFICIENT_FUNDS', change: []};
  }

  return {status: 'OPEN', change: result};
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);