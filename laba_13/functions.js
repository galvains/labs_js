function f1(){
	let m = parseInt(document.getElementById('m').value);
	let res = '';

	rec(m);
	function rec(m){	
		if (0 == m){
			elem = 0;
		}
		else{
			elem = 5 * (rec(m - 1)) + 1;
			res += elem + ',';
		}	
		return elem;
	}

	document.getElementById('result1').innerHTML = res;
}

function f2(){
	let parentDiv = document.querySelector('.hl');
	let depth = 20;


	function randomCoord(min, max){
		return Math.round(min + (max - min) * Math.random());
	}

	
	function appendDiv(parentDiv, depth){
		if(depth != 0){
			let newElem = document.createElement('div');
			//newElem.innerHTML = `<span style="margin-top: '${randomCoord(1, 100)}'px">Hello world!</span>`;
			newElem.innerHTML = `<div>Hello world!</div>`;
			newElem.style.position = 'absolute';
			newElem.style.marginLeft = `${randomCoord(1, 400)}px`;
			newElem.style.marginTop = `${randomCoord(1, 100)}px`;
		
			parentDiv.insertAdjacentElement(
				'beforeend',
				newElem
			)
			appendDiv(parentDiv, depth - 1);
		}
	}

	appendDiv(parentDiv, depth)
}