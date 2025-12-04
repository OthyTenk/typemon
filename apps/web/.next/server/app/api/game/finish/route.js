"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/game/finish/route";
exports.ids = ["app/api/game/finish/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgame%2Ffinish%2Froute&page=%2Fapi%2Fgame%2Ffinish%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgame%2Ffinish%2Froute.ts&appDir=%2FVolumes%2FMDATA%2FProj%2Ftypemon%2Fapps%2Fweb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FMDATA%2FProj%2Ftypemon%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgame%2Ffinish%2Froute&page=%2Fapi%2Fgame%2Ffinish%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgame%2Ffinish%2Froute.ts&appDir=%2FVolumes%2FMDATA%2FProj%2Ftypemon%2Fapps%2Fweb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FMDATA%2FProj%2Ftypemon%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/../../node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/../../node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/../../node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Volumes_MDATA_Proj_typemon_apps_web_app_api_game_finish_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/game/finish/route.ts */ \"(rsc)/./app/api/game/finish/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/game/finish/route\",\n        pathname: \"/api/game/finish\",\n        filename: \"route\",\n        bundlePath: \"app/api/game/finish/route\"\n    },\n    resolvedPagePath: \"/Volumes/MDATA/Proj/typemon/apps/web/app/api/game/finish/route.ts\",\n    nextConfigOutput,\n    userland: _Volumes_MDATA_Proj_typemon_apps_web_app_api_game_finish_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/game/finish/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyLmpzP25hbWU9YXBwJTJGYXBpJTJGZ2FtZSUyRmZpbmlzaCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZ2FtZSUyRmZpbmlzaCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmdhbWUlMkZmaW5pc2glMkZyb3V0ZS50cyZhcHBEaXI9JTJGVm9sdW1lcyUyRk1EQVRBJTJGUHJvaiUyRnR5cGVtb24lMkZhcHBzJTJGd2ViJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZWb2x1bWVzJTJGTURBVEElMkZQcm9qJTJGdHlwZW1vbiUyRmFwcHMlMkZ3ZWImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2lCO0FBQzlGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHR5cGVtb24vd2ViLz9lNGEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Wb2x1bWVzL01EQVRBL1Byb2ovdHlwZW1vbi9hcHBzL3dlYi9hcHAvYXBpL2dhbWUvZmluaXNoL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9nYW1lL2ZpbmlzaC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2dhbWUvZmluaXNoXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9nYW1lL2ZpbmlzaC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Wb2x1bWVzL01EQVRBL1Byb2ovdHlwZW1vbi9hcHBzL3dlYi9hcHAvYXBpL2dhbWUvZmluaXNoL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9nYW1lL2ZpbmlzaC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgame%2Ffinish%2Froute&page=%2Fapi%2Fgame%2Ffinish%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgame%2Ffinish%2Froute.ts&appDir=%2FVolumes%2FMDATA%2FProj%2Ftypemon%2Fapps%2Fweb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FMDATA%2FProj%2Ftypemon%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/game/finish/route.ts":
/*!**************************************!*\
  !*** ./app/api/game/finish/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/db */ \"(rsc)/./libs/db.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/../../node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/../../node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _libs_authOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/libs/authOptions */ \"(rsc)/./libs/authOptions.ts\");\n\n\n\n\nconst POST = async (request)=>{\n    const body = await request.json();\n    const { result, gameCode } = body;\n    if (!gameCode) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Bad request\", {\n            status: 500\n        });\n    }\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_libs_authOptions__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    if (!session?.user?.email) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Unauthorized\", {\n            status: 401\n        });\n    }\n    await _libs_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].myHistory.create({\n        data: {\n            wpm: result.WPM,\n            cpm: result.CPM,\n            mistakes: result.mistakes,\n            time: result.time,\n            userEmail: session.user.email,\n            language: \"en\"\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(\"ok\");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dhbWUvZmluaXNoL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QjtBQUNZO0FBQ0U7QUFDQTtBQUVyQyxNQUFNSSxPQUFPLE9BQU9DO0lBQ3pCLE1BQU1DLE9BQU8sTUFBTUQsUUFBUUUsSUFBSTtJQUMvQixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdIO0lBRTdCLElBQUksQ0FBQ0csVUFBVTtRQUNiLE9BQU8sSUFBSVIscURBQVlBLENBQUMsZUFBZTtZQUFFUyxRQUFRO1FBQUk7SUFDdkQ7SUFFQSxNQUFNQyxVQUFVLE1BQU1ULDJEQUFnQkEsQ0FBQ0MseURBQVdBO0lBRWxELElBQUksQ0FBQ1EsU0FBU0MsTUFBTUMsT0FBTztRQUN6QixPQUFPLElBQUlaLHFEQUFZQSxDQUFDLGdCQUFnQjtZQUFFUyxRQUFRO1FBQUk7SUFDeEQ7SUFFQSxNQUFNVixnREFBTUEsQ0FBQ2MsU0FBUyxDQUFDQyxNQUFNLENBQUM7UUFDNUJDLE1BQU07WUFDSkMsS0FBS1QsT0FBT1UsR0FBRztZQUNmQyxLQUFLWCxPQUFPWSxHQUFHO1lBQ2ZDLFVBQVViLE9BQU9hLFFBQVE7WUFDekJDLE1BQU1kLE9BQU9jLElBQUk7WUFDakJDLFdBQVdaLFFBQVFDLElBQUksQ0FBQ0MsS0FBSztZQUM3QlcsVUFBVTtRQUNaO0lBQ0Y7SUFFQSxPQUFPdkIscURBQVlBLENBQUNNLElBQUksQ0FBQztBQUMzQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHR5cGVtb24vd2ViLy4vYXBwL2FwaS9nYW1lL2ZpbmlzaC9yb3V0ZS50cz8xNDU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcIkAvbGlicy9kYlwiXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIlxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IGF1dGhPcHRpb25zIGZyb20gXCJAL2xpYnMvYXV0aE9wdGlvbnNcIlxuXG5leHBvcnQgY29uc3QgUE9TVCA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0KSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKVxuICBjb25zdCB7IHJlc3VsdCwgZ2FtZUNvZGUgfSA9IGJvZHlcblxuICBpZiAoIWdhbWVDb2RlKSB7XG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJCYWQgcmVxdWVzdFwiLCB7IHN0YXR1czogNTAwIH0pXG4gIH1cblxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucylcblxuICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSB7XG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJVbmF1dGhvcml6ZWRcIiwgeyBzdGF0dXM6IDQwMSB9KVxuICB9XG5cbiAgYXdhaXQgcHJpc21hLm15SGlzdG9yeS5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIHdwbTogcmVzdWx0LldQTSxcbiAgICAgIGNwbTogcmVzdWx0LkNQTSxcbiAgICAgIG1pc3Rha2VzOiByZXN1bHQubWlzdGFrZXMsXG4gICAgICB0aW1lOiByZXN1bHQudGltZSxcbiAgICAgIHVzZXJFbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsLFxuICAgICAgbGFuZ3VhZ2U6IFwiZW5cIixcbiAgICB9LFxuICB9KVxuXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcIm9rXCIpXG59XG4iXSwibmFtZXMiOlsicHJpc21hIiwiTmV4dFJlc3BvbnNlIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwiUE9TVCIsInJlcXVlc3QiLCJib2R5IiwianNvbiIsInJlc3VsdCIsImdhbWVDb2RlIiwic3RhdHVzIiwic2Vzc2lvbiIsInVzZXIiLCJlbWFpbCIsIm15SGlzdG9yeSIsImNyZWF0ZSIsImRhdGEiLCJ3cG0iLCJXUE0iLCJjcG0iLCJDUE0iLCJtaXN0YWtlcyIsInRpbWUiLCJ1c2VyRW1haWwiLCJsYW5ndWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/game/finish/route.ts\n");

