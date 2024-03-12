import Api from "../../../../entities/api.entity.js";

export interface ApiReturnSuccess {
    success: true;
    api: Api | Api[];
}

export interface ApiReturnError {
    success: false;
    error: string;
}

type ApiReturn = ApiReturnSuccess | ApiReturnError;

export default ApiReturn;
