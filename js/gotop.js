//********* 回頂點 **********
let gotopbtn = document.getElementsByClassName('gotop')[0];  //按鈕

//營幕監聽捲軸事件
let ticking = false;

window.addEventListener('scroll', () => {
    let scroll_position = window.scrollY;  //取得捲軸拉把的頂點高度

    if (!ticking) {
        window.requestAnimationFrame(() => {
        showButton(scroll_position, gotopbtn);  //判斷按鈕要不要顯示
        ticking = false;
      });
    }
    ticking = true;
});


//判斷捲軸高度，決定是否要顯示按鈕
// height => 捲軸拉把頂點到網頁文件的頂點長度
// ele => 要被隱藏或顯示的 DOM節點
function showButton(height, ele) {
    if(height > 250){
        ele.style.display = 'block';
    }else{
        ele.style.display = 'none';
    }
}

//按鈕監聽點擊事件
gotopbtn.addEventListener('click', () => {
    window.scrollTo(0, 0);  //將捲軸移到頂點
});