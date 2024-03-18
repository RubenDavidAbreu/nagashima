import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  document.addEventListener('DOMContentLoaded', () => {
    const cross = document.querySelector('.cross') as HTMLElement | null;

    if (!cross) {
        console.error('Element with class "cross" not found.');
        return;
    }

    let isRotated: boolean = false; 

    cross.addEventListener('click', () => {

        const newDuration = isRotated ? 1000 : 1200; 

        
        cross.style.transition = `transform ${newDuration}ms`;

        
        if (isRotated) {
            cross.style.transform = 'rotate(0deg)';
        } else {
            cross.style.transform = 'rotate(180deg)';
        }
        isRotated = !isRotated; // Toggle the state
    });
});

