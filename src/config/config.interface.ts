export interface environmentObjType{
    port : number;
    mongodb : dbObjType;
}

export interface dbObjType{
    host : string;
    port : number;
    dbname : string; 
}