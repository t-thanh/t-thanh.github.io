
var documents = [{
    "id": 0,
    "url": "thanh.be/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "thanh.be/about",
    "title": "About me",
    "body": "I'm Thành: Researcher - Runner - Reader Strava Profile: Location: Gladioolstraat3800 Sint-TruidenLimburg, BelgiumLoading. . . "
    }, {
    "id": 2,
    "url": "thanh.be/author/bigfoot/",
    "title": "Author: bigfoot",
    "body": ""
    }, {
    "id": 3,
    "url": "thanh.be/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 4,
    "url": "thanh.be/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Stories:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 5,
    "url": "thanh.be/author/lazychef/",
    "title": "Author: lazychef",
    "body": ""
    }, {
    "id": 6,
    "url": "thanh.be/search/",
    "title": "Archive",
    "body": "  Posts with {{ page. type }} '{{ page. title }}': {% for post in page. posts %}  {% include postbox. html %}{% endfor %}      "
    }, {
    "id": 7,
    "url": "thanh.be/search.json",
    "title": "",
    "body": "[ {% for post in site. posts %}   {% comment %} Determine post URL {% endcomment %}   {% if post. external_url %}    {% assign post_url = post. external_url %}   {% else %}    {% assign post_url = post. url | relative_url %}   {% endif %}  {   “title”  : “{{ post. title | escape }}”,   “category” : “{{ post. category }}”,   “tags”   : “{{ post. tags | join: ‘, ‘ }}”,   “url”   : “{{ post_url}}”,   “date”   : “{{ post. date }}”  } {% unless forloop. last %},{% endunless %} {% endfor %}] "
    }, {
    "id": 8,
    "url": "thanh.be/search",
    "title": "Search",
    "body": ""
    }, {
    "id": 9,
    "url": "thanh.be/author/tien-thanh/",
    "title": "Author: tien-thanh",
    "body": ""
    }, {
    "id": 10,
    "url": "thanh.be/author/traineesomm/",
    "title": "Author: traineesomm",
    "body": ""
    }, {
    "id": 11,
    "url": "thanh.be/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 12,
    "url": "thanh.be/page2/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Stories:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 13,
    "url": "thanh.be/book-the-practice/",
    "title": "The Practice của Seth Godin",
    "body": "2021/05/03 - Công việc sáng tạo là hành động hào phóng có chủ đích làm mọi thứ tốt đẹp hơn bằng cách làm điều chưa chắc đã là đúng đắn Mỗi ngày chúng ta đối mặt với lựa chọn: sáng tạo be creative HOẶC đầu hàng trước sự sợ hãi hoặc không chủ đích và trở thành hack, hustler hoặc cog  Hack là sợ hãi thử cái mới, chỉ chăm chăm copy những thứ đã có sẵn mà không phát triển thêm lên Hustler chỉ quan tâm đến việc hoàn thành mục tiêu ngắn hạn hơn là tạo ra giá trị. Hustler có sự dũng cảm nhất định để thử các thứ không chắc là đúng nhưng chỉ cho các mục đích cá nhân.  Cog thường rất hào phóng nhưng chỉ thoải mái khi làm theo chỉ dẫn. Cog làm việc bó trong 1 system và không có ý định cải tiến nó. Khi thế giới thay đổi, hệ thống - system - cần được cập nhật, cog sẽ bị bỏ lại hoặc thay thếKhi bạn chọn con đường sáng tạo bằng cách rộng rãi và can đảm trong công việc của mình, bạn tạo cho mình một tiếng nói duy nhất, là người tiên phong trong công việc và tạo ra thay đổi có ý nghĩa. Nhưng chú ý: khi bạn chọn con đường sáng tạo, bạn sẽ cảm thấy như mình là kẻ giả mạo (imposter). Impostor Syndrome - Hội chứng sợ giả mạo: Khi bạn thử làm gì đó mới với hi vọng sẽ làm tốt hơn và thay đổi điều gì đó, bạn tất yếu phải cảm thấy là bạn chẳng biết mình đang làm cái quái gì, và luôn có cảm giá thường trực là bạn đang bị phán xét bởi người khác, và nghĩ: “Mình chỉ là thằng lừa đảo” Nhưng trước khi bạn để giọng nói sợ hãi trong con người bạn lên quyết định và đầu hàng, bạn nên biết rằng tất cả mọi lãnh tụ chiến đấu cho lý tưởng, mọi nghệ sĩ đưa tác phẩm ra thế giới, mọi doanh nhân cố gắng bán được món hàng đầu tiên của mình, đều có chung cảm giác như bạn. Seth Godin nói trong tác phẩm của mình: “Sự sợ hãi trước điều giả mạo (imposter) là bằng chứng rằng chúng ta đang cải tiến, dẫn lối và sáng tạo Hãy dừng sự sợ hãi trước điều giả mạo đó giết chết động lực sáng tạo của bạn bằng cách cam kết 1 tiếng mỗi ngày cho hoạt động sáng tạo. Thói quen hình thành sẽ gỡ bỏ rào cản tâm lý. The Practice - Thực hành: Việc thực hành sáng tạo của bạn có thể là viết lách, lập trình, vẽ, ghi podcasts, huấn luyện hay nấu ăn. Không phụ thuộc vào việc bạn làm trong lúc thực hành, mục tiêu chỉ có một: đừng chú ý đến kết quả, học cách yêu thích quá trình tạo ra nó. Càng trân trọng quá trình, bạn càng tin tưởng vào bản thân để nhận thêm 1 chút rủi ro và kiên trì tạo ra thêm các sáng tạo mới, bất chấp cảm giác của một imposter “Thực hành không có nghĩa là để đạt tới kết quả nào, thực hành bản thân nó là kết quả, bởi vì chỉ có sự thực hành là tất cả những gì chúng ta có thể điều khiển và kiểm soát được” - Seth Godin Bạn có thể thắc mắc: “Nếu không tập trung vào kết quả, làm sao chúng ta biết được chúng ta có tiến bộ hay không?” Đo đếm sự tiến bộ của bằng hai đơn vị đo lương: discard pile - đống ý tưởng bỏ đi của bạn lớn từng nào và bạn đã ship được bao nhiêu việc năm vừa rồi Grow your discard pile - Đống ý tưởng bỏ đi phải cao hơn nữa: “Ý tưởng tốt chỉ có thể đến sau nhưng ý tưởng tồi, nhưng nó chỉ đến khi bạn đã có đủ nhiều ý tưởng tồi” - Seth Godin Nếu bạn chẳng dám đưa ra ý tưởng, bạn chắc chắn không có ý tưởng tồi nào, và cũng chẳng có ý tưởng tốt nào chứ đừng nói đến ý tưởng thành công. Đống ý tưởng giấy lộn có thể là vài dòng codes chẳng chạy như bạn mong muốn, ý tưởng về sản phẩm không thể tạo ra lãi, trò đùa mà chẳng ai cười, design mới mà chẳng ai buồn share hay bài thuyết trình công phu mà chẳng động tới tim ai cả. Nhưng không có chúng bạn sẽ chẳng có đủ kinh nghiệm, bài học, để ra đời những ý tưởng bớt tồi hơn. Ship more, on schedule - Hoàn thành nhiều công việc hơn, và đúng tiến độ: “Chúng ta hoàn thành công việc chẳng phải vì chúng ta sáng tạo, chúng ta sáng tạo bởi vì chúng ta hoàn thành công việc” - Seth Godin Hoàn thành công việc được giao đúng lịch trình, bất chấp bạn cảm thấy nó thế nào. Hoàn thành công việc là nguyên tắc bạn cần tạo cho mình, không phải lựa chọn - vì bạn muốn hay không. Nói rõ “Tôi sẽ hoàn thành ___ mỗi ___. Đó là cam kết của tôi, công việc của tôi”  Bản thân Seth Godin hoàn thành 1 blog post cho độc giả mỗi ngày. Đó là cam kết của ông và cũng là công việc của ông. Chắc chắn sẽ có những ngày bạn chẳng muốn hoàn thành hoặc tin là công việc bạn hoàn thành chẳng có tý chất lượng nào. Tuy nhiên, chất lượng công việc chỉ có thể tốt lên khi nó được hoàn thành, và điều đó sẽ tạo ra cho bạn năng lượng sáng tạo mới để hoàn thành tốt hơn các công việc tiếp theo. Mỗi lần hoàn thành công việc theo lịch trình định sẵn là cơ hội cho bạn cải tiến, phát triển nó tốt hơn so với công việc trước đó. Bằng việc liên tục cải tiến, bạn tự phát triển cho mình năng lực mới, tạo cho mình xúc giác mới để nhận viết được nên tập trung vào đâu để tạo điểm nhấn trong sản phẩm. Bắt đầu bằng việc hoàn thành và ship cho những người xung quanh (gia đình, bạn bè). Chỉ nên nhận những rủi ro trong sáng tạo mà bạn có khả năng chấp nhận được. Cùng với thời gian, năng lực và taste của bạn được phát triển hơn, bạn sẽ tìm đủ can đảm để ship sản phẩm của mình đến nhiều người hơn. Kết luận: Bằng việc học cách yêu lấy quá trình sáng tạo, chồng cao hơn đống ý tưởng bỏ đi, ship sản phảm của mình thường xuyên hơn, bạn sẽ tạo được sản phẩm mang chất riêng và làm tốt hơn điều mình muốn làm. “Tốt hơn lên là hoàn toàn có thể, nhưng chúng ta sẽ chẳng bao giờ đạt được nếu chúng ta chấp nhận ổn định, tiếp tục giấu khả năng của mình và chấp nhận đi đi đi lại con đường đã cũ. Chúng ta có nhiều thứ để làm, và chúng ta cần đóng góp. Nhưng điều đó chẳng thể hoặc mãi không xảy ra nếu chúng ta không tự tìm cách để tin tưởng bản thân mình đủ để can đảm làm công việc của mình” - Seth Godin "
    }, {
    "id": 14,
    "url": "thanh.be/powerful-things-markdown-editor/",
    "title": "Powerful things you can do with the Markdown editor",
    "body": "2018/06/12 - There are lots of powerful things you can do with the Markdown editor. If you’ve gotten pretty comfortable with writing in Markdown, then you may enjoy some more advanced tips about the types of things you can do with Markdown! As with the last post about the editor, you’ll want to be actually editing this post as you read it so that you can see all the Markdown code we’re using. Special formatting: As well as bold and italics, you can also use some other special formatting in Markdown when the need arises, for example:  strike through ==highlight== *escaped characters*Writing code blocks: There are two types of code elements which can be inserted in Markdown, the first is inline, and the other is block. Inline code is formatted by wrapping any word or words in back-ticks, like this. Larger snippets of code can be displayed across multiple lines using triple back ticks: 123. my-link {  text-decoration: underline;}HTML: 12345&lt;li class= ml-1 mr-1 &gt;  &lt;a target= _blank  href= # &gt;  &lt;i class= fab fa-twitter &gt;&lt;/i&gt;  &lt;/a&gt;&lt;/li&gt;CSS: 12345678. highlight . c {  color: #999988;  font-style: italic; }. highlight . err {  color: #a61717;  background-color: #e3d2d2; }JS: 123456789// alertbar later$(document). scroll(function () {  var y = $(this). scrollTop();  if (y &gt; 280) {    $('. alertbar'). fadeIn();  } else {    $('. alertbar'). fadeOut();  }});Python: 1print( Hello World )Ruby: 123require 'redcarpet'markdown = Redcarpet. new( Hello World! )puts markdown. to_htmlC: 1printf( Hello World ); Reference lists: The quick brown jumped over the lazy. Another way to insert links in markdown is using reference lists. You might want to use this style of linking to cite reference material in a Wikipedia-style. All of the links are listed at the end of the document, so you can maintain full separation between content and its source or reference. Full HTML: Perhaps the best part of Markdown is that you’re never limited to just Markdown. You can write HTML directly in the Markdown editor and it will just work as HTML usually does. No limits! Here’s a standard YouTube embed code as an example: "
    }, {
    "id": 15,
    "url": "thanh.be/first-mass-produced/",
    "title": "The first mass-produced book to deviate from a rectilinear format",
    "body": "2018/06/12 - The first mass-produced book to deviate from a rectilinear format, at least in the United States, is thought to be this 1863 edition of Red Riding Hood, cut into the shape of the protagonist herself with the troublesome wolf curled at her feet. Produced by the Boston-based publisher Louis Prang, this is the first in their “Doll Series”, a set of five “die-cut” books, known also as shape books — the other titles being Robinson Crusoe, Goody Two-Shoes (also written by Red Riding Hood author Lydia Very), Cinderella, and King Winter. An 1868 Prang catalogue would later claim that such “books in the shape of a regular paper Doll… originated with us”.  It would seem the claim could also extend to die cut books in general, as we can’t find anything sooner, but do let us know in the comments if you have further light to shed on this! Such books are, of course, still popular in children’s publishing today, though the die cutting is not now limited to mere outlines, as evidenced in a beautiful 2014 version of the same Little Red Riding Hood story. The die cut has also been employed in the non-juvenile sphere as well, a recent example being Jonathan Safran Foer’s ambitious Tree of Codes. As for this particular rendition of Charles Perrault’s classic tale, the text and design is by Lydia Very (1823-1901), sister of Transcendentalist poet Jones Very. The gruesome ending of the original - which sees Little Red Riding Hood being gobbled up as well as her grandmother - is avoided here, the gore giving way to the less bloody aims of the morality tale, and the lesson that one should not disobey one’s mother. "
    }, {
    "id": 16,
    "url": "thanh.be/education/",
    "title": "Education must also train one for quick, resolute and effective thinking.",
    "body": "2018/06/12 - There are lots of powerful things you can do with the Markdown editor If you’ve gotten pretty comfortable with writing in Markdown, then you may enjoy some more advanced tips about the types of things you can do with Markdown! As with the last post about the editor, you’ll want to be actually editing this post as you read it so that you can see all the Markdown code we’re using. Special formatting: As well as bold and italics, you can also use some other special formatting in Markdown when the need arises, for example:  strike through ==highlight== *escaped characters*Writing code blocks: There are two types of code elements which can be inserted in Markdown, the first is inline, and the other is block. Inline code is formatted by wrapping any word or words in back-ticks, like this. Larger snippets of code can be displayed across multiple lines using triple back ticks: 123. my-link {  text-decoration: underline;}If you want to get really fancy, you can even add syntax highlighting using Rouge.  Reference lists: The quick brown jumped over the lazy. Another way to insert links in markdown is using reference lists. You might want to use this style of linking to cite reference material in a Wikipedia-style. All of the links are listed at the end of the document, so you can maintain full separation between content and its source or reference. Full HTML: Perhaps the best part of Markdown is that you’re never limited to just Markdown. You can write HTML directly in the Markdown editor and it will just work as HTML usually does. No limits! Here’s a standard YouTube embed code as an example: "
    }, {
    "id": 17,
    "url": "thanh.be/acumulated-experience/",
    "title": "Accumulated experience of social living",
    "body": "2018/06/12 - The die cut has also been employed in the non-juvenile sphere as well, a recent example being Jonathan Safran Foer’s ambitious Tree of Codes. As for this particular rendition of Charles Perrault’s classic tale, the text and design is by Lydia Very (1823-1901), sister of Transcendentalist poet Jones Very. The gruesome ending of the original - which sees Little Red Riding Hood being gobbled up as well as her grandmother - is avoided here, the gore giving way to the less bloody aims of the morality tale, and the lesson that one should not disobey one’s mother. The first mass-produced book to deviate from a rectilinear format, at least in the United States, is thought to be this 1863 edition of Red Riding Hood, cut into the shape of the protagonist herself with the troublesome wolf curled at her feet. Produced by the Boston-based publisher Louis Prang, this is the first in their “Doll Series”, a set of five “die-cut” books, known also as shape books — the other titles being Robinson Crusoe, Goody Two-Shoes (also written by Red Riding Hood author Lydia Very), Cinderella, and King Winter. An 1868 Prang catalogue would later claim that such “books in the shape of a regular paper Doll… originated with us”.  It would seem the claim could also extend to die cut books in general, as we can’t find anything sooner, but do let us know in the comments if you have further light to shed on this! Such books are, of course, still popular in children’s publishing today, though the die cutting is not now limited to mere outlines, as evidenced in a beautiful 2014 version of the same Little Red Riding Hood story. "
    }, {
    "id": 18,
    "url": "thanh.be/about-bundler/",
    "title": "About Bundler",
    "body": "2018/05/12 - gem install bundler installs the bundler gem through RubyGems. You only need to install it once - not every time you create a new Jekyll project. Here are some additional details: bundler is a gem that manages other Ruby gems. It makes sure your gems and gem versions are compatible, and that you have all necessary dependencies each gem requires. The Gemfile and Gemfile. lock files inform Bundler about the gem requirements in your site. If your site doesn’t have these Gemfiles, you can omit bundle exec and just run jekyll serve. When you run bundle exec jekyll serve, Bundler uses the gems and versions as specified in Gemfile. lock to ensure your Jekyll site builds with no compatibility or dependency conflicts. For more information about how to use Bundler in your Jekyll project, this tutorial should provide answers to the most common questions and explain how to get up and running quickly. "
    }, {
    "id": 19,
    "url": "thanh.be/we-all-wait-for-summer/",
    "title": "We all wait for summer",
    "body": "2018/01/12 - As I engage in the so-called “bull sessions” around and about the school, I too often find that most college men have a misconception of the purpose of education. Most of the “brethren” think that education should equip them with the proper instruments of exploitation so that they can forever trample over the masses. Still others think that education should furnish them with noble ends rather than means to an end. It seems to me that education has a two-fold function to perform in the life of man and in society: the one is utility and the other is culture. Education must enable a man to become more efficient, to achieve with increasing facility the ligitimate goals of his life. "
    }, {
    "id": 20,
    "url": "thanh.be/tree-of-codes/",
    "title": "Tree of Codes",
    "body": "2018/01/12 - The first mass-produced book to deviate from a rectilinear format, at least in the United States, is thought to be this 1863 edition of Red Riding Hood, cut into the shape of the protagonist herself with the troublesome wolf curled at her feet. Produced by the Boston-based publisher Louis Prang, this is the first in their “Doll Series”, a set of five “die-cut” books, known also as shape books — the other titles being Robinson Crusoe, Goody Two-Shoes (also written by Red Riding Hood author Lydia Very), Cinderella, and King Winter. As for this particular rendition of Charles Perrault’s classic tale, the text and design is by Lydia Very (1823-1901), sister of Transcendentalist poet Jones Very. The gruesome ending of the original — which sees Little Red Riding Hood being gobbled up as well as her grandmother — is avoided here, the gore giving way to the less bloody aims of the morality tale, and the lesson that one should not disobey one’s mother.  It would seem the claim could also extend to die cut books in general, as we can’t find anything sooner, but do let us know in the comments if you have further light to shed on this! Such books are, of course, still popular in children’s publishing today, though the die cutting is not now limited to mere outlines, as evidenced in a beautiful 2014 version of the same Little Red Riding Hood story. An 1868 Prang catalogue would later claim that such “books in the shape of a regular paper Doll… originated with us”. The die cut has also been employed in the non-juvenile sphere as well, a recent example being Jonathan Safran Foer’s ambitious Tree of Codes. "
    }, {
    "id": 21,
    "url": "thanh.be/red-riding/",
    "title": "Red Riding Hood",
    "body": "2018/01/12 - The first mass-produced book to deviate from a rectilinear format, at least in the United States, is thought to be this 1863 edition of Red Riding Hood, cut into the shape of the protagonist herself with the troublesome wolf curled at her feet. Produced by the Boston-based publisher Louis Prang, this is the first in their “Doll Series”, a set of five “die-cut” books, known also as shape books — the other titles being Robinson Crusoe, Goody Two-Shoes (also written by Red Riding Hood author Lydia Very), Cinderella, and King Winter. An 1868 Prang catalogue would later claim that such “books in the shape of a regular paper Doll… originated with us”.  It would seem the claim could also extend to die cut books in general, as we can’t find anything sooner, but do let us know in the comments if you have further light to shed on this! Such books are, of course, still popular in children’s publishing today, though the die cutting is not now limited to mere outlines, as evidenced in a beautiful 2014 version of the same Little Red Riding Hood story. The die cut has also been employed in the non-juvenile sphere as well, a recent example being Jonathan Safran Foer’s ambitious Tree of Codes. As for this particular rendition of Charles Perrault’s classic tale, the text and design is by Lydia Very (1823-1901), sister of Transcendentalist poet Jones Very. The gruesome ending of the original — which sees Little Red Riding Hood being gobbled up as well as her grandmother — is avoided here, the gore giving way to the less bloody aims of the morality tale, and the lesson that one should not disobey one’s mother. "
    }, {
    "id": 22,
    "url": "thanh.be/press-and-education/",
    "title": "Press and education",
    "body": "2018/01/12 - Even the press, the classroom, the platform, and the pulpit in many instances do not give us objective and unbiased truths. To save man from the morass of propaganda, in my opinion, is one of the chief aims of education. Education must enable one to sift and weigh evidence, to discern the true from the false, the real from the unreal, and the facts from the fiction. Education must also train one for quick, resolute and effective thinking. To think incisively and to think for one’s self is very difficult.  We are prone to let our mental life become invaded by legions of half truths, prejudices, and propaganda. At this point, I often wonder whether or not education is fulfilling its purpose. A great majority of the so-called educated people do not think logically and scientifically. The function of education, therefore, is to teach one to think intensively and to think critically. But education which stops with efficiency may prove the greatest menace to society. The most dangerous criminal may be the man gifted with reason, but with no morals. The late Eugene Talmadge, in my opinion, possessed one of the better minds of Georgia, or even America. Moreover, he wore the Phi Beta Kappa key. By all measuring rods, Mr. Talmadge could think critically and intensively; yet he contends that I am an inferior being. Are those the types of men we call educated? We must remember that intelligence is not enough. Intelligence plus character–that is the goal of true education. The complete education gives one not only power of concentration, but worthy objectives upon which to concentrate. The broad education will, therefore, transmit to one not only the accumulated knowledge of the race but also the accumulated experience of social living. "
    }, {
    "id": 23,
    "url": "thanh.be/options-for-creating-new-site-with-jekyll/",
    "title": "Options for creating a new site with Jekyll",
    "body": "2018/01/12 - jekyll new &lt;PATH&gt; installs a new Jekyll site at the path specified (relative to current directory). In this case, Jekyll will be installed in a directory called myblog. Here are some additional details:  To install the Jekyll site into the directory you’re currently in, run jekyll new . If the existing directory isn’t empty, you can pass the –force option with jekyll new . –force.  jekyll new automatically initiates bundle install to install the dependencies required. (If you don’t want Bundler to install the gems, use jekyll new myblog --skip-bundle. ) By default, the Jekyll site installed by jekyll new uses a gem-based theme called Minima. With gem-based themes, some of the directories and files are stored in the theme-gem, hidden from your immediate view.  We recommend setting up Jekyll with a gem-based theme but if you want to start with a blank slate, use jekyll new myblog --blank To learn about other parameters you can include with jekyll new, type jekyll new --help. "
    }, {
    "id": 24,
    "url": "thanh.be/never-stopped-worrying-never-loved-bomb/",
    "title": "Never stopped worrying or loving the bomb",
    "body": "2018/01/12 -  I’ve been through fire and water, I tell you! From my earliest pebblehood the wildest things you could imagine have been happening to this world of ours, and I have been right in the midst of them. So begins Hallam Hawksworth’s The Strange Adventures of a Pebble. Written in the 1920s, the book was part of a series which also included The Adventures of a Grain of Dust and A Year in the Wonderland of Trees, all of which were supposed to introduce children to the world of Natural Sciences. In each of them, Hawksworth personifies the natural object he is exploring, and using a mixture of folk tales, scientific facts and colloquial, friendly explanations guides the reader through the history of the natural world. It’s a real thrill of a ride, dramatizing the life cycle of supposedly dull things. The Adventures of a Grain of Dust begins even more loudly than Pebble: I don’t want you to think that I’m boasting, but I do believe I’m one of the greatest travellers that ever was; and if anybody, living or dead, has ever gone through with more than I have I’d like to hear about it. Hallam Hawksworth was the pen-name of teacher Francis Blake Atkinson. He was married to the author Eleanor Stackhouse Atkinson, author of the children’s classic Greyfriars Bobby, which was based on the (supposedly) true story of a Scottish dog who spent fourteen years guarding his masters grave. The couple were both committed to education and published a weekly magazine for Chicago high school students called The Little Chronicle, as well as working for Encyclopaedia companies later in life. "
    }, {
    "id": 25,
    "url": "thanh.be/is-intelligence-enough/",
    "title": "External Featured Image",
    "body": "2018/01/12 - Education must also train one for quick, resolute and effective thinking. To think incisively and to think for one’s self is very difficult.  We are prone to let our mental life become invaded by legions of half truths, prejudices, and propaganda. At this point, I often wonder whether or not education is fulfilling its purpose. A great majority of the so-called educated people do not think logically and scientifically. Even the press, the classroom, the platform, and the pulpit in many instances do not give us objective and unbiased truths. To save man from the morass of propaganda, in my opinion, is one of the chief aims of education. Education must enable one to sift and weigh evidence, to discern the true from the false, the real from the unreal, and the facts from the fiction. The function of education, therefore, is to teach one to think intensively and to think critically. But education which stops with efficiency may prove the greatest menace to society. The most dangerous criminal may be the man gifted with reason, but with no morals. The late Eugene Talmadge, in my opinion, possessed one of the better minds of Georgia, or even America. Moreover, he wore the Phi Beta Kappa key. By all measuring rods, Mr. Talmadge could think critically and intensively; yet he contends that I am an inferior being. Are those the types of men we call educated? We must remember that intelligence is not enough. Intelligence plus character–that is the goal of true education. The complete education gives one not only power of concentration, but worthy objectives upon which to concentrate. The broad education will, therefore, transmit to one not only the accumulated knowledge of the race but also the accumulated experience of social living. "
    }, {
    "id": 26,
    "url": "thanh.be/quick-start-guide/",
    "title": "O'Reilly AI Newsletter - Week 27/2019",
    "body": "2018/01/11 -       1. AI will require retraining your entire organization         “Implementing and incorporating AI and machine learning technologies will require retraining across an organization, not just technical teams,” says Ben Lorica. Here’s why.        2. It’s not killing jobs. (Yet. )         A new ZipRecruiter report found that AI created three times as many jobs as it eliminated in 2018.                3. Learnin’ good all this AI stuff for product management         Marc Cramer takes a look at what product managers need to know about AI to be at peak effectiveness. + Herding Cats: Product Management in the Machine Learning Era, tutorial at the AI Conference in San Jose               4. What it really takes to scale AI         Spoiler alert: Technology isn’t the biggest challenge. Changing company culture is the key.                5. How AI can help predict toxic algal blooms         It’s not the first AI designed to predict algal blooms, but by automating the identification of algae and the labeling when new algae are identified, this system scales easier.          6. What AI can tell you about a low voice or Advil         When people suffering from depression speak, the range and pitch of their voice tends to be lower. Someone who uses words like “ibuprofen” or “Advil” is 14 times more likely to need emergency services than a person who uses “suicide. ” Here’s how AI can save your life.        7. AI needs a new developer stack         Krishna Gade, CEO of Fiddler Labs, looks at the gaps in systems and tools for AI developers.                8. Facial recognition is coming to porn—and these men can’t wait         This just can’t end well. + “Controversial deepfake app DeepNude shuts down hours after being exposed. ”   "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});