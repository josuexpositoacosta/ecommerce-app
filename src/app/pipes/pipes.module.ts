import { NgModule } from '@angular/core';

import { ShortDescriptionPipe } from './short-description.pipe';




@NgModule({
  
  imports: [], // CommonModule ]
  declarations: [
    ShortDescriptionPipe,
    
     
  ],
  exports:[
    ShortDescriptionPipe,
    
  ]
})
export class PipesModule { }
 