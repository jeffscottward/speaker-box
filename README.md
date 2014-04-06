# SpeakerBox - Web Based TTS(Text-To-Speech) Tool
## Installation
```javascript
 npm install --save speakerbox // --save flag stores reference in package.json
```
## Require( ) into your app
```javascript
var speakerbox = require('speakerbox');
```
## Usage
```javascript
speakerbox('URL STRING','DOM SELECTOR STRING', 'OPTIONAL SPEAKER STRING');
```
## Example
```javascript
var speakerbox = require('speakerbox');
// play Radiohead - Fitter Happier
speakerbox.playText('http://songmeanings.com/songs/view/558/','#textblock');
```
## Available Voices
| Guys    | Girls     | Others    |
|:--------|:---------:|----------:|
| Albert  | Agnes     | Bad News
| Alex    | Kathy     | Bahh
| Bruce   | Princess  | Bells
| Fred    | Vicki     | Boing
| Junior  | Victoria  | Cellos
| Ralph   |           | Deranged
|         |           | Good News
|         |           | Hysterical
|         |           | Pipe Organ
|         |           | Trinoids
|         |           | Whisper
|         |           | Zarvox
