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

    let isRotated: boolean = false; // Track whether the element is rotated

    cross.addEventListener('click', () => {
        // Decide on the new duration here. You can set this dynamically as needed.
        // For example, alternate between 1000ms and 2000ms
        const newDuration = isRotated ? 1000 : 1200; // milliseconds

        // Apply the new duration to the transition property
        cross.style.transition = `transform ${newDuration}ms`;

        // Apply the rotation
        if (isRotated) {
            cross.style.transform = 'rotate(0deg)';
        } else {
            cross.style.transform = 'rotate(180deg)';
        }
        isRotated = !isRotated; // Toggle the state
    });
});

