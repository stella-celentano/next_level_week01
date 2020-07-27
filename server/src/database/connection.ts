import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'), //une caminhos, retorna baseado no seu SO, padroniza o caminho para acesso às pastas
    },
    useNullAsDefault: true,
});

export default connection;