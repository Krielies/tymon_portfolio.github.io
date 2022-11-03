const arc_thumbnail = "Content/Images/thumbnails/arc_proj_thumb.png", cake_thumbnail = "Content/Images/thumbnails/cake_project_screenshot.png", fps_thumbnail = "Content/Images/thumbnails/fps_game.png";



const pictures_carusel = [fps_thumbnail , cake_thumbnail , arc_thumbnail, fps_thumbnail , cake_thumbnail , arc_thumbnail];
var middle = 1, left = 2, right = 3;





function rotate_left(){
    left += 1;
    right += 1;
    middle += 1;

    if(right > pictures_carusel.length){
        right = 1;

    }
    if(left > pictures_carusel.length){
        left = 1;

    }
    if(middle > pictures_carusel.length){
        middle = 1;

    }
    var pic_1 = pictures_carusel[left-1];
    var pic_2 = pictures_carusel[middle-1];
    var pic_3 = pictures_carusel[right-1];
    document.getElementById('left_slide').src = pic_1;  
    document.getElementById('middle_slide').src = pic_2; 
    document.getElementById('right_slide').src = pic_3; 
}
function rotate_right(){
    left -= 1;
    right -= 1;
    middle -= 1;

    if(right < 1){
        right = pictures_carusel.length;

    }
    if(left < 1){
        left = pictures_carusel.length;

    }
    if(middle < 1){
        middle = pictures_carusel.length;

    }
    var pic_1 = pictures_carusel[left-1];
    var pic_2 = pictures_carusel[middle-1];
    var pic_3 = pictures_carusel[right-1];
    document.getElementById('left_slide').src = pic_1;  
    document.getElementById('middle_slide').src = pic_2; 
    document.getElementById('right_slide').src = pic_3; 
}
function call_forth_the_project(){

}