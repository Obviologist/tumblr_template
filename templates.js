var postTemplate = function(post){
	var result = `
		<div class="col-xs-12 col-md-4">
			<img class="photo" src="` + post + `" />
		</div>
	`;
	return result;
};

var postList = [
	'http://66.media.tumblr.com/0ea1f4b04cccd1a558f2faeead164554/tumblr_np2zxonu1E1uwddxxo1_1280.jpg',
	'http://66.media.tumblr.com/772a5ad9be23bfb0ff2bb802f0d9ab6f/tumblr_np2zvboH7Y1uwddxxo1_1280.jpg',
	'http://66.media.tumblr.com/4b32b1360a549e3020765b5722c124d4/tumblr_np2zupGWiy1uwddxxo1_1280.jpg',
	'http://67.media.tumblr.com/47af9e59f447c1ce581b2527e5c72143/tumblr_np2zsr85n91uwddxxo1_1280.jpg',
	'http://67.media.tumblr.com/76554bdb6ab0243d58ce53f6c44cb6c1/tumblr_np13k5xYUu1uwddxxo1_1280.jpg',
	'http://66.media.tumblr.com/bdffcb60e62c908b7b63572a62bb1d66/tumblr_noyvhuMX4j1uwddxxo1_1280.jpg'
];

document.getElementById('photoHolder').innerHTML = postList.map(postTemplate).join('\n');