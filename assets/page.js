(function(){
// 도록 QR 페이지(wizplus-exhibit.github.io/NN/)와 같은 틀 · 이미지 대신 설명 영상 한 편.
// 영상 교체: 번호 폴더의 video.mp4 를 같은 이름으로 덮어쓰고 deploy_video.py 를 돌리면 같은 링크에 반영된다.
var d=window.WORK||{};var app=document.getElementById('app');
document.title=(d.title||'작품 안내');
document.documentElement.className='only';document.body.className='only';
var v=document.createElement('video');v.className='vid';
v.controls=true;v.playsInline=true;v.setAttribute('playsinline','');v.setAttribute('webkit-playsinline','');v.preload='metadata';
v.setAttribute('controlsList','nodownload noplaybackrate');v.disablePictureInPicture=true;
v.addEventListener('error',function(){app.innerHTML='<div class="wait">영상 준비 중입니다</div>'});
v.src=(d.video||'video.mp4')+'#t=0.1';app.appendChild(v);
// 영상 바로 아래 전체화면 버튼(PD 10-17 질문 2581) · 아이폰 사파리는 requestFullscreen 이 없어 webkitEnterFullscreen 갈래
var b=document.createElement('button');b.type='button';b.className='fs';b.textContent='전체화면으로 보기';
b.addEventListener('click',function(){
 var r=v.requestFullscreen?v.requestFullscreen():v.webkitRequestFullscreen?v.webkitRequestFullscreen():null;
 if(r&&r.then){r.then(function(){if(screen.orientation&&screen.orientation.lock)screen.orientation.lock('landscape').catch(function(){})}).catch(function(){if(v.webkitEnterFullscreen)v.webkitEnterFullscreen()})}
 else if(!r&&v.webkitEnterFullscreen){v.webkitEnterFullscreen()}
 if(v.paused)v.play().catch(function(){});
});app.appendChild(b);
document.addEventListener('contextmenu',function(e){e.preventDefault()});
document.addEventListener('dragstart',function(e){e.preventDefault()});
})();
