import { NgModule } from '@angular/core';
import { SortByDateTimePipe } from './sort-by-date-time/sort-by-date-time';
import { IntDtPipe } from './int-dt/int-dt';

import { KeyCreatorPipe } from './key-creator/key-creator';
@NgModule({
	declarations: [SortByDateTimePipe,
    IntDtPipe,
    KeyCreatorPipe,],
	imports: [],
	exports: [SortByDateTimePipe,
    IntDtPipe,
    KeyCreatorPipe]
})
export class PipesModule {}
