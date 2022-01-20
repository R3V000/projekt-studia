'use strict';

const optArticleSelector = '.post',
        optTitleSelector = '.post-title',
        optTitleListSelector = '.titles';

const navSrc = document.querySelector('.nav-bar');

const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);

    /* remove class active from all elements */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }

    /* add class active to the clicked link */
    console.log('clickedElement:', clickedElement);
    clickedElement.classList.add('active');

    /* remove class active from all elements */
    const activeArticles = document.querySelectorAll('.posts article.active');

    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }

    /* get href attribute from the clicked link */

    const clickedLinkAttr = clickedElement.getAttribute('href');
    console.log(clickedLinkAttr);

    /* find the correct article using the selector */
    const correctArticle = document.querySelector(clickedLinkAttr);
    console.log(correctArticle);

    /* add class active to the correct article */
    correctArticle.classList.add('active');

}

const generateTitleLinks = function(){
    /* remove content of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    let html = '';

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector);
    for(let article of articles){
        /* get the article id */
        const articleID = article.getAttribute('id');
        console.log(articleID);

        /* find the title element and get the title from the title element */
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;
        console.log(articleTitle);

        /* create HTML of the link */
        const linkHTML = '<li><a href="#' + articleID + '"><span>' + articleTitle + '</span></a></li>';
        console.log(linkHTML);

        /* insert link into titleList */
        html = html + linkHTML;
    }

    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');
    for(let link of links){
        link.addEventListener('click', titleClickHandler);
    }

}

// Show active menu when scroll
const highlightMenu = function(){
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const nysaMenu = document.querySelector('#nysa');
    const zabytkiMenu = document.querySelector('#zabytki');
    const authorsMenu = document.querySelector('#authors');
    const sourcesMenu = document.querySelector('#sources');

    let scrollPos = window.scrollY;
    console.log(scrollPos);

    
    //adds 'highlight' class to my menu items
    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight');
        nysaMenu.classList.remove('highlight');
        zabytkiMenu.classList.remove('highlight');
        authorsMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos > 600 && scrollPos < 1100){
        homeMenu.classList.remove('highlight');
        nysaMenu.classList.add('highlight');
        zabytkiMenu.classList.remove('highlight');
        authorsMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos > 1100 && scrollPos < 1500){
        nysaMenu.classList.remove('highlight');
        zabytkiMenu.classList.add('highlight');
        authorsMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos > 1500 && scrollPos < 1800){
        authorsMenu.classList.add('highlight');
        nysaMenu.classList.remove('highlight');
        homeMenu.classList.remove('highlight');
        zabytkiMenu.classList.remove('highlight');
        sourcesMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos > 1800){
        sourcesMenu.classList.add('highlight');
        nysaMenu.classList.remove('highlight');
        homeMenu.classList.remove('highlight');
        zabytkiMenu.classList.remove('highlight');
    }
}

generateTitleLinks();
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
