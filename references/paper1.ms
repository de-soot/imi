.R1 \" Refer block start
database ref1.bib # Path to refer bibliography file from current working directory (can also be absolute directory)
accumulate # Prints References at end of the document (same as `-e` argument for `refer`)
move-punctuation # Ensures citations appear before punctuations (same as `-P` argument for `refer`)
sort A+ # Sorts References in alphabetical order
label "(A1?(A1.n(A3?' et al.':A2&' & 'A2.n)):Q)', '(D.y|D)" # "Author(s), Date" format for parenthetical citation (joins author names using '&' if 2 authors; appends 'et. al.' if 3 or more)
bracket-label " (" ) "; " # (same as `-S` argument for `refer`)
no-label-in-reference # Do not display (Author(s), Date) like footnotes in reference list
join-authors " & " ", " " & " # Change default "and" to ampersand (&) when joining author names in reference entry
.R2 \" Refer block end

\" Font settings
.nr PS 12
\" Double space
.nr VS 24

\" Remove headers
.ds CH

.TL
IMI Individual Assignment
.AU
Author
.IP \(bu
Favicon logo image source.
.[
logo
.]
.IP \(bu
Image used in the `About' page.
.[
interior
.]
.IP \(bu
Image and content used for ``Necronomicon'' book page.
.[
necronomicon
.]
.IP \(bu
Image and content used for ``The Hitchhiker's Guide to the Universe'' book page.
.[
hitchhiker
.]
.IP \(bu
Image and content used for ``The Restaurant at the End of the Universe'' book page.
.[
restaurant
.]
.IP \(bu
Image and content used for ``Life, the Universe and Everything'' book page.
.[
life
.]
.IP \(bu
Image and content used for ``So Long, and Thanks for All the Fish'' book page.
.[
fish
.]
.IP \(bu
Image and content used for ``Mostly Harmless'' book page.
.[
harmless
.]
.IP \(bu
Image and content used for ``Matilda'' book page.
.[
matilda
.]
.IP \(bu
Image and content used for ``Diary of a Wimpy Kid'' book page.
.[
wimpy
.]
.IP \(bu
Image and content used for ``Charlie and the Chocolate Factory'' book page.
.[
charlie
.]
.IP \(bu
Image and content used for ``The BFG'' book page.
.[
bfg
.]
.IP \(bu
Image and content used for ``The Twits'' book page.
.[
twits
.]
.IP \(bu
Image and content used for ``The Witches'' book page.
.[
witches
.]
.IP \(bu
Image and content used for ``James and the Giant Peach'' book page.
.[
james
.]
.IP \(bu
Image and content used for ``Stuart Little'' book page.
.[
stuart
.]
.IP \(bu
Image and content used for ``Charlotte's Web'' book page.
.[
charlotte
.]
.IP \(bu
Image and content used for ``Introduction to Linear Algebra (Gilbert Strang, 2)'' book page.
.[
linalgintro
.]
.IP \(bu
Image and content used for ``Linear Algebra and Its Applications, 4th Edition'' book page.
.[
linalgapp
.]
.IP \(bu
Image and content used for ``Linear Algebra and Learning from Data'' book page.
.[
linalgdata
.]
.IP \(bu
Image and content used for ``Structure and Interpretation of Computer Programs - 2nd Edition (MIT Electrical Engineering and Computer Science)'' book page.
.[
sicp
.]
.IP \(bu
Image and content used for ``Computer Systems: A Programmer's Perspective'' book page.
.[
csapp
.]
.IP \(bu
Image and content used for ``The Algorithm Design Manual (Texts in Computer Science)'' book page.
.[
dsa
.]
.IP \(bu
Image and content used for ``Mathematics for Computer Science'' book page.
.[
mcs
.]
.IP \(bu
Image and content used for ``Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems'' book page.
.[
ddia
.]
.IP \(bu
Image and content used for ``C Programming Language, 2nd Edition'' book page.
.[
clang
.]
.IP \(bu
Image and content used for ``Readings In Database Systems'' book page.
.[
redbook
.]
.IP \(bu
Image and content used for ``Computer Networking: A Top-Down Approach'' book page.
.[
network
.]
.IP \(bu
Image and content used for ``Operating Systems: Three Easy Pieces'' book page.
.[
ostep
.]
.bp
