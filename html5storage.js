;(function(window, $ ) {
    "use strict";

    var s = [],ts = ['localStorage','sessionStorage'];

    $.each(ts, function( i, t ) {
        try {
            s[t] = t in window && window[t] !== null;
        } catch (e) {
            s[t] = !1;
        }

        $[t] = {
            setgs : {
                cpf : 'html5fallback:' + t + ':',
                copt : {
                    path : '/',
                    domain : document.domain,
                    expires : ('localStorage' === t) ? { expires: 365 } : undefined
                }
            },
            setItem : function( k, value ) {
                if(s[t]) {
                    return window[t].setItem(k, value);
                }
                else {
                    return $.cookie(this.setgs.cpf + k, value, this.setgs.copt);
                }
            },
            getItem : function( k ) {
                var r;
                if(s[t]) {
                    r = window[t].getItem(k);
                }
                else {
                    r = $.cookie(this.setgs.cpf + k);
                }
                return r;
            },
            removeItem : function( k ) {
                if(s[t]) {
                    return window[t].removeItem(k);
                }
                else {
                    var options = $.extend(this.setgs.copt, {
                        expires: -1
                    });
                    return $.cookie(this.setgs.cpf + k, null, options);
                }
            },
            clear : function() {
                if(s[t]) {
                    return window[t].clear();
                }
                else {
                    var reg = new RegExp('^' + this.setgs.cpf, ''),
                        options = $.extend(this.setgs.copt, {
                            expires: -1
                        });
                    if(document.cookie && document.cookie !== ''){
                        $.each(document.cookie.split(';'), function( i, cookie ){
                            if(reg.test(cookie = $.trim(cookie))) {
                                 $.cookie( cookie.substr(0,cookie.indexOf('=')), null, options);
                            }
                        });
                    }
                }
            }
        };
    });
})(window, jQuery);
