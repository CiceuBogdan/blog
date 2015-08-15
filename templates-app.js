angular.module('templates-app', ['articole/articole.tpl.html', 'contact/blog.tpl.html', 'contact/contact.tpl.html', 'home/home.tpl.html']);

angular.module("articole/articole.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("articole/articole.tpl.html",
    "<div class=\"container\">\n" +
    "    <!-- Set your background image for this header on the line below. -->\n" +
    "    <br>\n" +
    "    <br>\n" +
    "    <br>\n" +
    "    <br>\n" +
    "    <header class=\"intro-header\" style=\"background-image: url('assets/articole2.jpg')\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n" +
    "                    <div class=\"site-heading\">\n" +
    "                        <h1>Articole</h1>\n" +
    "                        <hr class=\"small\">\n" +
    "                        <span class=\"subheading\">Learn as much by writing as by reading.</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </header>\n" +
    "\n" +
    "\n" +
    "    <hr>\n" +
    "    <!-- jQuery -->\n" +
    "    <script src=\"js/jquery.js\"></script>\n" +
    "\n" +
    "    <!-- Bootstrap Core JavaScript -->\n" +
    "    <script src=\"js/bootstrap.min.js\"></script>\n" +
    "\n" +
    "    <!-- Custom Theme JavaScript -->\n" +
    "    <script src=\"js/clean-blog.min.js\"></script>\n" +
    "<div>\n" +
    "");
}]);

angular.module("contact/blog.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/blog.tpl.html",
    "<div class=\"container\">\n" +
    "    <!-- Set your background image for this header on the line below. -->\n" +
    "    <header class=\"intro-header\" style=\"background-image: url('img/home-bg.jpg')\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n" +
    "                    <div class=\"site-heading\">\n" +
    "                        <h1>Clean Blog</h1>\n" +
    "                        <hr class=\"small\">\n" +
    "                        <span class=\"subheading\">A Clean Blog Theme by Start Bootstrap</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </header>\n" +
    "\n" +
    "    <!-- Main Content -->\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n" +
    "                <div class=\"post-preview\">\n" +
    "                    <a href=\"post.html\">\n" +
    "                        <h2 class=\"post-title\">\n" +
    "                            Man must explore, and this is exploration at its greatest\n" +
    "                        </h2>\n" +
    "                        <h3 class=\"post-subtitle\">\n" +
    "                            Problems look mighty small from 150 miles up\n" +
    "                        </h3>\n" +
    "                    </a>\n" +
    "                    <p class=\"post-meta\">Posted by <a href=\"#\">Start Bootstrap</a> on September 24, 2014</p>\n" +
    "                </div>\n" +
    "                <hr>\n" +
    "                <div class=\"post-preview\">\n" +
    "                    <a href=\"post.html\">\n" +
    "                        <h2 class=\"post-title\">\n" +
    "                            I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.\n" +
    "                        </h2>\n" +
    "                    </a>\n" +
    "                    <p class=\"post-meta\">Posted by <a href=\"#\">Start Bootstrap</a> on September 18, 2014</p>\n" +
    "                </div>\n" +
    "                <hr>\n" +
    "                <div class=\"post-preview\">\n" +
    "                    <a href=\"post.html\">\n" +
    "                        <h2 class=\"post-title\">\n" +
    "                            Science has not yet mastered prophecy\n" +
    "                        </h2>\n" +
    "                        <h3 class=\"post-subtitle\">\n" +
    "                            We predict too much for the next year and yet far too little for the next ten.\n" +
    "                        </h3>\n" +
    "                    </a>\n" +
    "                    <p class=\"post-meta\">Posted by <a href=\"#\">Start Bootstrap</a> on August 24, 2014</p>\n" +
    "                </div>\n" +
    "                <hr>\n" +
    "                <div class=\"post-preview\">\n" +
    "                    <a href=\"post.html\">\n" +
    "                        <h2 class=\"post-title\">\n" +
    "                            Failure is not an option\n" +
    "                        </h2>\n" +
    "                        <h3 class=\"post-subtitle\">\n" +
    "                            Many say exploration is part of our destiny, but it’s actually our duty to future generations.\n" +
    "                        </h3>\n" +
    "                    </a>\n" +
    "                    <p class=\"post-meta\">Posted by <a href=\"#\">Start Bootstrap</a> on July 8, 2014</p>\n" +
    "                </div>\n" +
    "                <hr>\n" +
    "                <!-- Pager -->\n" +
    "                <ul class=\"pager\">\n" +
    "                    <li class=\"next\">\n" +
    "                        <a href=\"#\">Older Posts &rarr;</a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <hr>\n" +
    "    <!-- jQuery -->\n" +
    "    <script src=\"js/jquery.js\"></script>\n" +
    "\n" +
    "    <!-- Bootstrap Core JavaScript -->\n" +
    "    <script src=\"js/bootstrap.min.js\"></script>\n" +
    "\n" +
    "    <!-- Custom Theme JavaScript -->\n" +
    "    <script src=\"js/clean-blog.min.js\"></script>\n" +
    "<div>\n" +
    "");
}]);

