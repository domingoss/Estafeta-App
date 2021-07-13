export interface Estafeta{
    id: string;
    nome: string;
    sobrenome: string;
    dataNascimento: string;
    sexo: string;
    bi: string;
    disponibilidade: string;
    contactos: {
        tel1: string;
        tel2: string;
        email: string;
    };
    login: {
        funetica: string;
        password: string;
    };
    data_criacao: string;
}