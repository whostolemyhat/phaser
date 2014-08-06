/**
* Load progress bar
* Set some generic settings
* Call load state
*/
/* global game, Phaser */
var app = app || {};

app.bootState = {
    preload: function() {
        game.load.image('progressBar', '/img/progressBar.png');
    },

    create: function() {
        game.stage.backgroundColor = '#3498db';
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // start loading state
        game.state.start('load');
    }
};
