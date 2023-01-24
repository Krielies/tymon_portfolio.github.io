const projects = [arcadeProject = { name:"Escape From Hell", thumbnailImg: "Content/Images/thumbnails/arc_proj_thumb.png", projectDescription: "The Escape From Hell game also reffered to as the arcade game was a game where me and 1 other developer as well as 3 artists worked on, the idea was that it would fit on a arcade machine. For rthe artstyle we decided to go with pixel art because it fit the theme of arcade machines. Due to it being the first time most of the artists worked with pixel art, some of the art was in wrong definition and thus some were in poor resolution. The point of the game was to get to the top of the level while running away from lava and dodging demons and each time the player completed the level the enemies got a bit faster. During the making of this game I've learned how to code a lot of new things and so it was a great learning experience" },
cakeProject = { name:"The Visualization Project", thumbnailImg: "Content/Images/thumbnails/cake_project_screenshot.png", projectDescription: "In this project me and my team were making a data visualization game. The data we visualized was data my team collected by ourself and it showed how many people were born on a day of a month in a year. So for example if i was born on the 18 of april 2002 then the data we would collect would be 18 and 2002. After we collectd over 100 dates we then started working on the game. In the game there would be big cakes and each cake represented a year. Each cake has 31 slices, each slice representing a day of a month and on each slice there would be candles representing the amount of people. For years that there were too few people which would lead to the cake being empty we decided to just make sepret slices that would have the number of dates on them. For the people that were born alone in a year we made cupcakes." },
simpleARGameProject = { name:"A Simple AR Game", thumbnailImg: "Content/Images/thumbnails/ar_proj_thumb.png", projectDescription: "In this game I made it so that when your phone saw a picture through the camera it would spawn the game. The point of the game is to drive around in a car and dodge lasers while the lasers slowly start shooting faster. If the player loses they can easly restart by clicking on the screen. In this game i used 2 ar packages that helped set the picture detection up. I came upon the idea of the game after a lot of thinking because I couldnt figure out what type of game I wanted to make. When making the game I had to use a lot of new things which I've never used before which caused me to make a lot of mistakes. During the writing of the code the script that controlled the player movement was only partially working and since I couldn't figure out how to fix it, I added some new code to the broken part which allowed the player to move but still gave errors from the broken script. The reason I didn't remove the broken script is because it had a component that I needed. I also had small issues with arrays that i later managed to fix. Although this project had a rocky start with my unity being broken for 2 weeks it was still a pretty fun project in general." },
simpleFarmingGameProject = { name:"Farming Simulator", thumbnailImg: "Content/Images/thumbnails/FarmingProjectThumbnail.png", projectDescription: "In this game me and a team of 2 artists and one other programmer, were attempting to make a mobile game to bring attention to how eating healthy effects your life. In the game the goal is to plant and harvest plants to keep your health as high as possible at the end of the 2 minute timer and at the end, depending on your health you would get a certain health score. The score would show a certain result with different symptoms according to how much health you had at the end. The results showed the health issues that eating unhealthily could cause. In the game you have a choice of two different levels, one of them being easier and one being harder. During this project I learned that communication is very important in group projects because there were many time when I thought I discussed something with the rest of the team, only to find out that we had a lot of different ideas of what we thought the project was supposed to look like." },
CubeGoesHome = {name:"The Unloved Child",thumbnailImg: "Content/Images/thumbnails/CubeGameProject.png", projectDescription: "The goal of this game was to get the cube to the flag using special tiles that gave abilities such as: extra speed, reverse gravity, jump and some other ones. We designed in total 10 levels, all of which were built using a custom grid builder. Each level required a different method to reach the end and the first few acted as the tutorial. Due to time limitations as well as issues with unity, we were sadly unable to complete the game and the project broke." }]
var pic_1, pic_2, pic_3;

const pictures_carusel = [arcadeProject.thumbnailImg, cakeProject.thumbnailImg, simpleARGameProject.thumbnailImg, simpleFarmingGameProject.thumbnailImg, CubeGoesHome.thumbnailImg];
var middle = 1, left = 2, right = 0;





function rotate_left() {
    left += 1;
    right += 1;
    middle += 1;

    if (right > pictures_carusel.length - 1) {
        right = 0;

    }
    if (left > pictures_carusel.length - 1) {
        left = 0;

    }
    if (middle > pictures_carusel.length - 1) {
        middle = 0;

    }
    pic_1 = pictures_carusel[left];
    pic_2 = pictures_carusel[middle];
    pic_3 = pictures_carusel[right];
    document.getElementById('left_slide').src = pic_1;
    document.getElementById('middle_slide').src = pic_2;
    document.getElementById('right_slide').src = pic_3;
}
function rotate_right() {
    left -= 1;
    right -= 1;
    middle -= 1;
    if (right < 0) {
        right = pictures_carusel.length - 1;

    }
    if (left < 0) {
        left = pictures_carusel.length - 1;

    }
    if (middle < 0) {
        middle = pictures_carusel.length - 1;

    }
    pic_1 = pictures_carusel[left];
    pic_2 = pictures_carusel[middle];
    pic_3 = pictures_carusel[right];
    document.getElementById('left_slide').src = pic_1;
    document.getElementById('middle_slide').src = pic_2;
    document.getElementById('right_slide').src = pic_3;
}
function call_forth_the_project() {
    console.log(middle);
    document.getElementById('inner_text_desc').innerHTML = projects[middle].projectDescription;
    document.getElementById('projectTitleName').innerHTML = projects[middle].name;
}
