const categories = document.querySelectorAll('.blog-category');

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
            alert("Blog posts coming soon!");
        });
    }