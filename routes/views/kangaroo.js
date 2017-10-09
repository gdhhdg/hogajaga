/**
 * Created by gunnerhatmaker on 10/8/17.
 */
/**
 * Created by gunnerhatmaker on 10/6/17.
 */
var keystone = require('keystone');
var fs = require('fs');
var path = require('path');

//var tigerImg = require('/Users/gunnerhatmaker/Desktop/hogajaga/public/tigerResults.json');
var JSONdata = fs.readFileSync(path.join(__dirname + '/../',  '../',  '/public/kangarooResults.json'));
var imgs = JSON.parse(JSONdata);


var kangarooVideo = fs.readFileSync(path.join(__dirname + '/../',  '../',  'public/kangarooVideos.json'));
var iframe = JSON.parse(kangarooVideo);




exports = module.exports = function (req, res) {


	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'Kangaroo';

	// Render the view

	view.render('kangaroo', {imgs: imgs, iframes:iframe});
};
