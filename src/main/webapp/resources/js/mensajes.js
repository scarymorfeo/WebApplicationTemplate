/**
 * bootstrap-notify.js v1.0
 * --
 * http://twitter.com/nijikokun
 * Copyright 2012 Nijiko Yonskai, Goodybag
 * --
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!function($) {
    var Notification = function(element, options) {
        var self = this

        // Element collection
        this.$element = $(element)
        this.$note = $('<div class="alert"></div>')
        this.options = $.extend({}, $.fn.notify.defaults, options)

        // Setup from options
        if (this.options.transition)
            if (this.options.transition == 'fade')
                this.$note.addClass('in').addClass(this.options.transition)
            else
                this.$note.addClass(this.options.transition)
        else
            this.$note.addClass('fade').addClass('in')

        if (this.options.type)
            this.$note.addClass('alert-' + this.options.type)
        else
            this.$note.addClass('alert-success')

        if (typeof this.options.message === 'object')
            if (this.options.message.html)
                this.$note.html(this.options.message.html)
            else if (this.options.message.text)
                this.$note.text(this.options.message.text)
            else
                this.$note.html(this.options.message)

        if (this.options.closable)
            this.$note.prepend($("<a class='close pull-right' data-dismiss='alert' href='#'>&times;</a>\n\
  "));

        return this;
    }

    Notification.prototype.show = function() {
        var self = this;

        if (this.options.fadeOut.enabled)
            this.$note.delay(this.options.fadeOut.delay || 3000).fadeOut('slow', function() {
                self.options.onClose()
                $(this).remove()
                self.options.onClosed()
            })

        this.$element.append(this.$note)
        this.$note.alert()
    }

    Notification.prototype.hide = function() {
        var self = this;

        if (this.options.fadeOut.enabled)
            this.$note.delay(this.options.fadeOut.delay || 3000).fadeOut('slow', function() {
                self.options.onClose()
                $(this).remove()
                self.options.onClosed()
            })
        else {
            self.options.onClose()
            this.$note.remove()
            self.options.onClosed()
        }
    }

    $.fn.notify = function(options) {
        return new Notification(this, options)
    }

    $.fn.notify.defaults = {
        type: 'success',
        closable: true,
        transition: 'fade',
        fadeOut: {
            enabled: true,
            delay: 3000
        },
        message: {
            html: false,
            text: 'This is a message.'
        },
        onClose: function() {
        },
        onClosed: function() {
        }
    }
}(window.jQuery);

/**
 * Objeto que construye un objeto que muestra mensajes  de cualquier tipo
 * @type devuelve un objeto que contiene una instalacia para el mostrado de notificaciones.
 */
var Mensajes = {
    elem: null,
    opt: null,
    defaults: {
        autoClose: true,
        autoCloseDelay: 10000,
        closable: true
    },
    init: function(options) {
        this.elem = $(options.selector);
        this.opt = $.extend({}, this.defaults, options);
    },
    mensajeOk: function(text, optParam) {
        this.mostrarMensaje("success", text, optParam);
    },
    mensajeInformativo: function(text, optParam) {
        this.mostrarMensaje("info", text, optParam);
    },
    mensajeAlerta: function(text, optParam) {
        this.mostrarMensaje("warning", text, optParam);
    },
    mensajeError: function(text, optParam) {
        this.mostrarMensaje("danger", text, optParam);
    },
    borrarMensajes: function(optParam) {
        var localOpts = this.opt;
        var localElem = this.elem;
        if (typeof optParam !== "undefined") {
            localOpts = $.extend({}, localOpts, optParam);
            localElem = $(localOpts.selector);
        }
        localElem.empty();
    },
    mostrarMensaje: function(type, text, optParam) {
        var localOpts = this.opt;
        var localElem = this.elem;
        if (typeof optParam !== "undefined") {
            localOpts = $.extend({}, localOpts, optParam);
            localElem = $(localOpts.selector);
        }
        localElem.notify({
            type: type,
            closable: localOpts.closable,
            message: {html: text},
            fadeOut: {enabled: localOpts.autoClose, delay: localOpts.autoCloseDelay}
        }).show();
    }
};