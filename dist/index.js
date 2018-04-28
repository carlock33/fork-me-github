'use strict';

// Programatically add fork me on github ribbon from javascript without making changes to CSS, HTML, or adding image files
// by David Figatner
// copyright 2018 YOPEY YOPEY LLC
// MIT license
// based on https://github.com/simonwhitaker/github-fork-ribbon-css (MIT license)

var RIBBON = {
    width: '12.1em',
    height: '12.1em',
    overflow: 'hidden',
    top: 0,
    right: 0,
    zIndex: 9999,
    pointerEvents: 'none',
    fontSize: '13px',
    textDecoration: 'none',
    textIndent: '-999999px'
};

var BEFORE_AFTER = [['position', 'absolute'], ['display', 'block'], ['width', '15.38em'], ['height', '1.54em'], ['top', '3.23em'], ['right', '-3.23em'], ['-webkit-box-sizing', 'content-box'], ['-moz-box-sizing', 'content-box'], ['box-sizing', 'content-box'], ['-webkit-transform', 'rotate(45deg)'], ['-moz-transform', 'rotate(45deg)'], ['-ms-Transform', 'rotate(45deg)'], ['-o-transform', 'rotate(45deg)'], ['transform', 'rotate(45deg)']];

var BEFORE = [['content', '""'], ['padding', '.38em 0'], ['background-color', '#a00'], ['background-image', '-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.15)))'], ['background-image', '-webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))'], ['background-image', '-moz-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))'], ['background-image', '-ms-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))'], ['background-image', '-o-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))'], ['background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))'], ['box-shadow', '0 .15em .23em 0 rgba(0, 0, 0, 0.5)'], ['pointer-events', 'auto']];

var AFTER = [['content', 'attr(data-ribbon)'], ['color', '#fff'], ['font', '700 1em "Helvetica Neue", Helvetica, Arial, sans-serif'], ['line-height', '1.54em'], ['text-decoration', 'none'], ['text-shadow', '0 -.08em rgba(0, 0, 0, 0.5)'], ['text-align', 'center'], ['text-indent', '0'], ['padding', '.15em 0'], ['margin', '.15em 0'], ['border-width', '.08em 0'], ['border-style', 'dotted'], ['border-color', '#fff'], ['border-color', 'rgba(255, 255, 255, 0.7)']];

/**
 * Programmatically add "Fork me Github" Ribbon using inline CSS
 * Based on CSS from https,//github.com/simonwhitaker/github-fork-ribbon-css
 * @param {string} [url] - do not need to include if URL is called from https://username.github.io/project/html
 * @param {object} [options]
 * @param {HTMLElement} [options.parent=document.body]
 * @param {boolean} [options.fixed]
 * @param {string} [options.corner=topright] some combination of top/bottom, and left/right
 * @param {string} [options.text=fork me on github] text to show
 * @param {string} [options.background=#a00] color for ribbon
 */
