import axios from 'axios';

const updateOptions = () => {
  if (typeof window === 'undefined') return {};

  if (!window.sessionStorage.user) return {};

  if (Object.keys(window.sessionStorage.user).length === 0) return {};

  const user = JSON.parse(window.sessionStorage.user);

  if (user.token) {
    return {
      headers: {
        Authorization: `Token ${user.token}`,
      },
    };
  }
};
export default async function (url: any) {
  const { data } = await axios.get(url, updateOptions());
  return data;
}
