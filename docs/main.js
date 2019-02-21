(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions/filter.actions.ts":
/*!*******************************************!*\
  !*** ./src/app/actions/filter.actions.ts ***!
  \*******************************************/
/*! exports provided: actions, FilterActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterActions", function() { return FilterActions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var actions = {
    SET_FILTRO: '[Filter] Set Filtro'
};
var FilterActions = /** @class */ (function () {
    function FilterActions() {
    }
    // Para devolver una acción, el método debe de retornar un objeto, con las propiedades type y payload
    FilterActions.prototype.setFiltro = function (filtro) {
        return {
            type: actions.SET_FILTRO,
            payload: filtro
        };
    };
    FilterActions = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], FilterActions);
    return FilterActions;
}());



/***/ }),

/***/ "./src/app/actions/todo.actions.ts":
/*!*****************************************!*\
  !*** ./src/app/actions/todo.actions.ts ***!
  \*****************************************/
/*! exports provided: todoActionsTypes, TodoActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoActionsTypes", function() { return todoActionsTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoActions", function() { return TodoActions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var todoActionsTypes = {
    LOAD_TODOS: '[TODO] Carga Todos',
    LOAD_TODOS_SUCCESSFUL: '[TODO] Todos Cargados correctamente',
    TODOS_FAIL: '[TODO] Fallo en la carga de todos',
    ADD_TODO: '[TODO] Agregar todo',
    ADD_TODO_SUCCESSFULL: '[TODO] Todo agregado correctamente',
    TOGGLE_TODO: '[TODO] Toggle todo',
    TOGGLE_ALL_TODOS: '[TODO] Toggle All todos',
    EDIT_TODO: '[TODO] Edit todo',
    BORRAR_TODO: '[TODO] Borrar todo',
    BORRAR_TODOS_COMP: '[TODO] Borrar todos completados'
};
var TodoActions = /** @class */ (function () {
    function TodoActions() {
    }
    TodoActions.prototype.loadTodos = function () {
        return {
            type: todoActionsTypes.LOAD_TODOS
        };
    };
    TodoActions.prototype.loadTodosSuccessful = function (todo) {
        return {
            type: todoActionsTypes.LOAD_TODOS_SUCCESSFUL,
            payload: todo
        };
    };
    TodoActions.prototype.todosFail = function (error) {
        return {
            type: todoActionsTypes.TODOS_FAIL,
            payload: error
        };
    };
    TodoActions.prototype.addTodo = function (texto) {
        return {
            type: todoActionsTypes.ADD_TODO,
            payload: texto
        };
    };
    TodoActions.prototype.addTodoSuccessful = function (todo) {
        return {
            type: todoActionsTypes.ADD_TODO_SUCCESSFULL,
            payload: todo
        };
    };
    TodoActions.prototype.toggleTodo = function (id) {
        return {
            type: todoActionsTypes.TOGGLE_TODO,
            payload: id
        };
    };
    TodoActions.prototype.toggleAllTodos = function (completado) {
        return {
            type: todoActionsTypes.TOGGLE_ALL_TODOS,
            payload: completado
        };
    };
    TodoActions.prototype.editarTodo = function (id, texto) {
        return {
            type: todoActionsTypes.EDIT_TODO,
            payload: { id: id, texto: texto }
        };
    };
    TodoActions.prototype.borrarTodo = function (id) {
        return {
            type: todoActionsTypes.BORRAR_TODO,
            payload: id
        };
    };
    TodoActions.prototype.borrarTodosComp = function () {
        return {
            type: todoActionsTypes.BORRAR_TODOS_COMP
        };
    };
    TodoActions = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TodoActions);
    return TodoActions;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-todo></app-todo>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.store.select('todos').subscribe(function (error) {
            console.log(error.error);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/todo/todo.component */ "./src/app/components/todo/todo.component.ts");
/* harmony import */ var _components_todo_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/todo/todo-list/todo-list.component */ "./src/app/components/todo/todo-list/todo-list.component.ts");
/* harmony import */ var _components_todo_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/todo/todo-item/todo-item.component */ "./src/app/components/todo/todo-item/todo-item.component.ts");
/* harmony import */ var _components_todo_todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/todo/todo-footer/todo-footer.component */ "./src/app/components/todo/todo-footer/todo-footer.component.ts");
/* harmony import */ var _components_todo_todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/todo/todo-add/todo-add.component */ "./src/app/components/todo/todo-add/todo-add.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reducers/index */ "./src/app/reducers/index.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _effects_todo_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./effects/todo.effects */ "./src/app/effects/todo.effects.ts");



