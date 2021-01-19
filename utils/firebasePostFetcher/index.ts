const firebasePostFetcher = (body: object) => async (url: string, token: string) => {
  const headersConfig = {
    'Content-Type': 'application/json',
    ...(!!token && { token }),
  };
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: new Headers(headersConfig),
    credentials: 'same-origin',
  });

  return res.json();
};

export default firebasePostFetcher;
