# chronicle
a open-source, static hosted wiki creation tool

# example wiki filesystem (with annotations)
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

## goals
- easy to customize
- easy to edit and contribute - little to no coding knowledge needed
- minimal
