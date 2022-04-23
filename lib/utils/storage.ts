export const storage = async (key: any) => {
  const value = sessionStorage.getItem(key);
  return value ? JSON.parse(value) : undefined;
};
