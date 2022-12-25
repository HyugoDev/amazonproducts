

export async function GetProducts() {
  const res = await fetch('http://127.0.0.1:3000/product')

  const data = await res.json()

  return data.Products
};

