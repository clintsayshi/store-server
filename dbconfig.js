const config = {
  user: "connect",
  password: "password",
  server: "localhost",
  database: "sportie",
  options: {
    trustedConnection: true,
    enableArithAbort: true,
    instancename: "MSSQLSERVER",
  },
  port: 1433,
};

module.exports = config;
