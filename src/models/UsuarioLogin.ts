
// Armazenamento dos dados ou atributos que estão no banco de dados e no back.
interface UsuarioLogin {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    token?: string | null;

}

export default UsuarioLogin;