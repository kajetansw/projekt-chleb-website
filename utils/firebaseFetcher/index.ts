const firebaseFetcher = async (url: string, token: string) => {
  const headersConfig = {
    'Content-Type': 'application/json',
    ...(!!token && { token }),
  };
  const res = await fetch(url, {
    method: 'GET',
    headers: new Headers(headersConfig),
    credentials: 'same-origin',
  });

  return res.json();
};

export default firebaseFetcher;
