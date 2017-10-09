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

//var tigerImg = require('/Users/gunnerhatmaker/Desktop/hogajaga/public/tigerResults.json');
var JSONdata = fs.readFileSync(path.join(__dirname + '/../',  '../', '/public/bearResults.json'));
var imgs = JSON.parse(JSONdata);

var bearVideo = fs.readFileSync(path.join(__dirname + '/../',  '../',  'public/bearVideos.json'));
var iframe = JSON.parse(bearVideo);




exports = module.exports = function (req, res) {


	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'Bear';

	// Render the view

	view.render('bear', {imgs: imgs, iframes: iframe});
};
