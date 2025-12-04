const blogView = document.querySelector('.blog-view');
let categories = document.querySelectorAll('.blog-category');
const blogHeader = document.querySelector('#blog-header');

function loadCategory(categoryName) {
    switch (categoryName) {
        case "General Articles":
            blogHeader.innerText = "General Articles";
            blogView.innerHTML = '';
            loadCategoryData('categoryData/general.json');
            break;
        case "CTF Write-Ups":
            blogHeader.innerText = "CTF Write-Ups";
            blogView.innerHTML = '';
            loadCategoryData('categoryData/writeups.json');
            break;
        case "Miscellaneous Ramblings":
            blogHeader.innerText = "Miscellaneous Ramblings";
            blogView.innerHTML = '';
            loadCategoryData('categoryData/misc.json');
            break;
        case "???":
            blogHeader.innerText = "???";
            blogView.innerHTML = '';
            loadCategoryData('categoryData/mystery.json');
            break; 
        default:
            break;
    }
}

async function loadCategoryData(categoryDataPath) {
    const categoryData = await fetch(categoryDataPath).then(response => response.json());
    
    const homeButton = document.createElement('p');
    homeButton.id = "blog-home-button";
    homeButton.innerText = "<- Back to Categories";

    homeButton.addEventListener('mouseenter', () => {
        homeButton.style.textDecoration = "underline";
    });
    
    homeButton.addEventListener('mouseleave', () => {
        homeButton.style.textDecoration = "none";
    });
    
    homeButton.addEventListener('click', () => {
        unloadCategory();
    });
    
    blogView.appendChild(homeButton);

    for (let i = 0; i < categoryData.articles.length; i++) {
        const article = document.createElement('div');
        article.classList.add('blog-entry');

        const articleTitle = document.createElement('p');
        articleTitle.innerHTML = `${categoryData.articles[i].title}`
        articleTitle.classList.add('blog-entry-title');
        article.appendChild(articleTitle);

        const articleDate = document.createElement('p');
        articleDate.innerHTML = `${categoryData.articles[i]['date-written']}`
        articleDate.classList.add('blog-entry-date-written');
        article.appendChild(articleDate);

        const articleDescription = document.createElement('p');
        articleDescription.innerHTML = `${categoryData.articles[i].description}`
        articleDescription.classList.add('blog-entry-description');
        article.appendChild(articleDescription);

        article.addEventListener('mouseenter', () => {
            articleTitle.style.textDecoration = "underline";
        });
        
        article.addEventListener('mouseleave', () => {
            articleTitle.style.textDecoration = "none";
        });        

        article.addEventListener('click', () => {
            window.location.href = categoryData.articles[i].path;
        });

        blogView.appendChild(article);
    }
}


function unloadCategory() {
    blogHeader.innerText = "Blog";
    blogView.innerHTML = '';

    blogView.appendChild(document.createElement('div')).classList.add('blog-categories');
    
    const generalCategory = document.createElement('div');
    generalCategory.classList.add('blog-category');
    generalCategory.id = "general-articles-category";
    generalCategory.innerHTML = '<img src="assets/images/folder-icon-closed.png"><p>General Articles</p>';
    blogView.querySelector('.blog-categories').appendChild(generalCategory);

    const writeUpsCategory = document.createElement('div');
    writeUpsCategory.classList.add('blog-category');
    writeUpsCategory.id = "write-ups-category";
    writeUpsCategory.innerHTML = '<img src="assets/images/folder-icon-closed.png"><p>CTF Write-Ups</p>';
    blogView.querySelector('.blog-categories').appendChild(writeUpsCategory);

    const miscCategory = document.createElement('div');
    miscCategory.classList.add('blog-category');
    miscCategory.id = "miscellaneous-ramblings-category";
    miscCategory.innerHTML = '<img src="assets/images/folder-icon-closed.png"><p>Miscellaneous Ramblings</p>';
    blogView.querySelector('.blog-categories').appendChild(miscCategory);

    const mysteryCategory = document.createElement('div');
    mysteryCategory.classList.add('blog-category');
    mysteryCategory.id = "mystery-category";
    mysteryCategory.innerHTML = '<img src="assets/images/folder-icon-closed.png"><p>???</p>';
    blogView.querySelector('.blog-categories').appendChild(mysteryCategory);    

    categories = document.querySelectorAll('.blog-category');
    bindEvents();
}

function bindEvents() {
    for (let i = 0; i < categories.length; i++) {
        categories[i].addEventListener('mouseenter', () => {
            const category_folder_img = categories[i].querySelector('img');
            category_folder_img.src = "assets/images/folder-icon.png";

            const category_text = categories[i].querySelector('p');
            category_text.style.textDecoration = "underline";
        });

        categories[i].addEventListener('mouseleave', () => {
            const category_folder_img = categories[i].querySelector('img');
            category_folder_img.src = "assets/images/folder-icon-closed.png";

            const category_text = categories[i].querySelector('p');
            category_text.style.textDecoration = "none";
        });

        categories[i].addEventListener('click', () => {
            const categoryName = categories[i].querySelector('p').innerText;
            loadCategory(categoryName);
        });
    }
}

bindEvents();