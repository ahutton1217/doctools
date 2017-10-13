Ext.data.JsonP['Simple']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Simple</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-41845694\" class=\"content\">\n                        <h1>Simple</h1>\n    <p>Demonstrates a basic Alloy application consisting of a single XML view file, JavaScript controller file, and Titanium Style Sheet (TSS) file.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App Folder Location</div>\n            <p>alloy/test/apps/<strong class=\" \">basics/simple</strong>    </p>\n    </div>\n        <p>    <img src=\"images/download/attachments/41845694/ios.png\" alt=\"images/download/attachments/41845694/ios.png\" class=\"confluence-embedded-image\" width=\"250\">\n    </img></p>\n    <p>The main XML view contains a <tt class=\" \">&lt;Window/&gt;</tt> element that, in turn, contains a &lt;Label/&gt; element.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/index.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/index.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Label id=</code><code class=\"string\">&quot;label&quot;</code><code class=\"plain\">&gt;Hello, World!&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <p>The main controller file is responsible for opening the main Window. The <tt class=\" \">$</tt> variable refers to the current controller.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">apps/controllers/index.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"apps/controllers/index.js\">\n<div class=\"line\"><code class=\"plain\">$.index.open();</code></div>\n</div>\n    </div>\n    <p>A TSS file define styles and properties of UI elements defined in the main view.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/styles/index.tss</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/styles/index.tss\">\n<div class=\"line\"><code class=\"plain\">&#xA0;</code><code class=\"string\">&quot;#index&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">\tbackgroundColor: </code><code class=\"string\">&apos;#fff&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tfullscreen: </code><code class=\"keyword\">false</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\texitOnClose: </code><code class=\"keyword\">true</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"string\">&quot;Label&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">\tcolor: </code><code class=\"string\">&apos;#000&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tfont: {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tfontSize: </code><code class=\"string\">&apos;18dp&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tfontWeight: </code><code class=\"string\">&apos;bold&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">\t},</code></div>\n<div class=\"line\"><code class=\"plain\">\theight: Ti.UI.SIZE,</code></div>\n<div class=\"line\"><code class=\"plain\">\twidth: Ti.UI.SIZE</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-41845694_Simple-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Getting_Started\">Alloy Getting Started</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Concepts\">Alloy Concepts</a>    </p>\n</li></ul>    <p>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845694\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Simple"});