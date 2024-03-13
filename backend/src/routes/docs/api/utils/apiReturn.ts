export interface ApiReturnSuccess {
    success: true;
    title: string | Array<string>;
    content?: string;
}

export interface ApiReturnError {
    success: false;
    error: string;
}

type ApiReturn = ApiReturnSuccess | ApiReturnError;

export default ApiReturn;