angular.module("contact/contact.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/contact.tpl.html",
    "<div>\n" +
    "\n" +
    "<!-- Set your background image for this header on the line below. -->\n" +
    "<header class=\"intro-header\" style=\"background-image: url('assets/eu.jpg')\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n" +
    "                <div class=\"site-heading\">\n" +
    "                    <h1>Eu</h1>\n" +
    "                    <hr class=\"small\">\n" +
    "                    <span class=\"subheading\">Contact</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</header>\n" +
    "<!-- Post Content -->\n" +
    "<article>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n" +
    "                <p>Sunt un om simplu, căruia îi place să fie el însuși și să facă ceea ce îl taie capul. Mă pasionează să studiez oamenii și să înțeleg concepte abstracte. Ador următoarele concepte: comuniune, adevăr, spiritualitate, psihologie, matematică, logică, proiect personal, vis, creativitate, om, uimire, viață, observare.\n" +
    "                	Comuniune. Consider comuniunea între oameni ca fiind un concept fundamental, de care simt că am nevoie pentru a fi fericit, îmi place să văd oameni care trăiesc în comuniune și iubesc să simt și să știu că trăiesc în comuniune cu cei din jurul meu.\n" +
    "                	Adevăr. Prin clasa a 11-a, am mers la domnu psiholog pentru că aveam nevoie de o foaie care să dovedească că nu sunt nebun (pentru școala de șoferi). Și domnu psiholog mă întreabă dacă vreau să merg la facultate, și îi zic că da. Și mă întreabă: da de ce? Și stau puțin, mă gândesc, știam că îmi place efectiv să învăț chestii noi și că vreau să mă dezvolt. Și mi-a venit natural următoarea idee: Îmi place să aflu care e adevărul și să aprofundez concepte pentru a afla cum funcționează și de ce funcționează  și deocamdată facultatea e singurul mijloc care m-ar putea susține în drumul meu pentru aflarea adevărului adevărat, pe care să-l înțeleg atât cu mintea cât și să-l simt cu inima.\n" +
    "                	Spiritualitate. Simt că dezvoltarea spirituală mi-a oferit cel mai mult sprijin în viață.\n" +
    "                	Psihologie. Psihologia înseamnă, pentru mine, înțelegerea psihicului, adică a gândurilor și modului de funcționare a creierului. Ador să-i ajut pe ceilalți să își depășească limitele, ador să fiu un model pentru alți, iar pentru a reuși asta am nevoie să înțeleg de ce noi oameni facem lucrurile așa cum le facem.\n" +
    "                	Matematică și logică. Ieiiiii, concepte logice, rezolvarea unei probleme, ajungerea la un rezultat, îmi plac concepte astea datorită următorului paragraf.\n" +
    "                	Proiect personal. Să construiești ceva din nimic, să faci ceva, să schimbi ceva. Simt că pentru a-mi realiza proiectele personale am nevoie de matematică și logică, care îmi oferă abilitatea de a organiza proiectul, de al simplifica, de a vedea oportunități și de a mă bucura de eficiență maximă.	Vis. Îmi place să visez la lucruri mărețe, simt că de când mă știu iubesc să construiesc în interior o lume complexă în care există foarte multe posibilități, iubesc să fiu un visător.\n" +
    "                	Creativitate. Îmi place să-mi exprim creativitatea atunci când știu că fac pe cineva să zâmbească sau când vreau doar să mă fac pe mine să zâmbesc.\n" +
    "                	Om. Oamenii sunt totul. Oamenii pot fi extraordinari, pot fi creatori, pot fi Dumnezei în propria viață. Îmi place să văd aceea sămânță de divinitate în fiecare om și am o mare dorință de a ajuta orice om să-și recunoască divinitatea din el.\n" +
    "                	Uimire. Copii știu cu adevărat să se lase uimiți de viață. Și mie îmi place să mă las uimit de frumusețea vieții.\n" +
    "                	Viață. Vitalitate, energie, eu, tu, noi. Îmi place să simt că trăiesc.\n" +
    "                	Observare. Observ oamenii din jur, poate chiar prea mult. Sunt atent la detali, aparent nesemnificative. Îmi observ reacțiile și gândurile. Observ natura și îmi dau silința de a sta în prezent și de a observa.\n" +
    "                </p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</article>\n" +
    "</div>\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"container\">\n" +
    "    <!-- Set your background image for this header on the line below. -->\n" +
    "    <header class=\"intro-header\" style=\"background-image: url('assets/eu.jpg')\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n" +
    "                    <div class=\"site-heading\">\n" +
    "                        <h1>Blog</h1>\n" +
    "                        <hr class=\"small\">\n" +
    "                        <span class=\"subheading\">Bogdan Ciceu</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </header>\n" +
    "\n" +
    "    <!-- Main Content -->\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n" +
    "                <div class=\"post-preview\">\n" +
    "                    <a href=\"post.html\">\n" +
    "                        <h2 class=\"post-title\">\n" +
    "                            Man must explore, and this is exploration at its greatest\n" +
    "                        </h2>\n" +
    "                        <h3 class=\"post-subtitle\">\n" +
    "                            Problems look mighty small from 150 miles up\n" +
    "                        </h3>\n" +
    "                    </a>\n" +
    "                    <p class=\"post-meta\">Posted by <a href=\"#\">Start Bootstrap</a> on September 24, 2014</p>\n" +
    "                </div>\n" +
    "                <hr>\n" +
    "                <div class=\"post-preview\">\n" +
    "                    <a href=\"post.html\">\n" +
    "                        <h2 class=\"post-title\">\n" +
    "                            I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.\n" +
    "                        </h2>\n" +
    "                    </a>\n" +
    "                    <p class=\"post-meta\">Posted by <a href=\"#\">Start Bootstrap</a> on September 18, 2014</p>\n" +
    "                </div>\n" +
    "                <hr>\n" +
    "                <div class=\"post-preview\">\n" +
    "                    <a href=\"post.html\">\n" +
    "                        <h2 class=\"post-title\">\n" +
    "                            Science has not yet mastered prophecy\n" +
    "                        </h2>\n" +
    "                        <h3 class=\"post-subtitle\">\n" +
    "                            We predict too much for the next year and yet far too little for the next ten.\n" +
    "                        </h3>\n" +
    "                    </a>\n" +
    "                    <p class=\"post-meta\">Posted by <a href=\"#\">Start Bootstrap</a> on August 24, 2014</p>\n" +
    "                </div>\n" +
    "                <hr>\n" +
    "                <div class=\"post-preview\">\n" +
    "                    <a href=\"post.html\">\n" +
    "                        <h2 class=\"post-title\">\n" +
    "                            Failure is not an option\n" +
    "                        </h2>\n" +
    "                        <h3 class=\"post-subtitle\">\n" +
    "                            Many say exploration is part of our destiny, but it’s actually our duty to future generations.\n" +
    "                        </h3>\n" +
    "                    </a>\n" +
    "                    <p class=\"post-meta\">Posted by <a href=\"#\">Start Bootstrap</a> on July 8, 2014</p>\n" +
    "                </div>\n" +
    "                <hr>\n" +
    "                <!-- Pager -->\n" +
    "                <ul class=\"pager\">\n" +
    "                    <li class=\"next\">\n" +
    "                        <a href=\"#\">Older Posts &rarr;</a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <hr>\n" +
    "<div>\n" +
    "");
}]);