// Components






// Services

// Form

// NgRx







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_4__["TodoComponent"],
                _components_todo_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__["TodoListComponent"],
                _components_todo_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_6__["TodoItemComponent"],
                _components_todo_todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_7__["TodoFooterComponent"],
                _components_todo_todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_8__["TodoAddComponent"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_16__["FilterPipe"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot(_reducers_index__WEBPACK_IMPORTED_MODULE_13__["reducers"]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__["StoreDevtoolsModule"].instrument({
                    maxAge: 25,
                    logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].production,
                }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsModule"].forRoot([_effects_todo_effects__WEBPACK_IMPORTED_MODULE_17__["TodoEffects"]])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/todo/loading.css":
/*!*********************************************!*\
  !*** ./src/app/components/todo/loading.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader,\r\n.loader:before,\r\n.loader:after {\r\n  background: rgb(17, 17, 17);\r\n  -webkit-animation: load1 1s infinite ease-in-out;\r\n  animation: load1 1s infinite ease-in-out;\r\n  width: 1em;\r\n  height: 4em;\r\n}\r\n.loader:before,\r\n.loader:after {\r\n  position: absolute;\r\n  top: 0;\r\n  content: '';\r\n}\r\n.loader:before {\r\n  left: -1.5em;\r\n}\r\n.loader {\r\n  text-indent: -9999em;\r\n  margin: 40% auto;\r\n  position: relative;\r\n  font-size: 11px;\r\n  -webkit-animation-delay: 0.16s;\r\n  animation-delay: 0.16s;\r\n}\r\n.loader:after {\r\n  left: 1.5em;\r\n  -webkit-animation-delay: 0.32s;\r\n  animation-delay: 0.32s;\r\n}\r\n@-webkit-keyframes load1 {\r\n  0%,\r\n  80%,\r\n  100% {\r\n    box-shadow: 0 0 rgb(17, 17, 17);\r\n    height: 4em;\r\n  }\r\n  40% {\r\n    box-shadow: 0 -2em rgb(17, 17, 17);\r\n    height: 5em;\r\n  }\r\n}\r\n@keyframes load1 {\r\n  0%,\r\n  80%,\r\n  100% {\r\n    box-shadow: 0 0 rgb(17, 17, 17);\r\n    height: 4em;\r\n  }\r\n  40% {\r\n    box-shadow: 0 -2em rgb(17, 17, 17);\r\n    height: 5em;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvL2xvYWRpbmcuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSw0QkFBNEI7RUFDNUIsaURBQWlEO0VBQ2pELHlDQUF5QztFQUN6QyxXQUFXO0VBQ1gsWUFBWTtDQUNiO0FBQ0Q7O0VBRUUsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxZQUFZO0NBQ2I7QUFDRDtFQUNFLGFBQWE7Q0FDZDtBQUNEO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQix1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsdUJBQXVCO0NBQ3hCO0FBQ0Q7RUFDRTs7O0lBR0UsZ0NBQWdDO0lBQ2hDLFlBQVk7R0FDYjtFQUNEO0lBQ0UsbUNBQW1DO0lBQ25DLFlBQVk7R0FDYjtDQUNGO0FBQ0Q7RUFDRTs7O0lBR0UsZ0NBQWdDO0lBQ2hDLFlBQVk7R0FDYjtFQUNEO0lBQ0UsbUNBQW1DO0lBQ25DLFlBQVk7R0FDYjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b2RvL2xvYWRpbmcuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlcixcclxuLmxvYWRlcjpiZWZvcmUsXHJcbi5sb2FkZXI6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYigxNywgMTcsIDE3KTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDEgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBsb2FkMSAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICB3aWR0aDogMWVtO1xyXG4gIGhlaWdodDogNGVtO1xyXG59XHJcbi5sb2FkZXI6YmVmb3JlLFxyXG4ubG9hZGVyOmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG59XHJcbi5sb2FkZXI6YmVmb3JlIHtcclxuICBsZWZ0OiAtMS41ZW07XHJcbn1cclxuLmxvYWRlciB7XHJcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XHJcbiAgbWFyZ2luOiA0MCUgYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjE2cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuMTZzO1xyXG59XHJcbi5sb2FkZXI6YWZ0ZXIge1xyXG4gIGxlZnQ6IDEuNWVtO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjMycztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuMzJzO1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkMSB7XHJcbiAgMCUsXHJcbiAgODAlLFxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIHJnYigxNywgMTcsIDE3KTtcclxuICAgIGhlaWdodDogNGVtO1xyXG4gIH1cclxuICA0MCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMmVtIHJnYigxNywgMTcsIDE3KTtcclxuICAgIGhlaWdodDogNWVtO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGxvYWQxIHtcclxuICAwJSxcclxuICA4MCUsXHJcbiAgMTAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgcmdiKDE3LCAxNywgMTcpO1xyXG4gICAgaGVpZ2h0OiA0ZW07XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0yZW0gcmdiKDE3LCAxNywgMTcpO1xyXG4gICAgaGVpZ2h0OiA1ZW07XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/todo/todo-add/todo-add.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/todo/todo-add/todo-add.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <h1>todos</h1>\n  <input class=\"new-todo\" \n          placeholder=\"Cosas que hacer...\" \n          [formControl]=\"txtInput\"\n          (keyup.enter)=\"agregarTodo()\"\n          autofocus>\n</header>\n"

/***/ }),

/***/ "./src/app/components/todo/todo-add/todo-add.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/todo/todo-add/todo-add.component.ts ***!
  \****************************************************************/
/*! exports provided: TodoAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoAddComponent", function() { return TodoAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/todo.actions */ "./src/app/actions/todo.actions.ts");





