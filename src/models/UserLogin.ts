
// Armazenamento dos dados ou atributos que estão no banco de dados e no back.
interface UserLogin {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    token?: string | null;

}

export default UserLogin;