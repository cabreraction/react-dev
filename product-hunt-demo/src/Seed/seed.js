import main from '../images/main.jpg'
import her from '../images/her.png';

function generateVotes() {
    return Math.floor(Math.random() * 100)
}

const products = [
    {
        id: 1,
        title: 'Yellow Pail',
        description: 'On-demand sand castle construction expertise.',
        url: '#',
        votes: generateVotes(),
        submitterAvatarUrl: her,
        productImageUrl: main
    },
    {
        id: 2,
        title: 'Red Pail',
        description: 'On-demand sand castle construction expertise. But in red.',
        url: '#',
        votes: generateVotes(),
        submitterAvatarUrl: her,
        productImageUrl: main
    },
    {
        id: 3,
        title: 'Blue Pail',
        description: 'On-demand sand castle construction expertise. But in blue.',
        url: '#',
        votes: generateVotes(),
        submitterAvatarUrl: her,
        productImageUrl: main
    },
]

export default products;