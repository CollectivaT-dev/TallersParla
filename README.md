# TallersParla
Recursos de tallers de tecnologia de la parla

## Javascript Setup

Requirements:
- Python
- Chrome browser 
- espeak
- p5.js (included)
- p5.js-speech (included)

### p5.js environment

Examples are based on the [*p5.js* environment](https://p5js.org/reference/) which is an open-source JavaScript library for creative coding. In order to load p5.js under your html:

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.js"></script>
```

We will also use the [*p5.js-speech*](https://idmnyu.github.io/p5.js-speech/) addon which accomodates use of speech features in browser. To load:

```
<script src="../../lib/p5.speech.js"></script>
```

### espeak installation

eSpeak is a compact open source software speech synthesizer for English and other languages, for Linux and Windows. 

To install:
- [linux](https://vitux.com/convert-text-to-voice-with-espeak-on-ubuntu/)
- [mac](http://macappstore.org/espeak/)
- [windows (not tested)](https://support.office.com/en-us/article/How-to-download-Text-to-Speech-languages-for-Windows-10-d5a6b612-b3ae-423f-afa5-4f6caf1ec5d3)

eSpeak is called through the javascript library mespeak. For further reference: https://masswerk.at/mespeak/

In order to load mespeak under your html:

```
<script src="../../lib/mespeak.js"></script>
```

### Running the examples

Javascript examples we'll cover in the first workshop are included in this repository. You can download it either manually or through git:

```
git clone https://github.com/CollectivaT-dev/TallersParla.git
cd TallersParla
```

To run javascript samples run a python server under the directory `js`:

```
cd js
python -m http.server
```

To run an example, go to your browser and type:

```
http://localhost:8000/<path-to-example>
```

For example, to run the first English example:

```
http://localhost:8000/examples-eng/IDMNYU/01simple.html
```

NOTE: For apps that connect to Google Cloud ASR, you must use Chrome.

## References

Sources for the javascript examples are modified from [p5.js-speech](https://github.com/IDMNYU/p5.js-speech) and [CodingTrain](https://github.com/CodingTrain/website/tree/master/CodingChallenges)

