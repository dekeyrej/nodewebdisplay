let Config

console.log(process.env.REACT_APP_DEV);
if (process.env.REACT_APP_DEV == 1) {
    console.log("DEV MODE");
    Config = {
        "api_host": "192.168.247.227",
        "api_port": "3002"
    };
} else {
    console.log("PROD MODE");
    Config = {
        "api_host": "192.168.86.49",
        "api_port": "3002",
    };
}

export default Config