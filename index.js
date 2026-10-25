const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'R0dzinkaPL.aternos.me', 
    port: 25565,
    username: 'Bot_Franek',
    version: '1.21.1'
  });

  bot.on('spawn', () => {
    console.log('Bot wszedł na serwer!');
  });

  bot.on('end', () => {
    console.log('Bot rozłączony. Reconnect za 10s...');
    setTimeout(createBot, 10000);
  });

  bot.on('error', (err) => console.log('Błąd:', err));
}

createBot();
