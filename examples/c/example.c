/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

#include "stdlib/stats/base/dists/logistic/quantile.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
	double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
	return min + ( v * ( max-min ) );
}

int main( void ) {
	double mu;
	double p;
	double s;
	double y;
	int i;

	for ( i = 0; i < 25; i++ ) {
		mu = random_uniform( -5.0, 5.0 );
		p = random_uniform( 0.0, 1.0 );
		s = random_uniform( 0.0, 20.0 );
		y = stdlib_base_dists_logistic_quantile( p, mu, s );
		printf( "p:: %lf, µ:: %lf, s: %lf, Q(p;µ,s): %lf\n", p, mu, s, y );
	}
}
