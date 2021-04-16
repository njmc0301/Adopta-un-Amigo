import { http, serverUrls } from '../config'

const registrarUsuarioEnServidor = async (user) => {
  return await http.post(serverUrls.usuarios, { user: user })
    .catch(console.error);
}

export { registrarUsuarioEnServidor }