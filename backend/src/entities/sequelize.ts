import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'mysql',
    database: 'docs',
    username: 'root',
    password: 'MCsM2905@',
    host: 'localhost',
});

export default sequelize;
