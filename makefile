
APP_CONTENT  = ./index.js
APP_ICON     = ./icon.png
APP_HTML     = ./index.html
APP_FILES    = $(APP_ICON) $(APP_HTML) $(APP_CONTENT)
APP_SOURCE   = ./src/routes/index.js

SRC_FILES    = $(shell find ./src -type f -not -path '*/\.*') $(APP_ICON) $(APP_HTML)

WEB_LOCATION = www/meg/lampor
WEB_USER     = admin
WEB_SERVER   = nestor

BABELIFY     = -t [babelify --presets [ es2015 react stage-2] ]
LESSIFY      = -t node-lessify
IMGURIFY     = -t imgurify
UGLYFY       = uglifyjs -c -m
ENVIFY       = -g [envify --NODE_ENV 'production']

all: $(APP_FILES)

watch:
	watchify $(APP_SOURCE) -v -d  $(BABELIFY) $(LESSIFY) $(IMGURIFY) -o $(APP_CONTENT)

build:
	browserify $(APP_SOURCE) -v -d $(ENVIFY) $(BABELIFY) $(LESSIFY) -t $(IMGURIFY) | $(UGLYFY) > $(APP_CONTENT)

upload:
	scp $(APP_FILES) $(WEB_USER)@$(WEB_SERVER):$(WEB_LOCATION)

$(APP_CONTENT) : $(SRC_FILES)
	browserify $(APP_SOURCE) -v -d $(ENVIFY) $(BABELIFY) $(LESSIFY) -t $(IMGURIFY) | $(UGLYFY) > $(APP_CONTENT)
