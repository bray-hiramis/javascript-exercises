// Higher Order Functions and Callbacks

const recentOrders = [
   { 
     orderId: "ORD-001", 
     customerName: "Alice", 
     items: [{ name: "Laptop", price: 1000, category: "electronics" }, { name: "Mouse", price: 50, category: "electronics" }],
     isDelivered: true 
   },
   { 
     orderId: "ORD-002", 
     customerName: "Bob", 
     items: [{ name: "Desk Chair", price: 150, category: "furniture" }],
     isDelivered: false 
   },
   { 
     orderId: "ORD-003", 
     customerName: "Charlie", 
     items: [{ name: "Coffee Maker", price: 80, category: "kitchen" }, { name: "Mug", price: 20, category: "kitchen" }],
     isDelivered: true 
   },
   { 
     orderId: "ORD-004", 
     customerName: "Diana", 
     items: [{ name: "Headphones", price: 200, category: "electronics" }],
     isDelivered: false 
   }
];

function generateOrderSummary(orders) {

   const deliveredOrders = orders.filter(order => order["isDelivered"] === true);
   const totalPrice = deliveredOrders.map(total => {
      const sumOfOrders = total["items"].reduce((acc, curr) => acc + curr["price"], 0);
      return {orderId: total["orderId"], customerName: total["customerName"], orderTotal: sumOfOrders};
   })

   const revenue = totalPrice
            .map(rev => rev["orderTotal"])
            .reduce((acc, curr) => acc + curr, 0);

   return {
      completedOrders: totalPrice,
      totalRevenue: revenue
   };
}

console.log(generateOrderSummary(recentOrders));