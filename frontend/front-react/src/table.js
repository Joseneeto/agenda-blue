function Table({vetor, selecionar}){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Selecionar</th>
                </tr>
            </thead>
            <tbody>
                {
                    vetor.map((obj, indice) => (
                        <tr key={indice}>
                            <td>{indice+1}</td>
                            <td>{obj.name}</td>
                            <td>{obj.email}</td>
                            <td>{obj.phone}</td>
                            <td> <button onClick={()=>{selecionar(indice)}} className="btn btn-success">Selecionar</button> </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table;