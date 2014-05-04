..WhosOutThere
============

Description of project:
There are many tools to aid in trip planning, covering transportation, lodging and other aspects of the trip. However, there is no convenient tool for travellers to find friends and acquaintances who are staying at the destination. We developed this application as a tool for travellers to not only identify friends staying at their destination, but also for them to communicate with these friends and set up meetings. To this end, we will leverage the data available on Facebook to identify the locations of the user’s friends, while use Google Maps to present this data in a clear and concise manner. Because of the universality of Facebook, it’s messaging service will also be our platform of choice for communicating with the user’s friends.

URL: http://bit.ly/whosoutthere

Set up database:<br>
1. Go to trunk/sql<br>
2. Import heng3_whosoutthere.sql to add the tables<br>

Installing the code:<br>
1. Copy and paste all the code in trunk to the directory which you are using to host the website

Running qunit tests:
1. Go to (domain name)/test.html.

Running PHPUnit Tests:<br>
1. Go to the directory containing the app's code.<br>
2. cd php<br>
3. Run phpunit --bootstrap functions.php testadditinerary.php and phpunit --bootstrap functions.php testaddnewuser.php<br>

Running Selenium Tests:<br>
1. Install Selenium IDE on firefox. Visit here to download: http://docs.seleniumhq.org/download/ <br>
2. Open Selenium<br>
3. File->Open Test Suite-> (Go to trunk/seleniumtests and open seleniumtestsuite)<br>
4. Play entire test suite<br>

Team members:
Joshua Heng
Shuotian Chen
Samuel Zhang
Xiaoying Feng
Weijian Zhou
Yanyan Zhang
