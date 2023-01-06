import { Client } from 'pg';

import keys from './key';

const pool = new Client(keys.database);

pool.connect()
.then(() =>{
    console.log("database connected");
})
.catch(err => {
    console.log(err);
});

pool.on('error', () => {
    pool.connect()
    .then(() =>{
        console.log("database reconnected");
    })
    .catch(err => {
        console.log(err);
    });
});
export default pool;