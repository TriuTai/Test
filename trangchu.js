let currentAd=0;
const ads=document.querySelectorAll('.quang_cao img');

function showAds(index){
    ads.forEach((ad,i) => {
        ad.classList.toggle('active',i === index);
    });
}
function nextAd(){
    currentAd = (currentAd + 1) % ads.length;
    showAds(currentAd);
}
function prevAd(){
    currentAd = (currentAd - 1  + ads.length) % ads.length;
    showAds(currentAd);
}