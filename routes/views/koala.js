/**
 * Created by gunnerhatmaker on 10/8/17.
 */
/**
 * Created by gunnerhatmaker on 10/8/17.
 */
/**
 * Created by gunnerhatmaker on 10/6/17.
 */
var keystone = require('keystone');
var fs = require('fs');
var path = require('path');
var koalaImg = require(path.join(__dirname + '/../',  '../',  'public/koalaResults.json'));
var JSONdata = fs.readFileSync(path.join(__dirname + '/../',  '../',  'public/koalaResults.json'));
var imgs = JSON.parse(JSONdata);


var koalaVideo = fs.readFileSync(path.join(__dirname + '/../',  '../',  'public/koalaVideos.json'));
var iframe = JSON.parse(koalaVideo);




exports = module.exports = function (req, res) {


	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'Koala';

	// Render the view

	view.render('koala',{imgs: imgs, iframes:iframe});
};
