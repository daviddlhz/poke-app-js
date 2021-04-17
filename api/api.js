export async function getData(url) {
  const response = await fetch(url);
  const body = await response.json();
  return body;
}
