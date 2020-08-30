  function easyHTTP(){
	this.http = new XMLHttpRequest();
}

// Making Get Request

easyHTTP.prototype.get = function(url, callback) {
	this.http.open("GET", url, true);
	let that = this;
	that.http.onload = function(){
		if(that.http.status === 200){
		 	callback(null, that.http.responseText);
		} else {
			callback("Error Occured : " + that.http.status);
		}
	}
	this.http.send();
}

// Making Post Request

easyHTTP.prototype.post = function(url, data, callback){
	this.http.open("POST", url, true);

	this.http.setRequestHeader("Content-type", "application/json");

	let that = this;
	that.http.onload = function(){
		callback(null, that.http.responseText);
	}

	this.http.send(JSON.stringify(data))

}

// Making Put Request

easyHTTP.prototype.post = function(url, data, callback){
	this.http.open("PUT", url, true);

	this.http.setRequestHeader("Content-type", "application/json");

	let that = this;
	that.http.onload = function(){
		callback(null, that.http.responseText);
	}

	this.http.send(JSON.stringify(data))

}

// Making Delete Request
easyHTTP.prototype.delete = function(url, callback) {
	this.http.open("DELETE", url, true);
	let that = this;
	that.http.onload = function(){
		if(that.http.status === 200){
		 	callback(null, "Resouce Deleted"); //that.http.responseText
		} else {
			callback("Error Occured : " + that.http.status);
		}
	}
	this.http.send();
}