var TodoAddComponent = /** @class */ (function () {
    function TodoAddComponent(store, todoActions) {
        this.store = store;
        this.todoActions = todoActions;
    }
    TodoAddComponent.prototype.ngOnInit = function () {
        this.txtInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
    };
    TodoAddComponent.prototype.agregarTodo = function () {
        if (this.txtInput.invalid) {
            return;
        }
        this.store.dispatch(this.todoActions.addTodo(this.txtInput.value));
        this.txtInput.setValue('');
    };
    TodoAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-add',
            template: __webpack_require__(/*! ./todo-add.component.html */ "./src/app/components/todo/todo-add/todo-add.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__["TodoActions"]])
    ], TodoAddComponent);
    return TodoAddComponent;
}());



/***/ }),

/***/ "./src/app/components/todo/todo-footer/todo-footer.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/todo/todo-footer/todo-footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <!-- This should be `0 items left` by default -->\n  <span class=\"todo-count\"><strong>{{tareasPendientes}}</strong> tareas pendientes</span>\n  <!-- Remove this if you don't implement routing -->\n  <ul class=\"filters\">\n    <li (click)=\"cambiarFiltro(filtro)\" *ngFor=\"let filtro of filtros\">\n      <a [ngClass]=\"{'selected': filtro === filtroActual}\">{{filtro}}</a>\n    </li>\n  </ul>\n  <!-- Hidden if no completed items are left ↓ -->\n  <button (click)=\"eliminarCompletados()\" class=\"clear-completed\">Limpiar completados</button>\n</footer>"

/***/ }),

/***/ "./src/app/components/todo/todo-footer/todo-footer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/todo/todo-footer/todo-footer.component.ts ***!
  \**********************************************************************/
/*! exports provided: TodoFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoFooterComponent", function() { return TodoFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_filter_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/filter.actions */ "./src/app/actions/filter.actions.ts");
/* harmony import */ var _actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/todo.actions */ "./src/app/actions/todo.actions.ts");





var TodoFooterComponent = /** @class */ (function () {
    function TodoFooterComponent(store, todoActions, filtrosActions) {
        this.store = store;
        this.todoActions = todoActions;
        this.filtrosActions = filtrosActions;
        this.filtros = ['todos', 'completados', 'pendientes'];
    }
    TodoFooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.subscribe(function (state) {
            _this.filtroActual = state.filtro;
            _this.contarPendientes(state.todos.todos);
        });
    };
    TodoFooterComponent.prototype.cambiarFiltro = function (filtro) {
        this.store.dispatch(this.filtrosActions.setFiltro(filtro));
    };
    TodoFooterComponent.prototype.contarPendientes = function (todos) {
        this.tareasPendientes = todos.filter(function (todo) { return !todo.completado; }).length;
    };
    TodoFooterComponent.prototype.eliminarCompletados = function () {
        this.store.dispatch(this.todoActions.borrarTodosComp());
    };
    TodoFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-footer',
            template: __webpack_require__(/*! ./todo-footer.component.html */ "./src/app/components/todo/todo-footer/todo-footer.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__["TodoActions"], _actions_filter_actions__WEBPACK_IMPORTED_MODULE_3__["FilterActions"]])
    ], TodoFooterComponent);
    return TodoFooterComponent;
}());



