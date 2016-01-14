$(document).ready(function(){
	var synth = new Tone.SimpleAM().toMaster();
	synth.modulator.envelope.release = 1;
	var scale=["E3","F#3","G3","B3","C4","E4","F#4","G4"];
	var synth2 = new Tone.SimpleAM().toMaster();
	

	$(window).scroll(function(){
		index = Math.floor(Math.random()*5);
		index2 = Math.floor(Math.random()*5);
		synth.triggerAttackRelease(scale[index],"8n");
		synth2.triggerAttackRelease(scale[index2],"8n","+0.25");
	})

	$(".box").hover(boxHoverIn, boxHoverOut);

	function boxHoverIn(){
		synth.triggerAttackRelease("C4","1n");
	}

	function boxHoverOut(){
		synth.triggerRelease();
	}
})