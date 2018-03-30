import { NgModule } from '@angular/core';
import { SortByDateTimePipe } from './sort-by-date-time/sort-by-date-time';
import { IntDtPipe } from './int-dt/int-dt';
@NgModule({
	declarations: [SortByDateTimePipe,
    IntDtPipe],
	imports: [],
	exports: [SortByDateTimePipe,
    IntDtPipe]
})
export class PipesModule {}
