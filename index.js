'use strict';

const newspaper = {
    title: 'Header',
    articles: [
        {
            author: '1 author',
            date: '04-11-2022',
            text: 'lorem'
        },
        {
            author: '2 author',
            date: '04-11-2022',
            text: 'lorem'
        },
        {
            author: '3 author',
            date: '04-11-2022',
            text: 'lorem'
        },
        {
            author: '4 author',
            date: '04-11-2022',
            text: 'lorem'
        }
    ],
    showArticles: function() {
        this.articles.forEach((article, index) => {
            console.log(`${this.title} ${index} - ${article.author}`); // Втрата контексту this
        })
    }
}

newspaper.showArticles();