/***/ }),

/***/ "(rsc)/./libs/authOptions.ts":
/*!*****************************!*\
  !*** ./libs/authOptions.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/db */ \"(rsc)/./libs/db.ts\");\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/../../node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/../../node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/../../node_modules/next-auth/providers/github.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/../../node_modules/next-auth/providers/google.js\");\n\n\n\n\n\n\nconst authOptions = {\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__.PrismaAdapter)(_libs_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n            clientId: process.env.GITHUB_CLIENT_ID,\n            clientSecret: process.env.GITHUB_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.email) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                try {\n                    const user = await _libs_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n                        where: {\n                            email: credentials.email\n                        }\n                    });\n                    if (!user || !user?.hashedPassword) {\n                        throw new Error(\"Invalid credentials\");\n                    }\n                    const isCorrectPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(credentials.password, user.hashedPassword);\n                    if (!isCorrectPassword) {\n                        throw new Error(\"Invalid credentials\");\n                    }\n                    return {\n                        ...user,\n                        hashedPassword: null\n                    };\n                } catch (error) {\n                    console.log(error);\n                }\n                return null;\n            }\n        })\n    ],\n    debug: \"development\" === \"development\",\n    secret: process.env.NEXTAUTH_SECRET,\n    session: {\n        strategy: \"jwt\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authOptions);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWJzL2F1dGhPcHRpb25zLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThCO0FBQ3NCO0FBQ3pCO0FBR3NDO0FBQ1Y7QUFDQTtBQUV2RCxNQUFNTSxjQUErQjtJQUNuQ0MsU0FBU04sbUVBQWFBLENBQUNELGdEQUFNQTtJQUM3QlEsV0FBVztRQUNUSixzRUFBY0EsQ0FBQztZQUNiSyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0I7UUFDaEQ7UUFDQVQsc0VBQWNBLENBQUM7WUFDYkksVUFBVUMsUUFBUUMsR0FBRyxDQUFDSSxnQkFBZ0I7WUFDdENGLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0ssb0JBQW9CO1FBQ2hEO1FBQ0FiLDJFQUFtQkEsQ0FBQztZQUNsQmMsTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO2dCQUFPO2dCQUN0Q0MsVUFBVTtvQkFBRUYsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBLE1BQU1FLFdBQVVMLFdBQVc7Z0JBQ3pCLElBQUksQ0FBQ0EsYUFBYUMsU0FBUyxDQUFDRCxhQUFhQyxPQUFPO29CQUM5QyxNQUFNLElBQUlLLE1BQU07Z0JBQ2xCO2dCQUVBLElBQUk7b0JBQ0YsTUFBTUMsT0FBTyxNQUFNekIsZ0RBQU1BLENBQUN5QixJQUFJLENBQUNDLFVBQVUsQ0FBQzt3QkFDeENDLE9BQU87NEJBQ0xSLE9BQU9ELFlBQVlDLEtBQUs7d0JBQzFCO29CQUNGO29CQUVBLElBQUksQ0FBQ00sUUFBUSxDQUFDQSxNQUFNRyxnQkFBZ0I7d0JBQ2xDLE1BQU0sSUFBSUosTUFBTTtvQkFDbEI7b0JBRUEsTUFBTUssb0JBQW9CLE1BQU0zQixxREFBYyxDQUM1Q2dCLFlBQVlJLFFBQVEsRUFDcEJHLEtBQUtHLGNBQWM7b0JBR3JCLElBQUksQ0FBQ0MsbUJBQW1CO3dCQUN0QixNQUFNLElBQUlMLE1BQU07b0JBQ2xCO29CQUVBLE9BQU87d0JBQUUsR0FBR0MsSUFBSTt3QkFBRUcsZ0JBQWdCO29CQUFLO2dCQUN6QyxFQUFFLE9BQU9HLE9BQU87b0JBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7Z0JBQ2Q7Z0JBQ0EsT0FBTztZQUNUO1FBQ0Y7S0FDRDtJQUNERyxPQUFPeEIsa0JBQXlCO0lBQ2hDeUIsUUFBUXpCLFFBQVFDLEdBQUcsQ0FBQ3lCLGVBQWU7SUFDbkNDLFNBQVM7UUFDUEMsVUFBVTtJQUNaO0FBQ0Y7QUFFQSxpRUFBZWhDLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdHlwZW1vbi93ZWIvLi9saWJzL2F1dGhPcHRpb25zLnRzPzk4OWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWJzL2RiXCJcbmltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQGF1dGgvcHJpc21hLWFkYXB0ZXJcIlxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCJcbmltcG9ydCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IHsgQWRhcHRlciB9IGZyb20gXCJuZXh0LWF1dGgvYWRhcHRlcnNcIlxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIlxuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCJcblxuY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpIGFzIEFkYXB0ZXIsXG4gIHByb3ZpZGVyczogW1xuICAgIEdpdGh1YlByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX0lEIGFzIHN0cmluZyxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVQgYXMgc3RyaW5nLFxuICAgIH0pLFxuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEIGFzIHN0cmluZyxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQgYXMgc3RyaW5nLFxuICAgIH0pLFxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogXCJjcmVkZW50aWFsc1wiLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiZW1haWxcIiwgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwicGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8uZW1haWwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNyZWRlbnRpYWxzXCIpXG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGlmICghdXNlciB8fCAhdXNlcj8uaGFzaGVkUGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY3JlZGVudGlhbHNcIilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpc0NvcnJlY3RQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFxuICAgICAgICAgICAgY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAgICAgICB1c2VyLmhhc2hlZFBhc3N3b3JkXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKCFpc0NvcnJlY3RQYXNzd29yZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjcmVkZW50aWFsc1wiKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7IC4uLnVzZXIsIGhhc2hlZFBhc3N3b3JkOiBudWxsIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVUIGFzIHN0cmluZyxcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBhdXRoT3B0aW9uc1xuIl0sIm5hbWVzIjpbInByaXNtYSIsIlByaXNtYUFkYXB0ZXIiLCJiY3J5cHQiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiR2l0aHViUHJvdmlkZXIiLCJHb29nbGVQcm92aWRlciIsImF1dGhPcHRpb25zIiwiYWRhcHRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfQ0xJRU5UX1NFQ1JFVCIsIkdPT0dMRV9DTElFTlRfSUQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJFcnJvciIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJoYXNoZWRQYXNzd29yZCIsImlzQ29ycmVjdFBhc3N3b3JkIiwiY29tcGFyZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRlYnVnIiwic2VjcmV0IiwiTkVYVEFVVEhfU0VDUkVUIiwic2Vzc2lvbiIsInN0cmF0ZWd5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./libs/authOptions.ts\n");

/***/ }),

/***/ "(rsc)/./libs/db.ts":
/*!********************!*\
  !*** ./libs/db.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalThis.prisma = client;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWJzL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQU03QyxNQUFNQyxTQUFTQyxXQUFXQyxNQUFNLElBQUksSUFBSUgsd0RBQVlBO0FBQ3BELElBQUlJLElBQXFDLEVBQUVGLFdBQVdDLE1BQU0sR0FBR0Y7QUFFL0QsaUVBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdHlwZW1vbi93ZWIvLi9saWJzL2RiLnRzP2JjNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWRcbn1cblxuY29uc3QgY2xpZW50ID0gZ2xvYmFsVGhpcy5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBnbG9iYWxUaGlzLnByaXNtYSA9IGNsaWVudFxuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJjbGllbnQiLCJnbG9iYWxUaGlzIiwicHJpc21hIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./libs/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/@auth","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgame%2Ffinish%2Froute&page=%2Fapi%2Fgame%2Ffinish%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgame%2Ffinish%2Froute.ts&appDir=%2FVolumes%2FMDATA%2FProj%2Ftypemon%2Fapps%2Fweb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FMDATA%2FProj%2Ftypemon%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();