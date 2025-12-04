const blogView = document.querySelector('.blog-view');
let categories = document.querySelectorAll('.blog-category');
const blogHeader = document.querySelector('#blog-header');

function loadCategory(categoryName) {
    console.log("Loading category: " + categoryName);
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