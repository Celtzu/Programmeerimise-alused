var tellimus = {
    "id": 2113,
    "orderNumber": "E210126001",
    "createdAt": "2021-01-26 16:04:24",
    "clientName": "Kalle Tali",
    "deliveryType": "Omniva smartpost",
    "deliveryValue": 178,
    "rows": [
      {
        "article_id": 31,
        "name": "Kohvimasin De'Longhi Dolce Gusto Piccolo EDG100.W",
        "product_code": "257549",
        "price": 49.1666666667,
        "amount": 1,
        "vat": 0.2
      },
      {
        "article_id": 23420,
        "name": "Kohvikapslid Nescafe Dolce Gusto Espresso Intenso, 128 g, 16 tk",
        "product_code": "355836",
        "price": 5.0666666667,
        "amount": 2,
        "vat": 0.2
      },
      {
        "article_id": 23421,
        "name": "Kohvikapslid Nescafe Dolce Gusto Latte Macchiato, 194 g, 16 tk",
        "product_code": "000000000501267301",
        "price": 5.825,
        "amount": 1,
        "vat": 0.2
      }
    ]
  }
  
  // Loop käib nii mitu korda kui pikk on rows array(ehk hetkel 3)

  let total = 0;

for(let index = 0; index<tellimus.rows.length; index++){
  
  let itemName = tellimus.rows[index].name;
  let itemAmount = tellimus.rows[index].amount;
  let itemPrice = tellimus.rows[index].price;
  let itemSum = itemAmount * itemPrice;
  let vat = tellimus.rows[index].vat;

  let priceIncVat = itemSum + (itemSum * vat);

  total += priceIncVat;

  console.log("Item: " + itemName + 
              "\nAmount: " + itemAmount + 
              "\nPrice: " + itemPrice +
              "\nSum: " + itemSum)
            
}

console.log("Total: " + total)