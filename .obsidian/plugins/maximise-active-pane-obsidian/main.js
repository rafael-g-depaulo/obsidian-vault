'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var PluginBase = /** @class */ (function (_super) {
    __extends(PluginBase, _super);
    function PluginBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PluginBase.prototype, "className", {
        get: function () {
            if (!this._cachedClassName) {
                this._cachedClassName = 'plugin-' + this.manifest.id;
                if (this._cachedClassName.endsWith('-obsidian')) {
                    this._cachedClassName = this._cachedClassName.substring(0, this._cachedClassName.lastIndexOf('-obsidian'));
                }
            }
            return this._cachedClassName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PluginBase.prototype, "rootSplit", {
        // helper property to get the rootSplit with some extra properties
        get: function () { return this.app.workspace.rootSplit; },
        enumerable: false,
        configurable: true
    });
    // is this deprecated now, or what?
    PluginBase.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    // runs when the plugin is loaded
    PluginBase.prototype.onload = function () {
        var _this = this;
        // add in the required command pallete commands
        this.addCommands();
        // add in any settings
        this.addSettings();
        // wait for layout to be ready to perform the rest
        this.app.workspace.layoutReady ? this.enable() : this.app.workspace.on('layout-ready', function () { return _this.enable(); });
    };
    // runs when the plugin is onloaded
    PluginBase.prototype.onunload = function () {
        // run through the disable steps
        this.disable();
    };
    // perform any setup required to enable the plugin
    PluginBase.prototype.enable = function () {
        document.body.toggleClass(this.className, true);
    };
    // perform any required disable steps, leave nothing behind
    PluginBase.prototype.disable = function () {
        document.body.toggleClass(this.className, false);
    };
    // add in any required command pallete commands
    PluginBase.prototype.addCommands = function () { };
    // add in any settings
    PluginBase.prototype.addSettings = function () { };
    return PluginBase;
}(obsidian.Plugin));

// The actual plugin class
var MaximiseActivePanePlugin = /** @class */ (function (_super) {
    __extends(MaximiseActivePanePlugin, _super);
    function MaximiseActivePanePlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // perform any setup required to enable the plugin
    MaximiseActivePanePlugin.prototype.enable = function () {
        _super.prototype.enable.call(this);
    };
    // perform any required disable steps, leave nothing behind
    MaximiseActivePanePlugin.prototype.disable = function () {
        _super.prototype.disable.call(this);
        // remove the maximised class if necessary
        this.rootSplit.containerEl.toggleClass('maximised', false);
    };
    // add in the required command pallete commands
    MaximiseActivePanePlugin.prototype.addCommands = function () {
        var _this = this;
        // add the maximise command
        this.addCommand({
            id: 'maximise-active-pane',
            name: 'Toggle',
            hotkeys: [{ modifiers: ['Mod', 'Shift'], key: 'x' }],
            callback: function () {
                // simply toggle the 'maximised' class and let the css do its thing
                _this.rootSplit.containerEl.toggleClass('maximised', !_this.rootSplit.containerEl.hasClass('maximised'));
                _this.app.workspace.onLayoutChange();
            }
        });
    };
    return MaximiseActivePanePlugin;
}(PluginBase));

module.exports = MaximiseActivePanePlugin;


/* nosourcemap */