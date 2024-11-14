# Introduction to Vim Editor

## Line Number

```
:set number - Show Line number
:set nonumber - Hide Line Number
```

## Abbr

```
:ab KUET KHULNA UNIVERSITY OF ENGINEERING & TECHNOLOGY
> To Escape Abbr -> ctrl+v
```

## Save

```
:set nonumber - Hide Line Number
:w - Save File :set nonumber - Hide Line Number
:w filename - Save File with new name
:wq - Save and close
```

## Editing

```
i - Insert Mode
v - Visual Mode
V - Linewise Visual Mode
dd - Delete Line
yy - Yank line
yw - Yank Word
x - cut
p - Paste
dw - Delete Word
2dw - Delete 2 words
```

## Register / Buffer

```
:reg - show registers content
:reg x - show register x content
"xy - yank into register x
"xp - paste contents of register x
```

## Navigation & Split

```
w - Move to the start of the next word.
e - Move to the end of the current word.
b - Move to the beginning of the previous word.
gg - Move to the top of the file.
G - Move to the bottom of the file.
0 - Move to the beginning of the current line.
$ - Move to the end of the current line.

:split file.txt - Split the window Horigontally
:vsplit - Split the window Vertically.
Ctrl + wh - move cursor to the left window 
Ctrl + wl - move cursor to the right window 
Ctrl + wj - move cursor to the window below 
Ctrl + wk - move cursor to the window above
```

