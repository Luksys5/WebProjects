import { GameInfoProps } from "./components/organisms/GamesCarousel";

const googlePlayImgSrc = 'images/google_play.png';
const itchioImgSrc = 'images/itchio.png';
const globalGamejamImgSrc = 'images/GGJ.png';

export default [
    {
        title: 'Developers hell',
        details: '2D sidescroller mind puzzle game. Game challenges player to get out of the game',
        imageUrl: 'images/games/dev_hell.png',
        links: [{
            viewLink: 'https://devil9.itch.io/developers-hell',
            downloadLink: 'https://devil9.itch.io/developers-hell/download/eyJleHBpcmVzIjoxNTg5MjcyNTEzLCJpZCI6MzQ5NTE4fQ%3d%3d.JJitNFSS6N76pD5XzB84OMFW3io%3d',
            imgSrc: itchioImgSrc
        }]
    },
    {
        title: 'CyberFix',
        details: '2D puzzle android game where player have to fix the cyber-car regarding to the supplied parts',
        imageUrl: 'images/games/cyberfix.png',
        links: [{
            viewLink: 'https://theuniqueproductions.itch.io/cyberfix',
            downloadLink: 'https://theuniqueproductions.itch.io/cyberfix/download/eyJleHBpcmVzIjoxNTg5MjY5MDMzLCJpZCI6NjExMTE2fQ%3d%3d.4lkW9R4B6FZOryzYgFREuxJaMEU%3d',
            imgSrc: itchioImgSrc
        }]
    },
    {
        title: 'Vortex',
        details: 'Hyper Casual 2D game, you play as black hole and eat other planets while white hole can eat you, simple as that',
        imageUrl: 'images/games/vortex.png',
        links: [{
            viewLink: 'https://devil9.itch.io/vortex',
            downloadLink: 'https://devil9.itch.io/vortex/download/eyJleHBpcmVzIjoxNTg5MjY5MTE2LCJpZCI6MzYzMjM1fQ%3d%3d.GkjGAKHT3lKtjOetYMkOaDE6cT4%3d',
            imgSrc: itchioImgSrc
        }]
    },
    {
        title: 'Broken Transmission',
        details: '2D post apocalyptic sidescroller shooter, one must kill as many zombies as he can!',
        imageUrl: 'images/games/broken_transmission.png',
        links: [{
            viewLink: 'https://globalgamejam.org/2018/games/broken-transmission-0',
            downloadLink: 'https://ggj.s3.amazonaws.com/games/2018/01/156932/exec/T9gkE/build03.zip',
            imgSrc: globalGamejamImgSrc
        }]
    }
] as GameInfoProps[];