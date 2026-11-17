// The bill. Calculates food total, 5% GST, and the grand total.
function billSummary(cart, menu) {
  const food = cartTotal(cart, menu);
  const gstRate = 0.05;
  const gst = food * gstRate;
  const total = food + gst;
  
  return { food, gstRate, gst, total };
}
