
all:
	@echo Specify something...

clean:
	@rm ./index.js

watch:
	watchify ./src/routes/index.js -v -d -t [babelify --presets [ es2015 react stage-2] ] -t node-lessify -t imgurify -o index.js

build:
	browserify ./src/routes/index.js -v -d  -t  -t [babelify --presets [ es2015 react stage-2] ] -t node-lessify -t imgurify | uglifyjs -c > index.js
	
upload:
	scp ./*.html admin@nestor:www/meg/lights
	scp ./*.js admin@nestor:www/meg/lights
	scp ./*.png admin@nestor:www/meg/lights
