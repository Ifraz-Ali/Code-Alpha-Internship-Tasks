
const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const filterContainer = document.getElementById('filters');
let images = [];
let filteredImages = [];
let currentIndex = 0;

const fetchImages = async () => {
    try {
        const res = await fetch('http://pets-v2.dev-apis.com/pets');
        const data = await res.json();
        images = data.pets;
        console.log(images)
        filteredImages = images;
        renderFilters();
        renderGallery();
    } catch (error) {
        console.error('Error fetching images:', error);
    }
};

const renderFilters = () => {
    const types = ['All Photos', ...new Set(images.map(pet => pet.animal))];
    filterContainer.innerHTML = types.map(animal => `
        <button class="filter-btn" onclick="filterImages('${animal}')">${animal}</button>
    `).join('');
};

const filterImages = (animal) => {
    filteredImages = animal === 'All Photos' ? images : images.filter(pet => pet.animal === animal);
    renderGallery();
};

const renderGallery = () => {
    gallery.innerHTML = filteredImages.map((pet, index) => `
        <div class="gallery-item" onclick="openLightbox(${index})">
            <span class="label">${pet.name}</span>
            <img src="${pet.images[0]}" alt="${pet.name}">
        </div>
    `).join('');
};

const openLightbox = (index) => {
    currentIndex = index;
    lightbox.style.display = 'flex';
    lightboxImg.src = filteredImages[currentIndex].images[0];
};

const closeLightbox = () => {
    lightbox.style.display = 'none';
};

const changeImage = (step) => {
    currentIndex = (currentIndex + step + filteredImages.length) % filteredImages.length;
    lightboxImg.src = filteredImages[currentIndex].images[0];
};

fetchImages();
