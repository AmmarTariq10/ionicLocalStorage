import { NgModule } from '@angular/core';
import { SortByDateTimePipe } from './sort-by-date-time/sort-by-date-time';
import { IntDtPipe } from './int-dt/int-dt';
import { ArrangePipe } from './arrange/arrange';
import { KeyCreatorPipe } from './key-creator/key-creator';
@NgModule({
	declarations: [SortByDateTimePipe,
    IntDtPipe,
    ArrangePipe,
    KeyCreatorPipe,
    KeyCreatorPipe],
	imports: [],
	exports: [SortByDateTimePipe,
    IntDtPipe,
    ArrangePipe,
    KeyCreatorPipe,
    KeyCreatorPipe]
})
export class PipesModule {}
