Eclipse app (2017 US)

How it works: 
Entry point: zip code entered by user

1) on keydown: fetch CITY & STATE: http://api.zippopotam.us/us/ (eclipse_t1.html)
- feed to usno API : fetch LOCAL eclipse TIME, LAT & LONGITUDE:  http://aa.usno.navy.mil/data/docs/api.php#soleclipse 
## Output: LOCAL ECLIPSE TIME 

2) feed to countdown clock function inside local script (eclipse_t1.html)
## Output: COUNTDOWN IN LOCAL TIME (top left corner)

3) feed to json data (totalEclipse_lat_long.json) to find out the closest city (distanceTest1.html)
## Output: CLOSEST CITY & Est. TRAVEL TIME

4) Start Again button refreshes the page

==============================================================================

Features:
1) input field: zip code
2) counter clock (adjusted by local time)
3) local eclipse time
4) closest total eclipse city
5) est. travel time


Implementation/how to get data and get it passed around:
1) zip code making an ajax call to fetch city & abbreviated state name from : http://api.zippopotam.us/us/ZIPCODE BY USER
2) gets city & state data from google map api then send them to : http://aa.usno.navy.mil/data/docs/api.php#soleclipse
3) usno returns data about: local eclipse time (counterclock), longitude & latitude
4) it goes through json data inside totalEclipse_lat_long.json and makes calculation to show which is the closest city that has total eclipse and an estimate time to get there from user's location
5) Resulting data is added to their fields (divs).


APIs:
City and state from zip code: http://api.zippopotam.us/us/77379
Eclipse data (local time, latitude & longitude) : http://aa.usno.navy.mil/data/docs/api.php#soleclipse
Calculating distance: google distance matrix API :
- homepage:  https://developers.google.com/maps/documentation/distance-matrix/start)
- API lnk:  https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=YOUR_API_KEY


Misc. sources:
US zip codes: http://www.phaster.com/zip_code.html
How to calculate nearest lon/lat location from JSON data: 
https://stackoverflow.com/questions/15671999/json-longitude-latitude-nearest-location
http://jsfiddle.net/MLETD/