module.exports = function forkMe(url, options) {
    options = options || {};
    var a = document.createElement('a');
    if (url) {
        a.href = url;
    } else {
        var username = window.location.hostname.split('.')[0];
        var project = window.location.pathname.split('/')[1];
        a.href = 'https://github.com/' + username + '/' + project;
    }

    a.title = a.innerText = options.text || 'fork me on github';
    a.setAttribute('data-ribbon', options.text || 'fork me on github');
    a.className = 'github-fork-ribbon-' + Math.round(Math.random() * 100000);
    if (options.parent) {
        options.parent.appendChild(a);
    } else {
        document.body.appendChild(a);
    }
    a.style.position = options.fixed ? 'fixed' : 'absolute';
    if (options.background) {
        BEFORE[2][1] = options.background;
    }
    if (options.color) {
        AFTER[1][1] = options.color;
    }
    for (var _style in RIBBON) {
        a.style[_style] = RIBBON[_style];
    }
    var beforeAfter = '{';
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = BEFORE_AFTER[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _style2 = _step.value;

            beforeAfter += _style2[0] + ':' + _style2[1] + ';';
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var before = beforeAfter;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = BEFORE[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _style3 = _step2.value;

            before += _style3[0] + ':' + _style3[1] + ';';
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    var after = beforeAfter;
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = AFTER[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _style4 = _step3.value;

            after += _style4[0] + ':' + _style4[1] + ';';
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    var bottom = void 0,
        left = void 0;
    if (options.side) {
        bottom = options.side.toLowerCase().indexOf('bottom') !== -1;
        left = options.side.toLowerCase().indexOf('left') !== -1;
    }
    if (bottom) {
        a.style.top = 'auto';
        a.style.bottom = 0;
        before += 'top:auto;bottom:3.23em;';
        after += 'top:auto;bottom:3.23em;';
    }
    if (left) {
        a.style.right = 'auto';
        a.style.left = 0;
        before += 'right:auto;left:-3.23em;';
        after += 'right:auto;left:-3.23em;';
    }
    if (left && !bottom || !left && bottom) {
        before += 'transform:rotate(-45deg);';
        after += 'transform:rotate(-45deg);';
    }
    var style = document.createElement('style');
    document.head.appendChild(style);
    var sheet = style.sheet;
    sheet.insertRule('.' + a.className + '::before' + before + '}');
    sheet.insertRule('.' + a.className + '::after' + after + '}');
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSSUJCT04iLCJ3aWR0aCIsImhlaWdodCIsIm92ZXJmbG93IiwidG9wIiwicmlnaHQiLCJ6SW5kZXgiLCJwb2ludGVyRXZlbnRzIiwiZm9udFNpemUiLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHRJbmRlbnQiLCJCRUZPUkVfQUZURVIiLCJCRUZPUkUiLCJBRlRFUiIsIm1vZHVsZSIsImV4cG9ydHMiLCJmb3JrTWUiLCJ1cmwiLCJvcHRpb25zIiwiYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJ1c2VybmFtZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJzcGxpdCIsInByb2plY3QiLCJwYXRobmFtZSIsInRpdGxlIiwiaW5uZXJUZXh0IiwidGV4dCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInBhcmVudCIsImFwcGVuZENoaWxkIiwiYm9keSIsInN0eWxlIiwicG9zaXRpb24iLCJmaXhlZCIsImJhY2tncm91bmQiLCJjb2xvciIsImJlZm9yZUFmdGVyIiwiYmVmb3JlIiwiYWZ0ZXIiLCJib3R0b20iLCJsZWZ0Iiwic2lkZSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsImhlYWQiLCJzaGVldCIsImluc2VydFJ1bGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTO0FBQ1hDLFdBQU8sUUFESTtBQUVYQyxZQUFRLFFBRkc7QUFHWEMsY0FBVSxRQUhDO0FBSVhDLFNBQUssQ0FKTTtBQUtYQyxXQUFPLENBTEk7QUFNWEMsWUFBUSxJQU5HO0FBT1hDLG1CQUFlLE1BUEo7QUFRWEMsY0FBVSxNQVJDO0FBU1hDLG9CQUFnQixNQVRMO0FBVVhDLGdCQUFZO0FBVkQsQ0FBZjs7QUFhQSxJQUFNQyxlQUFlLENBQ2pCLENBQUMsVUFBRCxFQUFhLFVBQWIsQ0FEaUIsRUFFakIsQ0FB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QUFTLDBCQUFUO0FBQ0g7QUFDRCxRQUFLRSxRQUFRLENBQUNELE1BQVYsSUFBc0IsQ0FBQ0MsSUFBRCxJQUFTRCxNQUFuQyxFQUNBO0FBQ0lGLGtCQUFVLDJCQUFWO0FBQ0FDLGlCQUFTLDJCQUFUO0FBQ0g7QUFDRCxRQUFNUCxRQUFRckIsU0FBU0MsYUFBVCxDQUF1QixPQUF2QixDQUFkO0FBQ0FELGFBQVNrQyxJQUFULENBQWNmLFdBQWQsQ0FBMEJFLEtBQTFCO0FBQ0EsUUFBTWMsUUFBUWQsTUFBTWMsS0FBcEI7QUFDQUEsVUFBTUMsVUFBTixDQUFpQixNQUFNckMsRUFBRWUsU0FBUixHQUFvQixVQUFwQixHQUFpQ2EsTUFBakMsR0FBMEMsR0FBM0Q7QUFDQVEsVUFBTUMsVUFBTixDQUFpQixNQUFNckMsRUFBRWUsU0FBUixHQUFvQixTQUFwQixHQUFnQ2MsS0FBaEMsR0FBd0MsR0FBekQ7QUFDSCxDQXBGRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFByb2dyYW1hdGljYWxseSBhZGQgZm9yayBtZSBvbiBnaXRodWIgcmliYm9uIGZyb20gamF2YXNjcmlwdCB3aXRob3V0IG1ha2luZyBjaGFuZ2VzIHRvIENTUywgSFRNTCwgb3IgYWRkaW5nIGltYWdlIGZpbGVzXG4vLyBieSBEYXZpZCBGaWdhdG5lclxuLy8gY29weXJpZ2h0IDIwMTggWU9QRVkgWU9QRVkgTExDXG4vLyBNSVQgbGljZW5zZVxuLy8gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3NpbW9ud2hpdGFrZXIvZ2l0aHViLWZvcmstcmliYm9uLWNzcyAoTUlUIGxpY2Vuc2UpXG5cbmNvbnN0IFJJQkJPTiA9IHtcbiAgICB3aWR0aDogJzEyLjFlbScsXG4gICAgaGVpZ2h0OiAnMTIuMWVtJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIHpJbmRleDogOTk5OSxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgZm9udFNpemU6ICcxM3B4JyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIHRleHRJbmRlbnQ6ICctOTk5OTk5cHgnXG59XG5cbmNvbnN0IEJFRk9SRV9BRlRFUiA9IFtcbiAgICBbJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJ10sXG4gICAgWydkaXNwbGF5JywgJ2Jsb2NrJ10sXG4gICAgWyd3aWR0aCcsICcxNS4zOGVtJ10sXG4gICAgWydoZWlnaHQnLCAnMS41NGVtJ10sXG4gICAgWyd0b3AnLCAnMy4yM2VtJ10sXG4gICAgWydyaWdodCcsICctMy4yM2VtJ10sXG4gICAgWyctd2Via2l0LWJveC1zaXppbmcnLCAnY29udGVudC1ib3gnXSxcbiAgICBbJy1tb3otYm94LXNpemluZycsICdjb250ZW50LWJveCddLFxuICAgIFsnYm94LXNpemluZycsICdjb250ZW50LWJveCddLFxuICAgIFsnLXdlYmtpdC10cmFuc2Zvcm0nLCAncm90YXRlKDQ1ZGVnKSddLFxuICAgIFsnLW1vei10cmFuc2Zvcm0nLCAncm90YXRlKDQ1ZGVnKSddLFxuICAgIFsnLW1zLVRyYW5zZm9ybScsICdyb3RhdGUoNDVkZWcpJ10sXG4gICAgWyctby10cmFuc2Zvcm0nLCAncm90YXRlKDQ1ZGVnKSddLFxuICAgIFsndHJhbnNmb3JtJywgJ3JvdGF0ZSg0NWRlZyknXVxuXVxuXG5jb25zdCBCRUZPUkUgPSBbXG4gICAgWydjb250ZW50JywgJ1wiXCInXSxcbiAgICBbJ3BhZGRpbmcnLCAnLjM4ZW0gMCddLFxuICAgIFsnYmFja2dyb3VuZC1jb2xvcicsICcjYTAwJ10sXG4gICAgWydiYWNrZ3JvdW5kLWltYWdlJywgJy13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20ocmdiYSgwLCAwLCAwLCAwKSksIHRvKHJnYmEoMCwgMCwgMCwgMC4xNSkpKSddLFxuICAgIFsnYmFja2dyb3VuZC1pbWFnZScsICctd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4xNSkpJ10sXG4gICAgWydiYWNrZ3JvdW5kLWltYWdlJywgJy1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjE1KSknXSxcbiAgICBbJ2JhY2tncm91bmQtaW1hZ2UnLCAnLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4xNSkpJ10sXG4gICAgWydiYWNrZ3JvdW5kLWltYWdlJywgJy1vLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4xNSkpJ10sXG4gICAgWydiYWNrZ3JvdW5kLWltYWdlJywgJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4xNSkpJ10sXG4gICAgWydib3gtc2hhZG93JywgJzAgLjE1ZW0gLjIzZW0gMCByZ2JhKDAsIDAsIDAsIDAuNSknXSxcbiAgICBbJ3BvaW50ZXItZXZlbnRzJywgJ2F1dG8nXVxuXVxuXG5jb25zdCBBRlRFUiA9IFtcbiAgICBbJ2NvbnRlbnQnLCAnYXR0cihkYXRhLXJpYmJvbiknXSxcbiAgICBbJ2NvbG9yJywgJyNmZmYnXSxcbiAgICBbJ2ZvbnQnLCAnNzAwIDFlbSBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXSxcbiAgICBbJ2xpbmUtaGVpZ2h0JywgJzEuNTRlbSddLFxuICAgIFsndGV4dC1kZWNvcmF0aW9uJywgJ25vbmUnXSxcbiAgICBbJ3RleHQtc2hhZG93JywgJzAgLS4wOGVtIHJnYmEoMCwgMCwgMCwgMC41KSddLFxuICAgIFsndGV4dC1hbGlnbicsICdjZW50ZXInXSxcbiAgICBbJ3RleHQtaW5kZW50JywgJzAnXSxcbiAgICBbJ3BhZGRpbmcnLCAnLjE1ZW0gMCddLFxuICAgIFsnbWFyZ2luJywgJy4xNWVtIDAnXSxcbiAgICBbJ2JvcmRlci13aWR0aCcsICcuMDhlbSAwJ10sXG4gICAgWydib3JkZXItc3R5bGUnLCAnZG90dGVkJ10sXG4gICAgWydib3JkZXItY29sb3InLCAnI2ZmZiddLFxuICAgIFsnYm9yZGVyLWNvbG9yJywgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSddXG5dXG5cbi8qKlxuICogUHJvZ3JhbW1hdGljYWxseSBhZGQgXCJGb3JrIG1lIEdpdGh1YlwiIFJpYmJvbiB1c2luZyBpbmxpbmUgQ1NTXG4gKiBCYXNlZCBvbiBDU1MgZnJvbSBodHRwcywvL2dpdGh1Yi5jb20vc2ltb253aGl0YWtlci9naXRodWItZm9yay1yaWJib24tY3NzXG4gKiBAcGFyYW0ge3N0cmluZ30gW3VybF0gLSBkbyBub3QgbmVlZCB0byBpbmNsdWRlIGlmIFVSTCBpcyBjYWxsZWQgZnJvbSBodHRwczovL3VzZXJuYW1lLmdpdGh1Yi5pby9wcm9qZWN0L2h0bWxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtvcHRpb25zLnBhcmVudD1kb2N1bWVudC5ib2R5XVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5maXhlZF1cbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jb3JuZXI9dG9wcmlnaHRdIHNvbWUgY29tYmluYXRpb24gb2YgdG9wL2JvdHRvbSwgYW5kIGxlZnQvcmlnaHRcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy50ZXh0PWZvcmsgbWUgb24gZ2l0aHViXSB0ZXh0IHRvIHNob3dcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5iYWNrZ3JvdW5kPSNhMDBdIGNvbG9yIGZvciByaWJib25cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmb3JrTWUodXJsLCBvcHRpb25zKVxue1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGlmICh1cmwpXG4gICAge1xuICAgICAgICBhLmhyZWYgPSB1cmxcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuc3BsaXQoJy4nKVswXVxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJylbMV1cbiAgICAgICAgYS5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS8nICsgdXNlcm5hbWUgKyAnLycgKyBwcm9qZWN0XG4gICAgfVxuXG4gICAgYS50aXRsZSA9IGEuaW5uZXJUZXh0ID0gb3B0aW9ucy50ZXh0IHx8ICdmb3JrIG1lIG9uIGdpdGh1YidcbiAgICBhLnNldEF0dHJpYnV0ZSgnZGF0YS1yaWJib24nLCBvcHRpb25zLnRleHQgfHwgJ2ZvcmsgbWUgb24gZ2l0aHViJylcbiAgICBhLmNsYXNzTmFtZSA9ICdnaXRodWItZm9yay1yaWJib24tJyArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMClcbiAgICBpZiAob3B0aW9ucy5wYXJlbnQpXG4gICAge1xuICAgICAgICBvcHRpb25zLnBhcmVudC5hcHBlbmRDaGlsZChhKVxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpXG4gICAgfVxuICAgIGEuc3R5bGUucG9zaXRpb24gPSBvcHRpb25zLmZpeGVkID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZSdcbiAgICBpZiAob3B0aW9ucy5iYWNrZ3JvdW5kKVxuICAgIHtcbiAgICAgICAgQkVGT1JFWzJdWzFdID0gb3B0aW9ucy5iYWNrZ3JvdW5kXG4gICAgfVxuICAgIGlmIChvcHRpb25zLmNvbG9yKVxuICAgIHtcbiAgICAgICAgQUZURVJbMV1bMV0gPSBvcHRpb25zLmNvbG9yXG4gICAgfVxuICAgIGZvciAobGV0IHN0eWxlIGluIFJJQkJPTilcbiAgICB7XG4gICAgICAgIGEuc3R5bGVbc3R5bGVdID0gUklCQk9OW3N0eWxlXVxuICAgIH1cbiAgICBsZXQgYmVmb3JlQWZ0ZXIgPSAneydcbiAgICBmb3IgKGxldCBzdHlsZSBvZiBCRUZPUkVfQUZURVIpXG4gICAge1xuICAgICAgICBiZWZvcmVBZnRlciArPSBzdHlsZVswXSArICc6JyArIHN0eWxlWzFdICsgJzsnXG4gICAgfVxuICAgIGxldCBiZWZvcmUgPSBiZWZvcmVBZnRlclxuICAgIGZvciAobGV0IHN0eWxlIG9mIEJFRk9SRSlcbiAgICB7XG4gICAgICAgIGJlZm9yZSArPSBzdHlsZVswXSArICc6JyArIHN0eWxlWzFdICsgJzsnXG4gICAgfVxuICAgIGxldCBhZnRlciA9IGJlZm9yZUFmdGVyXG4gICAgZm9yIChsZXQgc3R5bGUgb2YgQUZURVIpXG4gICAge1xuICAgICAgICBhZnRlciArPSBzdHlsZVswXSArICc6JyArIHN0eWxlWzFdICsgJzsnXG4gICAgfVxuICAgIGxldCBib3R0b20sIGxlZnRcbiAgICBpZiAob3B0aW9ucy5zaWRlKVxuICAgIHtcbiAgICAgICAgYm90dG9tID0gb3B0aW9ucy5zaWRlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignYm90dG9tJykgIT09IC0xXG4gICAgICAgIGxlZnQgPSBvcHRpb25zLnNpZGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdsZWZ0JykgIT09IC0xXG4gICAgfVxuICAgIGlmIChib3R0b20pXG4gICAge1xuICAgICAgICBhLnN0eWxlLnRvcCA9ICdhdXRvJ1xuICAgICAgICBhLnN0eWxlLmJvdHRvbSA9IDBcbiAgICAgICAgYmVmb3JlICs9ICd0b3A6YXV0bztib3R0b206My4yM2VtOydcbiAgICAgICAgYWZ0ZXIgKz0gJ3RvcDphdXRvO2JvdHRvbTozLjIzZW07J1xuICAgIH1cbiAgICBpZiAobGVmdClcbiAgICB7XG4gICAgICAgIGEuc3R5bGUucmlnaHQgPSAnYXV0bydcbiAgICAgICAgYS5zdHlsZS5sZWZ0ID0gMFxuICAgICAgICBiZWZvcmUgKz0gJ3JpZ2h0OmF1dG87bGVmdDotMy4yM2VtOydcbiAgICAgICAgYWZ0ZXIgKz0gJ3JpZ2h0OmF1dG87bGVmdDotMy4yM2VtOydcbiAgICB9XG4gICAgaWYgKChsZWZ0ICYmICFib3R0b20pIHx8ICghbGVmdCAmJiBib3R0b20pKVxuICAgIHtcbiAgICAgICAgYmVmb3JlICs9ICd0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7J1xuICAgICAgICBhZnRlciArPSAndHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpOydcbiAgICB9XG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSlcbiAgICBjb25zdCBzaGVldCA9IHN0eWxlLnNoZWV0XG4gICAgc2hlZXQuaW5zZXJ0UnVsZSgnLicgKyBhLmNsYXNzTmFtZSArICc6OmJlZm9yZScgKyBiZWZvcmUgKyAnfScpXG4gICAgc2hlZXQuaW5zZXJ0UnVsZSgnLicgKyBhLmNsYXNzTmFtZSArICc6OmFmdGVyJyArIGFmdGVyICsgJ30nKVxufSJdfQ==