export class ParceirosModel {
    id: number = 0;
    nome: string = '';
    codigo: string = '';
    autenticacaoId: number=0;
    conexaoId: number=0;
    conexaoHost: any;
    conexaoPorta: any;
    usuario: string = '';
    senha: string = '';
    senhaPrivada: any= '';
    chavePrivada: any= '';
    dataDaCriacao: any;
    dataDaAlteracao: any;
    autenticacao: string='';
}
