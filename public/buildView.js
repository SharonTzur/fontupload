/**
 * Created by TV on 4/16/2015.
 */
function createView(props) {
    var obj = Object.create(viewBuilder);
    for (var prop in props)
        obj[prop] = props[prop];

    return obj;
}
var viewBuilder =
{

    build  : function (self, params, father) {
        if (!self) self = this;
        if (!!self.tag)
            var element = this._tag(self.tag);
        else element = father;
//            else return;
        if (!!this.controller) {
            var controller = this.controller;
        }
        for (var prop in self)
            if (prop != 'tag' &&
                prop != 'controller' &&
                prop != 'build' &&
                prop.slice(0, 1) != '_') {
                var str = (typeof self[prop] == 'string') ? self[prop].slice(0, 1) : '';
                if (str == '$') {
                    var param = self[prop].slice(1);
                    var x = params[param];
                }
                else    x = self[prop];
                element = this['_' + prop](x, element, params);
            }

        return {element: element, controller: controller};
    },
    _tag   : function (tagg) {
        return $('<' + tagg + '>');
    },
    _cls   : function (classs, element) {
        return element.addClass(classs);
    },
    _atr   : function (atr, element, params) {
        var newElement = undefined;
        var arguments = [];
        for (var i = 0; i < atr.length; i++) {
            for (var prop in atr[i]) {
                arguments.push(prop);
                var str = (typeof atr[i][prop] == 'string') ? atr[i][prop].slice(0, 1) : '';
                if (str == '$') {
                    var param = atr[i][prop].slice(1);
                    if (!!params[param])
                        var x = params[param];
                    else continue;
                }
                else    x = atr[i][prop];

                arguments.push(x);

            }
            newElement = element.attr(arguments[i * 2], arguments[i * 2 + 1]);
        }
        return newElement;
    },
    _items : function (child, father, params) {
        var self = this;
        child.forEach(function (value) {
            var children = self.build(value, params, father).element;
            father.append(children);
        });
        return father;
    },
    _bind : function (bindArr, element, params) {
        var newElement = undefined;
        var arguments = [];
        for (var i = 0; i < bindArr.length; i++) {
            for (var prop in bindArr[i]) {
                arguments.push(prop);
                var str = (typeof bindArr[i][prop] == 'string') ? bindArr[i][prop].slice(0, 1) : '';
                if (str == '$') {
                    var param = bindArr[i][prop].slice(1);
                    if (!!params[param])
                        var x = params[param];
                    else continue;
                }
                else    x = bindArr[i][prop];

                arguments.push(x);

            }
            newElement = element.bind(arguments[i * 2], arguments[i * 2 + 1]);
        }
        return newElement;
    },
    _html  : function (text, element) {
        return element.html(text);
    },
    _widget: function (widget, element) {
        return element.append(this.build(widgets[widget.widgetName], widget.params, element).element);
    },
    _load : function (func, element) {
        return element.load(func)
    }
};


