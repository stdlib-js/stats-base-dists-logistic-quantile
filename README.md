<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Quantile Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Logistic][logistic-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [logistic][logistic-distribution] random variable is

<!-- <equation class="equation" label="eq:logistic_quantile_function" align="center" raw="Q(p;\mu,s)= \mu + s \ln \left( \frac{p}{1-p} \right )" alt="Quantile function for a logistic distribution."> -->

<div class="equation" align="center" data-raw-text="Q(p;\mu,s)= \mu + s \ln \left( \frac{p}{1-p} \right )" data-equation="eq:logistic_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/logistic/quantile/docs/img/equation_logistic_quantile_function.svg" alt="Quantile function for a logistic distribution.">
    <br>
</div>

<!-- </equation> -->

for `0 <= p < 1`, where `µ` is the location parameter and `s > 0` is the scale parameter.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import quantile from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-quantile@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-quantile@esm/index.mjs';
```

#### quantile( p, mu, s )

Evaluates the [quantile function][quantile-function] for a [logistic][logistic-distribution] distribution with parameters `mu` (location parameter) and `s` (scale parameter).

```javascript
var y = quantile( 0.5, 0.0, 1.0 );
// returns 0.0

y = quantile( 0.2, 4.0, 2.0 );
// returns ~1.227
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 0.0, 1.0 );
// returns NaN

y = quantile( -0.1, 0.0, 1.0 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 0.0, 1.0 );
// returns NaN

y = quantile( 0.0, NaN, 1.0 );
// returns NaN

y = quantile( 0.0, 0.0, NaN );
// returns NaN
```

If provided `s < 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, 0.0, -1.0 );
// returns NaN
```

If provided `s = 0`, the function evaluates the [quantile function][quantile-function] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var y = quantile( 0.3, 8.0, 0.0 );
// returns 8.0

y = quantile( 0.9, 8.0, 0.0 );
// returns 8.0
```

#### quantile.factory( mu, s )

Returns a function for evaluating the [quantile function][quantile-function] of a [logistic][logistic-distribution] distribution with parameters `mu` and `s`.

```javascript
var myQuantile = quantile.factory( 10.0, 2.0 );

var y = myQuantile( 0.2 );
// returns ~7.227

y = myQuantile( 0.8 );
// returns ~12.773
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import quantile from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-quantile@esm/index.mjs';

var mu;
var s;
var p;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    mu = randu() * 10.0;
    s = randu() * 10.0;
    y = quantile( p, mu, s );
    console.log( 'p: %d, µ: %d, s: %d, Q(p;µ,s): %d', p, mu, s, y );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-logistic-quantile.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-logistic-quantile

[test-image]: https://github.com/stdlib-js/stats-base-dists-logistic-quantile/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-logistic-quantile/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-logistic-quantile/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-logistic-quantile?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-logistic-quantile.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-logistic-quantile/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-logistic-quantile/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-logistic-quantile/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-logistic-quantile/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-logistic-quantile/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-logistic-quantile/main/LICENSE

[logistic-distribution]: https://en.wikipedia.org/wiki/Logistic_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->
