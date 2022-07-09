export const getProductData = async () => {
  const response = await fetch(
    "https://elad-test-1.s3.amazonaws.com/items.json"
  );
  const data = await response.json();

  if (response.status >= 200 && response.status < 300) {
    return data;
  }

  throw new Error(
    JSON.stringify({
      data: data,
      status: response.status,
    })
  );
};