/***/ }),

/***/ "./src/app/components/todo/todo-item/todo-item.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/todo/todo-item/todo-item.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li [ngClass]=\"{'completed': todo.completado, 'editing': editando}\">\n  <div class=\"view\">\n    <input class=\"toggle\" \n          type=\"checkbox\" \n          [formControl]=\"checkField\" \n          [checked]=\"todo.completado\">\n    <label (dblclick)=\"editar()\">{{todo.texto}}</label>\n    <button class=\"destroy\" (click)=\"eliminarTodo()\"></button>\n  </div>\n  <input class=\"edit\" \n        [value]=\"todo.texto\" \n        [formControl]=\"txtInput\"\n        (keyup.enter)=\"terminarEdicion()\"\n        (blur)=\"terminarEdicion()\"\n        #inputEditar>\n</li>"

/***/ }),

/***/ "./src/app/components/todo/todo-item/todo-item.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/todo/todo-item/todo-item.component.ts ***!
  \******************************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _models_todo_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/todo.model */ "./src/app/models/todo.model.ts");
/* harmony import */ var _actions_todo_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actions/todo.actions */ "./src/app/actions/todo.actions.ts");






var TodoItemComponent = /** @class */ (function () {
    function TodoItemComponent(store, todoActions) {
        this.store = store;
        this.todoActions = todoActions;
    }
    TodoItemComponent.prototype.ngOnInit = function () {
        // this.subscription = this.store.select('todos').subscribe( data => {
        //   const todoN = data.find( todoFind => todoFind.id === this.todo.id);
        //   llamada al servicio editarTodo() (Pero llamaría dos veces, lo que podría crear una simulación de ataque al servidor)
        // });
        var _this = this;
        this.checkField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.todo.completado);
        this.txtInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.todo.texto, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.checkField.valueChanges.subscribe(function () {
            _this.store.dispatch(_this.todoActions.toggleTodo(_this.todo.id));
        });
    };
    TodoItemComponent.prototype.ngOnDestroy = function () {
        // this.subscription.unsubscribe();
    };
    TodoItemComponent.prototype.editar = function () {
        var _this = this;
        this.editando = true;
        // Relentizamos el select puesto que a veces lo hace demasiado rápido
        // Y no hay tiempo a que se active el elemento.
        setTimeout(function () { return _this.inputEditar.nativeElement.select(); }, 1);
    };
    TodoItemComponent.prototype.terminarEdicion = function () {
        this.editando = false;
        if (this.txtInput.invalid) {
            return;
        }
        if (this.txtInput.value === this.todo.texto) {
            return;
        }
        this.store.dispatch(this.todoActions.editarTodo(this.todo.id, this.txtInput.value));
    };
    TodoItemComponent.prototype.eliminarTodo = function () {
        this.store.dispatch(this.todoActions.borrarTodo(this.todo.id));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputEditar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TodoItemComponent.prototype, "inputEditar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_todo_model__WEBPACK_IMPORTED_MODULE_4__["Todo"])
    ], TodoItemComponent.prototype, "todo", void 0);
    TodoItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-item',
            template: __webpack_require__(/*! ./todo-item.component.html */ "./src/app/components/todo/todo-item/todo-item.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _actions_todo_actions__WEBPACK_IMPORTED_MODULE_5__["TodoActions"]])
    ], TodoItemComponent);
    return TodoItemComponent;
}());



/***/ }),

/***/ "./src/app/components/todo/todo-list/todo-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/todo/todo-list/todo-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"todo-list\">\n  <app-todo-item *ngFor=\"let todo of todos | filterTodo: filtro\" [todo]=\"todo\"></app-todo-item>\n</ul>"

/***/ }),

