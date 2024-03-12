import { Model, DataTypes } from 'sequelize';
import sequelize from './sequelize.js';

class Api extends Model {
    public id!: number;
    public title!: string;
    public content?: ApiContent;
}

Api.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Api',
        tableName: 'api',
        timestamps: true,
    }
);

export interface ApiBodyText {
    type: "text";
    content: string;
};

export interface ApiBodyHeader {
    type: "header";
    level: 1 | 2 | 3 | 4 | 5 | 6;
    content: string;
};

export interface ApiBodyWarning {
    type: "warning";
    title: string;
    content: string;
};

export interface ApiBodyCategories {
    type: "category";
    categories: Array<Category>;
};

export interface Category {
    title: string;
    content: Array<ApiBody>;
};

export interface ApiBodyCode {
    type: "code";
    content: string;
};

export type ApiBody = ApiBodyText | ApiBodyHeader | ApiBodyWarning | ApiBodyCategories | ApiBodyCode;

export interface ApiContent {
    title: string;
    description: string;
    body: Array<ApiBody>;
}

export default Api;
