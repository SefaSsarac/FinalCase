export const getProducts = async () => {
    const response = await fetch('https://api.example.com/products');
    const data = await response.json();
    return data;
  };
  