/***/ "./src/app/components/todo/todo-list/todo-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/todo/todo-list/todo-list.component.ts ***!
  \******************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(store) {
        this.store = store;
        this.todos = [];
    }
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.store.subscribe(function (state) {
            _this.todos = state.todos.todos;
            _this.filtro = state.filtro;
        });
    };
    TodoListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/components/todo/todo-list/todo-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/components/todo/todo.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/todo/todo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"load\" class=\"loader\" id=\"loader\">Cargando...</div>\n\n<section class=\"todoapp\" *ngIf=\"!load\">\n  <app-todo-add></app-todo-add>\n  \n  <section class=\"main\">\n    \n    <input id=\"toggle-all\" class=\"toggle-all\" type=\"checkbox\">\n    <label (click)=\"toggleAll()\" for=\"toggle-all\">Marcar como completado</label>\n    \n    <app-todo-list></app-todo-list>\n    \n    <app-todo-footer></app-todo-footer>\n  </section>\n</section>"

/***/ }),

/***/ "./src/app/components/todo/todo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/todo/todo.component.ts ***!
  \***************************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_todo_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/todo.actions */ "./src/app/actions/todo.actions.ts");




var TodoComponent = /** @class */ (function () {
    function TodoComponent(store, todoActions) {
        this.store = store;
        this.todoActions = todoActions;
        this.completado = false;
    }
    TodoComponent.prototype.ngOnInit = function () {
        this.load = true;
        this.store.dispatch(this.todoActions.loadTodos());
        this.load = false;
    };
    TodoComponent.prototype.toggleAll = function () {
        this.completado = !this.completado;
        this.store.dispatch(this.todoActions.toggleAllTodos(this.completado));
    };
    TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/components/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./loading.css */ "./src/app/components/todo/loading.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _actions_todo_actions__WEBPACK_IMPORTED_MODULE_3__["TodoActions"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/effects/todo.effects.ts":
/*!*****************************************!*\
  !*** ./src/app/effects/todo.effects.ts ***!
  \*****************************************/
/*! exports provided: TodoEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoEffects", function() { return TodoEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/todo.service */ "./src/app/services/todo.service.ts");
/* harmony import */ var _actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/todo.actions */ "./src/app/actions/todo.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var TodoEffects = /** @class */ (function () {
    function TodoEffects(actions$, todoService, todoActions) {
        var _this = this;
        this.actions$ = actions$;
        this.todoService = todoService;
        this.todoActions = todoActions;
        this.initTodos$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__["todoActionsTypes"].LOAD_TODOS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function () { return _this.todoService.getTodos()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (todos) { return _this.todoActions.loadTodosSuccessful(todos); })); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(_this.todoActions.todosFail(error)); }));
        this.newTodo$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__["todoActionsTypes"].ADD_TODO), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (action) { return _this.todoService.addTodo(action.payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (todo) { return _this.todoActions.addTodoSuccessful(todo); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(_this.todoActions.todosFail(error)); })); }));
        // Este efecto no dispara ninguna acción. (O Podríamos hacer que disparase una acción inventada)
        this.deleteTodos$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__["todoActionsTypes"].BORRAR_TODO), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return _this.todoService.deleteTodo(action.payload); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return error; }));
        this.toggleTodo$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__["todoActionsTypes"].TOGGLE_TODO), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return _this.todoService.editarToggleTodo(action.payload, true); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return error; }));
        this.editTextTodo$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__["todoActionsTypes"].EDIT_TODO), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) {
            var id = action.payload['id'];
            var texto = action.payload['texto'];
            _this.todoService.editarTextoTodo(id, texto);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return error; }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TodoEffects.prototype, "initTodos$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TodoEffects.prototype, "newTodo$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TodoEffects.prototype, "deleteTodos$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TodoEffects.prototype, "toggleTodo$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TodoEffects.prototype, "editTextTodo$", void 0);
    TodoEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"],
            _actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__["TodoActions"]])
    ], TodoEffects);
    return TodoEffects;
}());



/***/ }),

/***/ "./src/app/models/todo.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/todo.model.ts ***!
  \**************************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo(texto) {
        this.texto = texto.charAt(0).toLocaleUpperCase() + texto.slice(1);
        this.completado = false;
    }
    return Todo;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (todos, filtro) {
        switch (filtro) {
            case 'completados':
                return todos.filter(function (todo) { return todo.completado; });
            case 'pendientes':
                return todos.filter(function (todo) { return !todo.completado; });
            default:
                return todos;
        }
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filterTodo'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/reducers/filter.reducer.ts":
/*!********************************************!*\
  !*** ./src/app/reducers/filter.reducer.ts ***!
  \********************************************/
/*! exports provided: filtroReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filtroReducer", function() { return filtroReducer; });
/* harmony import */ var _actions_filter_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/filter.actions */ "./src/app/actions/filter.actions.ts");

