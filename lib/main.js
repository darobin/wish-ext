
var pageMod = require("sdk/page-mod")
,   self = require("sdk/self")
;

pageMod.PageMod({
    include:            /.*/
,   contentScriptFile:  self.data.url("wish.js")
});
