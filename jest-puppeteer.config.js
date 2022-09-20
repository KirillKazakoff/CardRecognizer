module.exports = {
    launch: {
        headless: process.env.HEADLESS !== 'false',
    },
    server: {
        command: 'yarn start --port 9002',
        port: 9002,
    },
};
