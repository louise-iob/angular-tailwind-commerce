# Spacing

Space out in the available space with a space between the components or words. Then add items-center to align vertically as well. This is useful when the button is styled.
css ```
flex justify-between items-center
```

Primary button style example:

html ```
<button class="bg-blue-500 text-white w-full border px-5 py-2 rounded-xl shadow-md hover:opacity-90" (click)="btnClicked.emit()">
```

To increase the size of the title text:

html ```
<span class="text-xl"> 
```