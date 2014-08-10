/* global game */
/**
* load assets
*/
var app = app || {};

app.loadState = {
    preload: function() {
        var loadingLabel = game.add.text(game.world.centerX, game.world.centerY - 40, 'loading...', { font: '30px Arial', fill: '#fff' });
        loadingLabel.anchor.setTo(0.5, 0.5);

        // progress bar
        var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
        progressBar.anchor.setTo(0.5, 0.5);
        game.load.setPreloadSprite(progressBar);

        // load all images
        // game.load.image('player', '/img/player.png');
        game.load.spritesheet('player', '/img/player2.png', 20, 20);
        game.load.image('enemy', '/img/enemy.png');
        game.load.image('coin', '/img/coin.png');
        game.load.image('wallH', '/img/wallHorizontal.png');
        game.load.image('wallV', '/img/wallVertical.png');
        game.load.image('pixel', '/img/pixel.png');
        game.load.spritesheet('mute', '/img/muteButton.png', 28, 22);

        game.load.image('background', '/img/background.png');

        game.load.audio('jump', ['/audio/jump.ogg', '/audio/jump.mp3']);
        game.load.audio('dead', ['/audio/dead.ogg', '/audio/dead.mp3']);
        game.load.audio('coin', ['audio/coin.ogg', '/audio/coin.mp3']);
    },

    create: function() {
        // start menu
        game.state.start('menu');
    }
};
