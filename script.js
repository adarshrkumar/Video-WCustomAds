let videoId = 'tEI81FKf294'
let adId = 'LTmYX_IHzek'
let adStartTime = 60
let adVideoStartTime = 82
let adLength = 20


let iframeElement = document.querySelector('.video');
let videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&c_lang_pref=en&disablekb=1&rel=0&end=${adStartTime}`
iframeElement.setAttribute('src', `${videoSrc}`);
setTimeout(adStartTime*1000, ad)

function ad() {
  let iframeElement = document.querySelector('.video');
  let adSrc = `https://www.youtube.com/embed/${adId}?autoplay=1&controls=0&c_lang_pref=en&disablekb=1&rel=0&start=${adVideoStartTime}&end=${adVideoStartTime + adLength}`
  iframeElement.setAttribute('src', `${adSrc}`);
  setTimeout(adLength*1000, back2vid)
}

function back2vid() {
  let iframeElement = document.querySelector('.video');
  let videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&c_lang_pref=en&disablekb=1&rel=0&start=${adStartTime}`
  iframeElement.setAttribute('src', `${videoSrc}`);
}