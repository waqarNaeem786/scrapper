let episode  = "Episode1:PilotEpisode2:LetGoEpisode3:NextofKinEpisode4:WorstDayEverEpisode5:PointofOriginEpisode6:HeartbreakerEpisode7:FullMoon(CreepyAF)Episode8:Karma'sABitchEpisode9:TrappedEpisode10:AWholeNewYouEpisode1:UnderPressureEpisode2:7.1Episode3:HelpIsNotComingEpisode4:StuckEpisode5:AwfulPeopleEpisode6:DosedEpisode7:HauntedEpisode8:Buck,ActuallyEpisode9:HenBeginsEpisode10:MerryEx-MasEpisode11:NewBeginningsEpisode12:ChimneyBeginsEpisode13:FightorFlightEpisode14:BrokenEpisode15:Ocean's9-1-1Episode16:BobbyBeginsAgainEpisode17:CarefulWhatYouWishForEpisode18:ThisLifeWeChooseEpisode1:KidsTodayEpisode2:SinkorSwimEpisode3:TheSearchersEpisode4:TriggersEpisode5:RageEpisode6:MonstersEpisode7:AthenaBeginsEpisode8:MalfunctionEpisode9:FALLOUTEpisode10:CHRISTMASSPIRITEpisode11:SEIZETHEDAYEpisode12:FoolsEpisode13:PINNEDEpisode14:THETAKINGOFDISPATCH9-1-1Episode15:EDDIEBEGINSEpisode16:TheOneThatGotAwayEpisode17:POWERLESSEpisode18:WHAT’SNEXT?Episode1:TheNewAbnormalEpisode2:AloneTogetherEpisode3:FutureTenseEpisode4:9-1-1,What’sYourGrievance?Episode5:BuckBeginsEpisode6:JinxEpisode7:ThereGoestheNeighborhoodEpisode8:BreakingPointEpisode9:BlindsidedEpisode10:ParenthoodEpisode11:FirstResponders”Episode12:TreasureHuntEpisode13:SuspicionEpisode14:SurvivorsEpisode1:PanicEpisode2:DesperateTimesEpisode3:DesperateMeasuresEpisode4:HomeandAwayEpisode5:PeerPressureEpisode6:BrawlinCellBlock9-1-1"     
var regex = /Episode1:/gi, result, indices = [];
while ( (result = regex.exec(episode)) ) {
    indices.push(result.index);
}



let arr = []
for(let i = 0; i < indices.length; i++){
    // console.log(indices[i],indices[i+1])
   arr.push(episode.slice(indices[i],indices[i+1]))  
}

let arr2 = []
arr.map(e=>{
    let  epis = e.match(/Episode\d+/gi)
    arr2.push(epis)
})
// console.log(arr2)


let seas = "Season 1Season 2Season 3Season 4Season 5"
let seasons = seas.match(/Season \d+/gi)
var sande = seasons.reduce((acc, value, i) => (acc[value] = arr2[i], acc), {});

console.log(data);






