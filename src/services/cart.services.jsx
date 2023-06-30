export class CartServices {
  static getAllProductCart = async () => {
    return await fetch("http://localhost:3030/api/cart", { method: "GET" });
  };

  static productAvailability = async (pid, quantity) => {
    return await fetch("http://localhost:3030/api/product/check", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        pid: `${pid}`,
        quantity: quantity,
      }),
    });
  };
}
