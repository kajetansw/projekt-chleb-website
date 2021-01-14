export default async (...args: [RequestInfo, RequestInit]): Promise<unknown> => {
  const res = await fetch(...args);
  return res.json();
};
