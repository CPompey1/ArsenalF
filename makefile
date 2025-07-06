PROJ_DIR := $(shell pwd)
FRONTEND_BUILD_TGT := $(PROJ_DIR)/nginx/build
FRONTEND_BUILD_SRC := $(PROJ_DIR)/frontend/build
develop_up:
	./scripts/build_and_run_local

docker_up: nginx_build
	docker compose up --build --force-recreate

frontend_build: $(FRONTEND_BUILD_TGT)

nginx_build: $(shell find $(PROJ_DIR)/nginx -type f) frontend_build	

$(FRONTEND_BUILD_TGT): $(FRONTEND_BUILD_SRC) $(PROJ_DIR)/scripts/replace_strapi_api_key
	cp -r $(FRONTEND_BUILD_SRC) $(FRONTEND_BUILD_TGT)
	cp $(PROJ_DIR)/scripts/replace_strapi_api_key $(FRONTEND_BUILD_TGT)

$(FRONTEND_BUILD_SRC): $(PROJ_DIR)/frontend/package.json $(shell find $(PROJ_DIR)/frontend/public $(PROJ_DIR)/frontend/src -type f)
	cd $(PROJ_DIR)/frontend; rm -rf package-lock.json; npm install --force; npm run build

strapi_build: $(PROJ_DIR)/cms/package.json $(shell find $(PROJ_DIR)/cms/public $(PROJ_DIR)/cms/src $(PROJ_DIR)/cms/types $(PROJ_DIR)/cms/config -type f)
	cd $(PROJ_DIR)/cms; npm install --force; npm run build; NODE_ENV=production npm run build; 

clean: 
	rm -rf $(FRONTEND_BUILD_TGT) $(PROJ_DIR)/cms/build 
	rm -rf $(PROJ_DIR)/cms/node_modules $(PROJ_DIR)/frontend/node_modules
	rm $(PROJ_DIR)/scripts/replace_strapi_api_key
	


