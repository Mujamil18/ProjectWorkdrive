const fileUpload = document.getElementById('file-input');
        // fetchFiles();

const filesGrid = document.getElementById('file-grid-container');
const categoryTitle = document.getElementById('category-title');
const menuItems = document.querySelectorAll('.menu');
const codeOptions = document.getElementById('code-options');

//nav bar selection
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // console.log("menuitems")
        menuItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        currentCategory = this.dataset.category;
        
        // categoryTitle.textContent = currentCategory === 'dashboard' ? 'All Files' : currentCategory;

        if (currentCategory === 'Code') {
            console.log("if working:")
            // displayCodeFiles();
            codeOptions.innerHTML = `<div class="menu" data-category="Preview Files">
                                        <i class="fi fi-rr-file-code"></i>        
                                        <p>Preview Files</p>
                                    </div>
                                    <div class="menu" data-category="Open Compiler">
                                        <i class="fi fi-rr-api"></i>
                                        <p>Open Compiler</p>
                                    </div>`;
            // codeOptions.style.display="block";
        } 
        categoryTitle.textContent = currentCategory;
        // else {
        //     filesGrid.style.display = 'grid';
        //     const codeContainer = document.getElementById('code-files-container');
        //     if (codeContainer) {
        //         codeContainer.style.display = 'none';
        //     }
            // filterFiles();
    });
});
