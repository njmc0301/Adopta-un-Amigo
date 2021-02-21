import { http, serverUrls } from '../config'

const getPerros = async () => {
  const res = await http.get(serverUrls.perros).catch(console.error);
  return res ? res.data : null;
};

const removePerros = async (perroId) => {
  const res = await http.delete(`${serverUrls.perros}/${perroId}`).catch(console.error);
  return res ? res.data : null
}

export { getPerros, removePerros }