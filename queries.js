// const initOptions = {
//   // Capitalizes all SQL generated
//   capSQL: true,
//   // global event notification;
//   error(error, e) {
//     if (e.cn) {
//       // A connection-related error;

//       // Connections are reported back with the password hashed,
//       // for safe errors logging, without exposing passwords.
//       console.log('CN:', e.cn);
//       console.log('EVENT:', error.message || error);
//     }
//   },
//   // this is to be commited for debugging purposes, but left commented out until you need it
//   // if un-commented, it will print out the resulting query when any query is ran
//   query(e) {
//     console.log(e.query);
//   },
//   connect(client, dc, useCount) {
//     const cp = client.connectionParameters;
//     console.log('Connected to database:', cp.database);
//   },
// };

// const pgp = require('pg-promise')(initOptions);
// const connectionString = process.env.POSTGRES_URI;
// const db = pgp(connectionString);

// module.exports = {
//     getAllChores: getAllChores,
//     getSingleChore: getSingleChore,
//     createChore: createChore,
//     updateChore: updateChore,
//     deleteChore: deleteChore
// }
