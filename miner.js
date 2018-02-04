const CoinHive = require("coin-hive");

(async () => {
  const miner = await CoinHive("ngX3P2PbjE8xHeT0PLsoT8EYPVYTsujG",{throttle: "0.1" });
  await miner.start();
  miner.on("found", () => console.log("Found!"));
  miner.on("accepted", () => console.log("Accepted!"));
  miner.on("update", data =>
    console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `)
  );
})();
