/**
 * Created by gunnerhatmaker on 10/6/17.
 */
var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'about';

	// Render the view
	view.render('about',{title:'Hogajaga', location: '강남구 도곡동 902-3 하림빌딩 2층', phone:"02-575-5516", email:"cindy5575@hanmail.net", });
};
