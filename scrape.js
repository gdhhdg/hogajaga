var request = require('request');
var Xray = require('x-ray');
var fs = require('fs');
var xray = new Xray;
var imgNames = [];

//tiger class scrape
xray('http://blog.naver.com/PostList.nhn?blogId=hogajaga&from=postList&categoryNo=17', '#postViewArea  div',[{
	
	link: 'img._photoImage@src'}]).write('./public/tigerResults.json');

xray('http://blog.naver.com/PostList.nhn?blogId=hogajaga&from=postList&categoryNo=17', '.post-view',[{

	iframe: 'iframe@src'}]).write('./public/tigerVideos.json');



//kangaroo class scrape
xray('http://blog.naver.com/PostList.nhn?blogId=hogajaga&from=postList&categoryNo=11', '#postViewArea  div',[{
	link: 'img._photoImage@src'}]).write('./public/kangarooResults.json');

xray('http://blog.naver.com/PostList.nhn?blogId=hogajaga&from=postList&categoryNo=11', '#postViewArea  div.post-view',[{

	iframe: 'iframe@src'}]).write('./public/kangarooVideos.json');



//bear class scrape

xray('http://blog.naver.com/PostList.nhn?blogId=hogajaga&from=postList&categoryNo=18', '#postViewArea  div',[{
	link: 'img._photoImage@src'}]).write('./public/bearResults.json');

xray('http://blog.naver.com/PostList.nhn?blogId=hogajaga&from=postList&categoryNo=18', '#postViewArea  div.post-view',[{
	iframe: 'iframe@src'}]).write('./public/bearVideos.json');



//koala class scrape
xray('http://blog.naver.com/PostList.nhn?blogId=hogajaga&from=postList&categoryNo=24', '#postViewArea  div',[{
	link: 'img._photoImage@src'}]).write('./public/koalaResults.json');
xray('http://blog.naver.com/PostList.nhn?blogId=hogajaga&from=postList&categoryNo=24', '#postViewArea  div.post-view',[{
	iframe: 'iframe@src'}]).write('./public/koalaVideos.json');


