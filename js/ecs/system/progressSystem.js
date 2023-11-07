
export const progressSystem = (world) => {
    if (world.progressMustUpdate === true) {
        let x = document.getElementById("progressbar_position");
        x.style.width = Math.floor(world.AudioSystem.getProgress()*100)+"%";
        world.progressMustUpdate = false;
        if (world.AudioSystem.getProgress()>=1) {
            world.win = true;
            world.geometry.interactives.forEach((interactive)=>{

                for(let cI=0;cI<world.Curve.curveLength;cI++)
                    interactive.clearInstanceIdsAt(cI);

            });
        }
        console.log("progressSystem",world.AudioSystem.getProgress()*100);
    }
    return world
}