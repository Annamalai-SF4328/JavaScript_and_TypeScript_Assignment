var images = [
    { url: 'images/star.jpg', caption: 'Star' },
    { url: 'images/river.jpg', caption: 'River with Mountain' },
    { url: 'images/cloudy.jpg', caption: 'Cloud with Mountain' },
    { url: 'images/grass.jpg', caption: 'Grass' },
    { url: 'images/highLand.jpg', caption: 'High land' },
    { url: 'images/house.jpg', caption: 'Nature house' },
    { url: 'images/lake.jpg', caption: 'Lake around flower' },
    { url: 'images/lakeTree.jpg', caption: 'Lake middle Tree' },
    { url: 'images/mirror.jpg', caption: 'Natural mirror' },
    { url: 'images/mount.jpg', caption: 'Sun Raising on mountain' },
];
var slideIndex = 1;
document.addEventListener('DOMContentLoaded', function () {
    var imageContainer = document.getElementById('image-container');
    var buttonContainer = document.getElementById('button-container');
    images.forEach(function (image, index) {
        var slide = document.createElement('div');
        slide.className = 'slideClass';
        slide.style.display = index === 0 ? 'block' : 'none';
        var temp = document.createElement('img');
        temp.src = image.url;
        temp.alt = "Image " + (index + 1);
        var captionDiv = document.createElement('div');
        captionDiv.id = 'caption';
        captionDiv.innerText = image.caption;
        slide.appendChild(temp);
        slide.appendChild(captionDiv);
        imageContainer.appendChild(slide);
    });
    buttonContainer.style.display = 'block';
});
function changeSlide(n) {
    slideShow(slideIndex += n);
}
function slideShow(index) {
    var slides = document.getElementsByClassName('slideClass');
    var captions = document.getElementById('caption');
    if (index > slides.length) {
        slideIndex = 1;
    }
    if (index < 1) {
        slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
    captions.innerText = images[slideIndex - 1].caption;
}
