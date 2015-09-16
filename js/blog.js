
function loadPage() {
	function setTitle() {
		document.title = "Three Fine Days";
	}

	function createNavbar() {
		var node = document.createElement('NAV');
		node.setAttribute("class", "navbar navbar-default navbar-static-top")
		node.innerHTML =
			'<div class="container">' +
			'    <div class="navbar-header">' +
			'        <a class="navbar-brand" href="../index.html">Three Fine Days</a>' +
			'    </div>' +
			'    <div id="navbar" class="navbar-collapse collapse">' +
			'        <ul class="nav navbar-nav">' +
			'            <li><a href="../blog.html">Blog</a></li>' +
			'            <li><a href="../music.html">Music</a></li>' +
			'            <li><a href="../graphics.html">Graphics</a></li>' +
			'            <li><a href="../about.html">About</a></li>' +
			'        </ul>' +
			'        <ul class="nav navbar-nav pull-right">' +
			'            <li><a target="_blank" href="http://weibo.com/sugitaakira">Weibo</a></li>' +
			'            <li><a target="_blank" href="https://github.com/stakira">Github</a></li>' +
			'        </ul>' +
			'    </div>' +
			'</div>';
		document.body.appendChild(node);
	}

	function createFooter() {
		var node = document.createElement('FOOTER');
		node.setAttribute("class", "footer")
		node.innerHTML =
			'<div class="container">' +
			'\t<p class="text-muted">&copy 2015 Three Fine Days. All rights reserved</p>' +
			'</div>';
		document.body.appendChild(node);
	}

	function createArticle() {
		var node = document.createElement('DIV');
		node.setAttribute("class", "container article")
		var text = document.getElementsByTagName("xmp")[0];
		text.parentElement.removeChild(text);
		node.innerHTML = marked(text.innerHTML, {
			highlight: function (code, lang, callback) {
				return hljs.highlightAuto(code, lang ? [lang] : null).value;
			},
			gfm: true
		});
		document.body.appendChild(node);
	}

	setTitle();
	createNavbar();
	createArticle();
	createFooter();
}

ljs.load(
    "../css/tomorrow.css",
    "../css/bootstrap.css",
    // "../css/bootstrap-theme.css",
    "../css/threefinedays.css",
    "../js/highlight.pack.js",
    "../js/marked.js",
    loadPage
);
