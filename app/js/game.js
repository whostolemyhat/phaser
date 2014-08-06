/* global Phaser */
var app = app || {};

var game = new Phaser.Game(500, 340, Phaser.AUTO, 'gameDiv');

game.global = {
    score: 0
};

game.state.add('boot', app.bootState);
game.state.add('load', app.loadState);
game.state.add('menu', app.menuState);
game.state.add('play', app.playState);

game.state.start('boot');