var estadoInicial = 'todos';
function filtroReducer(state, action) {
    if (state === void 0) { state = estadoInicial; }
    switch (action.type) {
        case _actions_filter_actions__WEBPACK_IMPORTED_MODULE_0__["actions"].SET_FILTRO:
            return action.payload;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _todo_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.reducer */ "./src/app/reducers/todo.reducer.ts");
/* harmony import */ var _filter_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.reducer */ "./src/app/reducers/filter.reducer.ts");


var reducers = {
    todos: _todo_reducer__WEBPACK_IMPORTED_MODULE_0__["todoReducer"],
    filtro: _filter_reducer__WEBPACK_IMPORTED_MODULE_1__["filtroReducer"]
};


/***/ }),

/***/ "./src/app/reducers/todo.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/reducers/todo.reducer.ts ***!
  \******************************************/
/*! exports provided: todoReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoReducer", function() { return todoReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_todo_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/todo.actions */ "./src/app/actions/todo.actions.ts");


var estadoInicial = {
    todos: [],
    error: {}
};
function todoReducer(state, action) {
    if (state === void 0) { state = estadoInicial; }
    switch (action.type) {
        case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_1__["todoActionsTypes"].LOAD_TODOS_SUCCESSFUL:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { todos: action.payload });
        case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_1__["todoActionsTypes"].TODOS_FAIL:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { error: action.payload });
        case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_1__["todoActionsTypes"].ADD_TODO_SUCCESSFULL:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { todos: state.todos.concat([action.payload]) });
        case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_1__["todoActionsTypes"].TOGGLE_TODO:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { todos: state.todos.map(function (todoEdit) {
                    if (todoEdit.id === action.payload) {
                        // Debemos devolver un nuevo objeto de tipo TODO, del cual editaremos la propiedad completado y lo demás se quedará igual
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, todoEdit, { completado: !todoEdit.completado });
                    }
                    else {
                        return todoEdit;
                    }
                }) });
        // case todoActionsTypes.TOGGLE_ALL_TODOS:
        //   return state.map( todoEdit => {
        //     return {
        //       ...todoEdit,
        //       completado: action.payload
        //     };
        //   });
        case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_1__["todoActionsTypes"].EDIT_TODO:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { todos: state.todos.map(function (todoEdit) {
                    if (todoEdit.id === action.payload['id']) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, todoEdit, { texto: action.payload['texto'] });
                    }
                    else {
                        return todoEdit;
                    }
                }) });
        case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_1__["todoActionsTypes"].BORRAR_TODO:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { 
                // Filter: recorre el array y crea uno nuevo excluyendo los elementos que no cumplan la condición.
                todos: state.todos.filter(function (todoEdit) { return todoEdit.id !== action.payload; }) });
        // case todoActionsTypes.BORRAR_TODOS_COMP:
        //   return state.filter( todoEdit => !todoEdit.completado );
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/services/todo.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/todo.service.ts ***!
  \******************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
    }
    TodoService.prototype.getTodos = function () {
        return this.http.get('https://todo-api-rest-rafa.herokuapp.com/api/todos');
    };
    TodoService.prototype.addTodo = function (texto) {
        return this.http.post('https://todo-api-rest-rafa.herokuapp.com/api/add', texto);
    };
    TodoService.prototype.editarToggleTodo = function (id, toggle) {
        this.http.put("https://todo-api-rest-rafa.herokuapp.com/api/todo/" + id + "?toggle=" + toggle, {}).subscribe(function (log) { return console.error(log); });
    };
    TodoService.prototype.editarTextoTodo = function (id, texto) {
        this.http.put("https://todo-api-rest-rafa.herokuapp.com/api/todo/" + id + "?texto=" + texto, {}).subscribe(function (log) { return console.error(log); });
    };
    TodoService.prototype.deleteTodo = function (id) {
        this.http.delete("https://todo-api-rest-rafa.herokuapp.com/api/delete/" + id).subscribe(function (log) { return console.error(log); });
    };
    TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rafael.carmona\Desktop\Formación\redux\todoapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map