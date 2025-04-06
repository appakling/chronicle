# chronicle
a open-source, static hosted wiki creation tool

## example wiki filesystem (with annotations)
```
index.html - home / landing page of your wiki. 
/wiki/ - the wiki folder, contains everything besides landing page.
↳ /data/ - all your data. styles, to do lists, whatever data you want.
  ↳ style.css - the style for your wiki. you can have many if you want.
↳ /images/ - any images.
  ↳ /mc/
    ↳ mcSmile.gif
↳ /pages/ - any pages in your wiki.
  ↳ /characters/
    ↳ /mc/
      ↳ mc.html - the page that displays information
      ↳ mc.js - the file that contains the information
```
> [!WARNING]
>for your pages, make sure that you don't have more than 3 subfolders. ```pages/characters/mc/``` SHOULD be the furthest, or you will have to add extra ```../``` to the css file.

## contributing
all the text for every part of a wiki page is contained in a js file unique to that page.

the file contains "chunks" that have the information in them. 

for example, a chunk may have the character's name, "Basil" as the variable "name". this js file finds a part of the wiki page that has the "name" id, and puts "Basil" there.
 
this is great, as making a new page is literally just typing in what you want to add. 

the only downside is that big, long paragraphs will be hard to format, and maybe a little bit annoying. 
> [!NOTE]  
> i'm working on the above issue :)


## goals
- easy to customize
- easy to edit and contribute - little to no coding knowledge needed
- minimal
