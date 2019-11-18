# TallersParla
Recursos de [tallers de tecnologia de la parla i les alternatives lliures en català.](https://collectivat.cat/blog/2019-10-16-tallers-tecnologia-de-la-parla/)

## Exemples avançats

No cal instal·lar res pels exemples avançats, perquè estan preparats per executar al nuvol, mitjançant el Google Colaboratory. Els llibretes (notebooks) de jupyter estan a la carpeta de `ipyn`. Per executar-los al Colaboratory simplement podeu anar a l'exemple [d'inferència](https://colab.research.google.com/github/CollectivaT-dev/TallersParla/blob/master/ipynb/tacotron2_inference.ipynb
) i [d'entrenament](https://colab.research.google.com/github/CollectivaT-dev/TallersParla/blob/master/ipynb/tacotron2_transfer_learn.ipynb) mitjançant aprenentatge de transferència.

L'objectiu del `tacotron2_inference.ipynb` és fer servir els models de tacotron2 i waveglow oberts, per sintetitzar frases en anglès, i aquest llibreta genera fitxers d'àudio. Mitjançant del llibreta de tacotron2_transfer_learn.ipynb es pot entrenar nous models de tacotron2, a partir del model publicat en anglès, és a dir executar un procés de "transfer learning" (aprenentatge de transferència).

![](https://github.com/collectivat-dev/TallersParla/blob/master/img/cuda03.png)

## Exemples bàsics

### Javascript Setup

Requisits:
- Python
- Navegador de Chrome
- espeak
- p5.js (inclòs)
- p5.js-speech (inclòs)

### p5.js

Els exemples es basen en [l'entorn *p5.js*](https://p5js.org/reference/), que és una llibreria de JavaScript de codi obert pel desenvolupament dels projectes creatives. Per carregar p5.js, dins del vostre html:

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.js"></script>
```

També utilitzarem l’add-on [*p5.js-speech*](https://idmnyu.github.io/p5.js-speech/) que facilita l'ús de funcions de la parla al navegador. Per carregar:

```
<script src="../../lib/p5.speech.js"></script>
```

### espeak instal·lació

eSpeak és un sintetitzador de parla obert i lliure. És una aplicació molt compacte i pot generar veus en diverses idiomes inclòs el català. És util sobretot per Linux i Windows, perquè MacOS té la possibilitat de fer fer servir les veus d'Apple.

Per instal·lar:
- [linux](https://vitux.com/convert-text-to-voice-with-espeak-on-ubuntu/)
- [mac](http://macappstore.org/espeak/)
- [windows (no provat)](https://support.office.com/en-us/article/How-to-download-Text-to-Speech-languages-for-Windows-10-d5a6b612-b3ae-423f-afa5-4f6caf1ec5d3)

Per les aplicacions de JavaScript, es pot cridar per eSpeak mitjançant la llibreria mespeak. Per a més informació: https://masswerk.at/mespeak/

Per poder carregar mespeak, cal fer aquesta crida dins del vostre html:

```
<script src="../../lib/mespeak.js"></script>
```

### Executar els exemples

En aquest repositori, es pot trobar els nostres exemples de JavaScript. Podeu descarregar-los manualment o simplement mitjançat git:

```
git clone https://github.com/CollectivaT-dev/TallersParla.git
cd TallersParla
```

Per executar el codi de JavaScript, es necessari crear un servidor local. Una manera fàcil de fer-ho és, dins de la carpeta `js`:

```
cd js
python -m http.server
```

Per veure el resultat, mira al vostre navegador amb l'url:

```
http://localhost:8000/<path-to-example>
```

Per exemple, el primer exemple hauria de correr a l'url:

```
http://localhost:8000/examples-eng/IDMNYU/01simple.html
```

AVÍS: Els exemples de reconeixement de la parla utilitza els serveis de Google Cloud ASR, i per poder llançar-los cal fer servir el navegador Chrome.

## Referències

Els exemples de JavaScript són versions modificades de [p5.js-speech](https://github.com/IDMNYU/p5.js-speech) i [CodingTrain](https://github.com/CodingTrain/website/tree/master/CodingChallenges).

---

La preparació d'aquests recursos va ser possible amb el suport del [Departament de Cultura](http://cultura.gencat.cat/) de la Generalitat i una part dels fons provenen dels cabals que atorga la Junta d'Herències de la Generalitat de Catalunya.

![](https://github.com/collectivat/cmusphinx-models/blob/master/img/logo_generalitat.png)
