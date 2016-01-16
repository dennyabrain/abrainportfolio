$(document).ready(function(){
	var plucky = new Tone.PluckSynth().toMaster();

	var freeverb = new Tone.Freeverb().toMaster();
	freeverb.dampening.value = 1000;
	freeverb.wet=0.7;

	var lfo = new Tone.LFO("4n", 0, 100);
	lfo.connect(freeverb.roomSize);
	//lfo.start();
	

	var synthArr=[]
	for(i=0;i<1;i++){
		synthArr[i]=new Tone.SimpleAM().connect(freeverb).toMaster();
	}
	var ind=0
	var synth = new Tone.SimpleFM().connect(freeverb).toMaster();
	//var scale=["B2","C3","E3","F#3","G3","B3","C4","E4","F#4","G4","B4","C5","E5","F#5","G5"];
	//var scale=["C2","C#2","F2","G2","G#2","C3","C#3","F3","G3","G#3","C4","C#4","F4","G4","G#4"];
	//var scale=["G0","A0","B0","D1","E1","G1","A1","B1","G0","A0","B0","D1","E1","G1"];
	var scale=["D3","E3","F3","A3","Bb3","C4","D4","E4","D3","E3","F3","A3","Bb3","C4","D4","E4",];
	//var scaleHigh=["G4","A4","B4","D5","E5","G5","A5","B5","G4","A4","B4","D5","E5","G5"];

	Tone.Master.volume=-6;

	$(window).scroll(function(){
		index = Math.floor(Math.random()*15);
		index2 = Math.floor(Math.random()*15);
		synthArr[ind].triggerAttackRelease(scale[index],"1n");
		ind=(ind+1)%1;
		//console.log(scale[index]);
		//synth2.triggerAttackRelease(scale[index2],"8n","+0.25");
	})

	$(".box").hover(boxHoverIn, boxHoverOut);

	function boxHoverIn(){
		var index=Math.floor(Math.random()*5);
		synth.triggerAttack(scale[index],"1n");
	}

	function boxHoverOut(){
		synth.triggerRelease();
	}

	$(".title").hover(function(){
		console.log('titleclicked');
		var index=Math.floor(Math.random()*15);
		plucky.triggerAttack(scale[index]);
	});

	$(".tags").hover(function(){
		console.log('hoverIn');
		var index=Math.floor(Math.random()*15);
		plucky.triggerAttack(scale[index]);
	},function(){
		console.log('hoverOut');
		var index=Math.floor(Math.random()*15);
		plucky.triggerAttack(scale[index]);
	});
})