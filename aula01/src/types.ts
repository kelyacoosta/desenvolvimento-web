//criar uma tipagem para o Response que possua
// data que deverá ser um objeto -> infos:{} || []
// error que deverá ser um booleano 
// exportar para utilizar na resposta do método get
export interface CustomResponse<T> {
    data: {
        infos: T
    }
    error: boolean
}