/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const res = [];
  for(let objects in transactions){
    res[transactions[objects].category]=0;
  }
  for(let objects in transactions){
    res[transactions[objects].category]+=transactions[objects].price;
  }
  const ans = [];
  const a = Object.entries(res);
  for(let i in a){
    ans.push({category: a[i][0],totalSpent:a[i][1]});
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
