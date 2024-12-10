/**
 * mainConfig.ts
 * version 1.0.0
 * 
 * Created on the 25/04/2023
 */


const { PORT = 8080, NODE_ENV = "production", COMPUTER_IP = "" } = process.env

/** Minipix's kids server env config */
export const mainConfig = {
    PORT: PORT,
    NODE_ENV: NODE_ENV,
    COMPUTER_IP: COMPUTER_IP,
    /** avoids doing mistakes by checking every value here */
    production: NODE_ENV === "production",
    development: NODE_ENV === "development",
    test: NODE_ENV === "test",
}