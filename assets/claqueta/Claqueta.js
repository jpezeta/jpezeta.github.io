(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AougKICsglIgEEIIheAVgAj7hMIC6gpIgDEIIi7AogABFiSIC7goIgEEHIi6AogAGHjYIBegVIBKD3IisAmg");
	this.shape.setTransform(55.875,23.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,111.8,47.5), null);


// stage content:
(lib.Claqueta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Claqueta
	this.instance = new lib.Símbolo1();
	this.instance.setTransform(7.9,30,0.4132,0.3848,0,-19.3503,-18.2436,5.5,45.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:55.9,regY:23.8,skewX:-17.6082,skewY:-16.5014,x:25.3,y:16.1},0).wait(1).to({skewX:-15.8633,skewY:-14.7565,x:25.75,y:16.55},0).wait(1).to({skewX:-14.1185,skewY:-13.0117,x:26.15,y:17.15},0).wait(1).to({skewX:-12.3737,skewY:-11.2669,x:26.5,y:17.75},0).wait(1).to({skewX:-10.6288,skewY:-9.522,x:26.9,y:18.3},0).wait(1).to({skewX:-8.884,skewY:-7.7772,x:27.25,y:18.85},0).wait(1).to({skewX:-7.1392,skewY:-6.0324,x:27.55,y:19.45},0).wait(1).to({skewX:-5.3944,skewY:-4.2876,x:27.9,y:20},0).wait(1).to({skewX:-3.6495,skewY:-2.5427,x:28.2,y:20.7},0).wait(1).to({skewX:-1.9047,skewY:-0.7979,x:28.45,y:21.3},0).wait(1).to({skewX:-0.1599,skewY:0.9469,x:28.75,y:21.95},0).wait(1).to({skewX:1.585,skewY:2.6918,x:28.9,y:22.6},0).wait(1).to({skewX:3.3298,skewY:4.4366,x:29.15,y:23.25},0).wait(1).to({skewX:5.0746,skewY:6.1814,x:29.35,y:23.85},0).wait(1).to({skewX:6.8194,skewY:7.9262,x:29.55,y:24.55},0).wait(1).to({skewX:8.5643,skewY:9.6711,x:29.65,y:25.2},0).wait(1).to({skewX:10.3091,skewY:11.4159,x:29.8,y:25.8},0).wait(1).to({skewX:8.6612,skewY:9.768,x:29.65,y:25.2},0).wait(1).to({skewX:7.0133,skewY:8.1201,x:29.55,y:24.6},0).wait(1).to({skewX:5.3654,skewY:6.4722,x:29.4,y:23.95},0).wait(1).to({skewX:3.7175,skewY:4.8243,x:29.15,y:23.4},0).wait(1).to({skewX:2.0696,skewY:3.1764,x:28.95,y:22.75},0).wait(1).to({skewX:0.4217,skewY:1.5285,x:28.8,y:22.1},0).wait(1).to({skewX:-1.2262,skewY:-0.1194,x:28.55,y:21.55},0).wait(1).to({skewX:-2.8741,skewY:-1.7673,x:28.3,y:20.95},0).wait(1).to({skewX:-4.5219,skewY:-3.4151,x:28,y:20.35},0).wait(1).to({skewX:-6.1698,skewY:-5.063,x:27.75,y:19.8},0).wait(1).to({skewX:-7.8177,skewY:-6.7109,x:27.45,y:19.2},0).wait(1).to({skewX:-9.4656,skewY:-8.3588,x:27.1,y:18.7},0).wait(1).to({skewX:-11.1135,skewY:-10.0067,x:26.8,y:18.15},0).wait(1).to({skewX:-12.7614,skewY:-11.6546,x:26.4,y:17.6},0).wait(1).to({skewX:-14.4093,skewY:-13.3025,x:26.1,y:17.05},0).wait(1).to({skewX:-16.0572,skewY:-14.9504,x:25.7,y:16.55},0).wait(1).to({skewX:-17.7051,skewY:-16.5983,x:25.35,y:16},0).wait(1).to({skewX:-19.353,skewY:-18.2462,x:24.95,y:15.5},0).wait(1));

	// Estatica
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AocFoIAArPIQ5AAIAALPgAmdiPIM7AAIAAhlIs7AAg");
	this.shape.setTransform(29.991,43.7098,0.4056,0.3851);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(36));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(28.9,28.2,23.4,29.400000000000002);
// library properties:
lib.properties = {
	id: 'C18FC956C3006B4E9039FD3B09F89EDB',
	width: 58,
	height: 57,
	fps: 60,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C18FC956C3006B4E9039FD3B09F89EDB'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;