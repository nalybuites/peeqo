const config = require('config/config');
const actions = require('js/actions/actions');
const playMusic = require('playmusic');
const Jamy = require('jamy');

let pm = null;
let enabled = true;

function isEnabled() {
    return enabled;
}

function validate() {
    if (config.google_play_music == null || config.google_play_music.username == null || config.google_play_music.password == null) {
        console.error('Google Play Music: Invalid config');
        enabled = false;
        return false;
    }

    return true;
}

function init() {
    if (validate() == false) {
        return;
    }

    pm = new playMusic();
    pm.init({
        email: config.google_play_music.username,
        password: config.google_play_music.password
    }, function(error) {
        if (error) {
           console.error('Google Play Music: Unable to login with provided credentials');
           return;
        }
    });
}

function playArtist(artist) {
    if (!isEnabled) {
        return;
    }

    pm.search(artist, 5, function(error, data) {
        if (error) {
            console.error(error);
            return;
        }

        var song = data.entries.sort(function(a, b) {
            return a.score > b.score;
        }).shift();
        pm.getStreamUrl(song.track.nid, function(error, streamUrl) {
            if (error) {
                console.error(error);
                return;
            }

            const j = new Jamy();
            j.play({ url: streamUrl});
            actions.setAnswer({
                type: 'remote',
                queryTerms: [ 'music' ],
                cbDuring: null,
                text: 'Google Play Music'
            });
        });
    });
}

module.exports = {
    init,
    playArtist
}