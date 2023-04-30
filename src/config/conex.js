import { createPool } from "mysql2/promise"

export const Pool = createPool({
    host: 'localhost',
    database: "fixpress",
    password: "",
    user: "root"
})
