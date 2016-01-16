$(document).ready(function(){
	var freeverb = new Tone.Freeverb().toMaster();
	freeverb.dampening.value = 1000;
	freeverb.wet=0.7;

	var lfo = new Tone.LFO("4n", 0, 100);
	lfo.connect(freeverb.roomSize);

	var synthArr=[]
	for(i=0;i<7;i++){
		synthArr[i]=new Tone.SimpleAM().connect(freeverb).toMaster();
	}
	var ind=0
	var synth = new Tone.SimpleAM().connect(freeverb).toMaster();
	var scale=["B2","C3","E3","F#3","G3","B3","C4","E4","F#4","G4","B4","C5","E5","F#5","G5"];
	var synth2 = new Tone.SimpleAM().toMaster();
	


	$(window).scroll(function(){
		index = Math.floor(Math.random()*15);
		index2 = Math.floor(Math.random()*15);
		synthArr[ind].triggerAttackRelease(scale[index],"1n");
		ind=(ind+1)%7;
		console.log(scale[index]);
		//synth2.triggerAttackRelease(scale[index2],"8n","+0.25");
	})

	$(".box").hover(boxHoverIn, boxHoverOut);

	function boxHoverIn(){
		synth.triggerAttackRelease("C4","1n");
	}

	function boxHoverOut(){
		synth.triggerRelease();
	}
})