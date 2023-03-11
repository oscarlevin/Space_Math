var dictionary = {
  "+": {
    "comment": [
      "¼Ó"
    ],
    "alternative": [
      "plus",
      "¼Ó"
    ],
    "type": "operator",
    "priority": 10,
    "rule": {
      "2,3": "#1 + #3"
    },
    "ruleML": {
      "2,3": "#1<mo>+</mo>#3"
    },
    "speech": {
      "2,3": "#1 plus #3"
    } 
  },
  "-": {
    "comment": [
      "¼õ"
    ],
    "alternative": [
      "minus",
      "subtracts",
      "¼õ"
    ],
    "type": "operator",
    "priority": 10,
    "mustHaveLeftArgument": true,
    "rule": {
      "2,3": "#1 - #3"
    },
    "ruleML": {
      "2,3": "#1<mo>-</mo>#3"
    },
    "speech": {
      "2,3": "#1 minus #3"
    }
   },
  "⭐": {
    "comment": [],
    "alternative": [],
    "type": "operator",
    "priority": 20,
    "rule": {
      "2,3": "#1 * #3"
    },
    "ruleML": {
      "2,3": "#1<mo>∗</mo>#3"
    },
    "speech": {
      "2,3": "#1 star #3"
    } 
  },
  "😑": {
    "comment": [
      "¼õ"
    ],
    "alternative": [
    ],
    "type": "function",
    "priority": 91,
    "rule": {
      "1,2": "{-#2}"
    },
    "ruleML": {
//      "1,2": "<mo>-</mo>#2"
      "1,2": "<mrow><mo>-</mo>#2</mrow>"
    },
    "speech": {
      "1,2": " quantityN negative #2 Nendquantity "
    } 
  },
  "*": {
    "comment": [
      "³Ë"
    ],
    "alternative": [
      "multiply",
      "³Ë"
    ],
    "type": "operator",
    "priority": 20,
    "rule": {
      "2,3": "#1 #3"
    },
    "ruleML": {
      "2,3": "#1<mo>&InvisibleTimes;</mo>#3"
    },
    "speech": {
      "2,3": "#1 times #3"
    }
  },
  "/": {
    "comment": [
      "³ý, ³ýÒÔ"
    ],
    "alternative": [
      "over",
      "divide",
      "³ý",
      "³ýÒÔ"
    ],
    "type": "operator",
    "wrappedarguments": true,
    "priority": 20,
    "rule": {
      "2,3": "\\frac{#1}{#3}"
    },
    "offpair": {
      "2,3": [ 1, 3 ]
    },
    "ruleML": {
      "2,3": "<mfrac><mrow>#1</mrow><mrow>#3</mrow></mfrac>"
    },
    "speech": {
      "2,3": "fraction #1 denominator #3 enddenominator"
    } 
  },
  "//": {
    "alternative": [ ],
    "type": "operator",
    "priority": 20,
//    "offpair": {
//      "2,3": [ 1, 3 ]
//    },
    "rule": {
      "2,3": "#1 / #3"
    },
    "speech": {
      "2,3": " inline fraction #1 over #3 endfraction "
    },
    "ruleML": {
      "2,3": "#1<mo>/</mo>#3"
    }
  },
  "=": {
    "comment": [
      "µÈÓÚ"
    ],
    "alternative": [
      "equal",
      "µÈÓÚ"
    ],
    "type": "relation",
    "priority": 0,
//    "offpair": {
//      "2,3": [ 1, 3 ]
//    },
    "rule": {
      "2,3": "#1 = #3"
    },
    "ruleML": {
      "2,3": "#1<mo>=</mo>#3"
    },
    "speech": {
      "2,3": "#1 equals #3"
    }
  },
  ">=": {
    "comment": [
      "´óÓÚµÈÓÚ"
    ],
    "alternative": [
      "geq",
      "´óÓÚµÈÓÚ"
    ],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\geq #3"
    }
  },
  "<=": {
    "comment": [
      "Ð¡ÓÚµÈÓÚ"
    ],
    "alternative": [
      "leq",
      "Ð¡ÓÚµÈÓÚ"
    ],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\leq #3"
    },
    "ruleML": {
      "2,3": "#1<mo>&#x2264;</mo>#3"
    },
    "speech": {
      "2,3": "#1 less than or equal to #3"
    }
  },
  "^": {
    "comment": [
      "µ½",
      "ÖÕÖ¹Öµ",
      "´Î·½",
      "ÉÏ±ê"
    ],
    "alternative": [
      "µ½",
      "ÖÕÖ¹Öµ",
      "´Î·½",
      "ÉÏ±ê"
    ],
    "type": "operator",
    "priority": 30,
    "script": true,
    "rule": {
// go back and compare this to markBrackets called from if (newValue.includes("#@"+(i+1))){ in tree.js
 //     "2,3": "#1^#@3"
      "2,3": "#1^{#@3}"
    },
    "offpair": {
      "2,3": [
        3
      ]
    },
    "ruleML": {
      "2,3": "<msup><mrow>#1</mrow><mrow>#@3</mrow></msup>"
   //   "2,3": "<msup>#1<mrow>#@3</mrow></msup>"
    },
    "speech": {
      "2,3": " quantityV #1 Vendquantity to the quantityE #@3 Eendquantity "
   //   "2,3": " #1 to the quantityE #@3 Eendquantity "
    }
  },
  "_": {
    "comment": [
      "´Ó",
      "³õÊ¼Öµ",
      "ÏÂ±ê"
    ],
    "alternative": [
      "´Ó",
      "³õÊ¼Öµ",
      "ÏÂ±ê"
    ],
    "type": "operator",
    "priority": 30,
    "script": true,
    "rule": {
      "2,3": "#1_#@3"
    },
    "offpair": {
      "2,3": [
        3
      ]
    },
    "ruleML": {
      "2,3": "<msub><mrow>#1</mrow><mrow>#@3</mrow></msub>"
    },
    "speech": {
      "2,3": " quantityX #1 Xendquantity sub quantityY #@3 Yendquantity "
    }
  },
  "subsup": {
    "comment": [ ],
    "alternative": [ ],
    "type": "operator",
    "priority": 30,
    "script": true,
    "rule": {
      "2,4": "#1_{#@3}^{#@4}"
    },
    "offpair": {
      "2,4": [ 3, 4 ]  // subsup is 2nd out of 4, and the 3rd and 4th have implied grouping
    },
    "ruleML": {
      "2,4": "<msubsup><mrow>#1</mrow><mrow>#@3</mrow><mrow>#@4</mrow></msubsup>"
    },
    "speech": {
      "2,4": " quantityX #1 Xendquantity sub quantityY #@3 Yendquantity to the quantityZ #@4 Zendquantity"
    }
  },
  "^^": {
    "alternative": [],
    "type": "operator",
    "priority": 30,
    "script": true,
    "rule": {
      "2,3": "#{}^#@3 #1"
    },
    "offpair": {
      "2,3": [
        3
      ]
    }
  },
  "__": {
    "alternative": [],
    "type": "operator",
    "priority": 30,
    "script": true,
    "rule": {
      "2,3": "#{}_#@3 #1"
    },
    "offpair": {
      "2,3": [
        3
      ]
    }
  },
  "<": {
    "comment": [
      "Ð¡ÓÚ"
    ],
    "alternative": [
      "less than",
      "Ð¡ÓÚ"
    ],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 < #3"
    },
    "ruleML": {
      "2,3": "#1<mo>&lt;</mo>#3"
    },
    "speech": {
      "2,3": "  #1 less than #3 "
    }
  },
  ">": {
    "comment": [
      "´óÓÚ"
    ],
    "alternative": [
      "greater than",
      "´óÓÚ"
    ],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 > #3"
    },
    "ruleML": {
      "2,3": "#1<mo>&gt;</mo>#3"
    },
    "speech": {
      "2,3": "  #1 greater than #3 "
    }
  },
  "\n": {
    "alternative": [
 //     ""
    ],
    "type": "relation",
    "priority": -10,
    "rule": {
      "2,3": "#1 \n #3"
    }
  },
  ",": {
    "alternative": [
//      ""
    ],
    "type": "operator",
    "priority": -10,
    "rule": {
      "2,3": "#1,#3"
    },
    "ruleML": {
      "2,3": "#1<mo>,</mo>#3"
    },
    "speech": {
      "2,3": "#1 comma #3"
    }
  },
  "?": {
    "alternative": [
//      ""
    ],
    "type": "symbol",
    "priority": 10,
    "rule": {
      "2,3": "#1,#3"
    },
    "ruleML": {
      "2,3": "#1<mo>,</mo>#3"
    },
    "speech": {
      "2,3": "#1 comma #3"
    }
  },
  ";": {
    "alternative": [
//      ""
    ],
    "type": "operator",
    "priority": -10,
    "rule": {
      "2,3": "#1;#3"
    }
  },
  "|": {
    "alternative": [
//      ""
    ],
    "type": "operator",
    "priority": -10,
    "rule": {
      "2,3": "#1 \\mid #3"
    }
  },
  "+-": {
    "comment": [
      "Õý¸º",
      "¼Ó¼õ"
    ],
    "alternative": [
      "plusminus",
      "pm",
      "¼Ó¼õ",
      "Õý¸º"
    ],
    "type": "operator",
    "priority": 10,
    "rule": {
      "2,3": "#1 \\pm #3"
    },
    "ruleML": {
      "2,3": "#1<mo>±</mo>#3"
    },
    "speech": {
      "2,3": "#1 plus-minus #3"
    }
  },
  "alpha": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\alpha"
    },
    "speech": {
      "1,1": " alpha "
    },
    "ruleML": {
      "1,1": "<mi>α</mi>"
    }
  },
  "beta": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\beta "
    },
    "speech": {
      "1,1": " beta "
    },
    "ruleML": {
      "1,1": "<mi>β</mi>"
    }
  },
  "gamma": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\gamma "
    }
  },
  "Gamma": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\Gamma "
    },
    "speech": {
      "1,1": " Gamma "
    },
    "ruleML": {
      "1,1": "<mi>Γ</mi>"
    }
  },
  "delta": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\delta"
    }
  },
  "Delta": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\Delta"
    }
  },
  "epsilon": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\epsilon"
    }
  },
  "varepsilon": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\varepsilon"
    }
  },
  "zeta": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\zeta"
    }
  },
  "eta": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\eta"
    }
  },
  "theta": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\theta"
    }
  },
  "Theta": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\Theta"
    }
  },
  "vartheta": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\vartheta"
    }
  },
  "iota": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\iota"
    }
  },
  "kappa": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\kappa"
    }
  },
  "lambda": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\lambda"
    }
  },
  "Lamda": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\Lamda"
    }
  },
  "mu": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\mu"
    }
  },
  "nu": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\nu"
    }
  },
  "xi": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\xi"
    }
  },
  "Xi": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\Xi"
    }
  },
  "pi": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\pi "
    },
    "speech": {
      "1,1": " pi " 
    },
    "ruleML": { 
      "1,1": "<mi>&pi;</mi>"
    } 
  },
  "Pi": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\Pi"
    }
  },
  "rho": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\rho"
    }
  },
  "sigma": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\sigma"
    }
  },
  "Sigma": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\Sigma"
    }
  },
  "tau": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\tau"
    }
  },
  "upsilon": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\upsilon"
    }
  },
  "phi": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\phi"
    }
  },
  "Phi": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\Phi"
    }
  },
  "varphi": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\varphi"
    }
  },
  "chi": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\chi"
    }
  },
  "psi": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\psi"
    }
  },
  "Psi": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\Psi"
    }
  },
  "omega": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\omega"
    }
  },
  "Omega": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\Omega"
    }
  },
  "del": {
    "comment": [
      "Æ«Î¢·Ö"
    ],
    "alternative": [
      "partial",
      "Æ«Î¢·Ö"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\partial"
    }
  },
  "grad": {
    "alternative": [
      "nabla"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\nabla"
    }
  },
  "O/": {
    "alternative": [
      "emptyset"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\emptyset"
    }
  },
  "infty": {
    "comment": [
      "ÎÞÇî´ó"
    ],
    "alternative": [
      "infty",
      "oo",
      "ÎÞÇî´ó"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\infty"
    },
    "speech": {
      "1,1": "infinity"
    },
    "ruleML": {
      "1,1": "<mi>∞</mi>"
    },
  },
  "aleph": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\aleph"
    }
  },
  ":.": {
    "comment": [
      "ËùÒÔ"
    ],
    "alternative": [
      "therefore",
      "thus",
      "hence",
      "ËùÒÔ"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\therefore"
    }
  },
  ":'": {
    "comment": [
      "ÒòÎª"
    ],
    "alternative": [
      "because",
      "since",
      "ÒòÎª"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\because"
    }
  },
  "...": {
    "comment": [
      "Ê¡ÂÔºÅ"
    ],
    "alternative": [
      "Ê¡ÂÔºÅ"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "#comma?[\\ldots&\\cdots]"
    }
  },
  "ldots": {
    "comment": [
      "µÍÊ¡ÂÔºÅ"
    ],
    "alternative": [
      "µÍÊ¡ÂÔºÅ"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\ldots"
    }
  },
  "cdots": {
    "comment": [
      "ÖÐÊ¡ÂÔºÅ",
      "ÖÐÐÄÊ¡ÂÔºÅ"
    ],
    "alternative": [
      "ÖÐÊ¡ÂÔºÅ",
      "ÖÐÐÄÊ¡ÂÔºÅ"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\cdots"
    }
  },
  "vdots": {
    "comment": [
      "ÊúÊ¡ÂÔºÅ"
    ],
    "alternative": [
      "ÊúÊ¡ÂÔºÅ"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\vdots"
    }
  },
  "ddots": {
    "comment": [
      "Ð±Ê¡ÂÔºÅ"
    ],
    "alternative": [
      "Ð±Ê¡ÂÔºÅ"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\ddots"
    }
  },
  "frown": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\frown"
    }
  },
  "diamond": {
    "comment": [
      "ÁâÐÎ"
    ],
    "alternative": [
      "ÁâÐÎ"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\diamond"
    }
  },
  "square": {
    "comment": [
      "·½ÐÎ",
      "Õý·½ÐÎ"
    ],
    "alternative": [
      "·½ÐÎ",
      "Õý·½ÐÎ"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\square"
    }
  },
  "CC": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\mathbb{C}"
    },
    "speech": {
      "1,1": " C "
    },
    "ruleML": {
      "1,1": "<mi>ℂ</mi>"
    }
  },
  "NN": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\mathbb{N}"
    },
    "speech": {
      "1,1": " N "
    },
    "ruleML": {
      "1,1": "<mi>ℕ</mi>"
    }
  },
  "QQ": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\mathbb{Q}"
    },
    "speech": {
      "1,1": " Q "
    },
    "ruleML": {
      "1,1": "<mi>ℚ</mi>"
    }
  },
  "RR": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\mathbb{R}"
    },
    "speech": {
      "1,1": " R "
    },
    "ruleML": {
      "1,1": "<mi>ℝ</mi>"
    }
  },
  "ZZ": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\mathbb{Z}"
    },
    "speech": {
      "1,1": " Z "
    },
    "ruleML": {
      "1,1": "<mi>ℤ</mi>"
    }
  },
  "sqrt": {
    "alternative": [],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "\\sqrt{#2}"
    },
    "speech": {
      "1,2": " square root of quantityZ #2 Zendquantity "
    },
    "ruleML": {
      "1,2": "<msqrt><mrow>#2</mrow></msqrt>"
    } 
  },
  "cardinality": {
    "comment": [
      "»ùÊý"
    ],
    "alternative": [
      "card",
      "»ùÊý"
    ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "|#2|"
    },
    "speech": {
      "1,2": " cardinality of quantityB #2 Bendquantity "
    },
    "ruleML": {
      "1,2": "<mrow intent=\"cardinality($x)\"><mo>|</mo><wrap arg=\"x\">#2</wrap><mo>|</mo></mrow>"
    }
  },
  "abs": {
    "comment": [
      "¾ø¶ÔÖµ"
    ],
    "alternative": [
      "absolute",
      "¾ø¶ÔÖµ"
    ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "|#2|"
    },
    "speech": {
      "1,2": " absolute value of quantityB #2 Bendquantity "
    },
    "ruleML": {
      "1,2": "<mrow intent=\"absolute-value($x)\"><mo>|</mo><wrap arg=\"x\">#2</wrap><mo>|</mo></mrow>"
    }
  },
  "det": {
    "comment": [
      "¾ø¶ÔÖµ"
    ],
    "alternative": [
      "determinant"
    ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "|#2|"
    },
    "speech": {
      "1,2": " determinant of #2 "
    },
    "ruleML": {
      "1,2": "<mrow intent=\"determinant($x)\"><mo>|</mo><wrap arg=\"x\">#2</wrap><mo>|</mo></mrow>"
    }
  },
 "span": {
    "comment": [],
    "alternative": [],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "\\langle #2\\rangle"
    },
    "speech": {
      "1,2": " span of #2 "
    },
    "ruleML": {
      "1,2": "<mrow intent=\"span($x)\"><mo>⟨</mo><mrow arg=\"x\">#2</mrow><mo>⟩</mo></mrow>"
    }
  },
 "vector": {
    "comment": [],
    "alternative": [],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "\\langle #2\\rangle"
    },
    "speech": {
      "1,2": "coordinate vector #2 endvector"
    },
    "ruleML": {
      "1,2": "<mrow intent=\"coordinate-vector($x)\"><mo>⟨</mo><mrow arg=\"x\">#2</mrow><mo>⟩</mo></mrow>"
    }
  },
 "anglebrackets": {
    "comment": [],
    "alternative": [],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "\\langle #2\\rangle"
    },
    "speech": {
      "1,2": " anglebrackets #2 endanglebrackets " 
    },
    "ruleML": {
      "1,2": "<mrow intent=\"angle-brackets($x)\"><mo>⟨</mo><mrow arg=\"x\">#2</mrow><mo>⟩</mo></mrow>"
    }
  },
  "setof": {
    "comment": [],
    "alternative": [],
    "type": "function",
    "priority": 55,
    "rule": {
      "1,2": "\\{#2\\}"
    },
    "offpair": {  // what does that mean?
      "1,2": [
        2
      ]
    },
    "speech": {
      "1,2": "set #2"
    },
    "ruleML": {
      "1,2": "<mrow intent=\"set($x)\"><mo>{</mo><wrap arg=\"x\">#2</wrap><mo>}</mo></mrow>"
    }
  },
  "floor": {
    "alternative": [],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "\\lfloor #2 \\rfloor"
    }
  },
  "ceiling": {
    "alternative": [
      "ceil"
    ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "\\lceiling #2 \\rceiling"
    }
  },
  "sin": {
    "alternative": [
      "sine"
    ],
    "type": "function",
    "priority": 15,
    "rule": {
      "1,2": "\\sin #2"
    },
    "speech": {
      "1,2": "sine #2"
    },
    "ruleML": {
      "1,2": "<mi>sin</mi><mo>&ApplyFunction;</mo>#2"
    }
  },
  "cos": {
    "alternative": [
      "cosine"
    ],
    "type": "function",
    "priority": 15,
    "rule": {
      "1,2": "\\cos #2"
    }
  },
  "root": {
    "alternative": [],
    "type": "function",
    "priority": 55,
    "extraArgument": 1,
    "offpair": {
      "1,3": [
        2,
        3
      ]
    },
    "rule": {
      "1,3": "\\sqrt[#2]{#3}",
      "1,2": "\\sqrt{#2}"
    }
  },
  "frac": {
    "alternative": [],
    "type": "function",
    "priority": 20,
    "extraArgument": 1,
    "offpair": {
      "1,3": [ 2, 3 ]
    },
    "rule": {
      "1,3": "\\frac{#2}{#3}",
      "1,2": "\\frac{#2@1}{#2@-1}"
    }
  },
  "sum": {
    "comment": [
      "×ÜºÍ",
      "ÇóºÍ"
    ],
    "alternative": [
      "summation",
      "×ÜºÍ",
      "ÇóºÍ"
    ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "\\sum{#2}"
    }
  },
  "wrapper": {  // a trick to group quantities without adding parentheses
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [ 2 ]
    },
    "rule": {
      "1,2": " #2 "
    },
    "speech": {
      "1,2": "#2"
    },
    "ruleML": {
      "1,2": "#2"
    }
  },
  "opwrap": {  // a large operator, like sum_n  , which acts like a function
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [ 2 ],
      "1,3": [ 2, 3 ]
    },
    "extraArgument": 1,
    "rule": {
      "1,2": " #2 ",
      "1,3": " #2{#3}"
    },
    "speech": {
      "1,2": "#2",
      "1,3": "#2 argument #3 endargument "
    },
    "ruleML": {
      "1,2": "#2",
      "1,3": "<mrow>#2<mrow>#3</mrow></mrow>"
    }
  },
  "limsop": {  // large operators with lower ad upper limits, such as \sum and \prod, but not integrals
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,3": [ 2, 3 ],  // lower limit
      "1,4": [ 1, 2, 3, 4 ],  //lower and upper lim
      "1,5": [ 1, 2, 3, 4, 5 ]  // op, lower lim, upper lim, summand
    },
    "extraArgument": 2,
    "rule": {
      "1,4": "#2_{#3}^{#4}"
    },
    "speech": {
      "1,4": " #2 from #3 to #4 "
    },
    "ruleML": {
      "1,4": "<munderover>#2<mrow>#3</mrow><mrow>#4</mrow></munderover>"
    }
  },
  "llimop": {  // large operators with limits, such as \sum and \prod, but not integrals
            // either upper and lower limits, or just lower, or no limits
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,3": [ 2, 3 ]  // lower limit
    },
    "extraArgument": 1,
    "rule": {
      "1,3": "#2_{#3}"
    },
    "speech": {
      "1,3": " #2 over #3 "
    },
    "ruleML": {
      "1,3": "<munder><mo>#2</mo><mrow>#3</mrow></munder>"
    }
  },
  "bigop": {  // large operators with no limits, such as \sum and \prod, but not integrals
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "rule": {
      "1,2": " #2 "
    },
    "speech": {
      "1,2": " #2 "
    },
    "ruleML": {
      "1,2": "<mo>#2</mo>"   // how to say it is big?
    }
  },
  "intlims": {  // various integrals
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,6": [ 2, 3, 4, 5, 6 ],  // op, lower lim, upper lim, "summand"
    },
    "extraArgument": 4,
    "rule": {
      "1,6": "#2_{#3}^{#4} #5 \\,d#6"
    },
    "speech": {
      "1,6": " #2 from #3 to #4 of #5 d#6 "
    },
    "ruleML": {
      "1,6": "<mrow><munderover><mo>#2</mo><mrow>#3</mrow><mrow>#4</mrow></munderover>#5<mspace width=\"0.167em\"></mspace><mi>d</mi>#6</mrow>",
    }
   },
    "intlimsweight": {  // various integrals
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,7": [ 2, 3, 4, 5, 6, 7 ],  // op, lower lim, upper lim, "summand"
    },
    "extraArgument": 5,
    "rule": {
      "1,7": "#2_{#3}^{#4} #5 \\,\\frac{d#6}{#7}"
    },
    "speech": {
      "1,7": " #2 from #3 to #4 of #5 d#6 over #7 "
    },
    "ruleML": {
      "1,7": "<mrow><munderover><mo>#2</mo><mrow>#3</mrow><mrow>#4</mrow></munderover>#5<mspace width=\"0.167em\"></mspace><mfrac><mrow><mi>d</mi>#6</mrow><mrow>#7</mrow></mfrac></mrow>"
     }
    },  
    "intllimweight": {  // various integrals
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,6": [ 2, 3, 4, 5, 6 ],  // op, lower lim, upper lim, "summand"
    },
    "extraArgument": 4,
    "rule": {
      "1,6": "#2_{#3} #4 \\,\\frac{d#5}{#6}"
    },
    "speech": { 
      "1,6": " #2 over #3 of #4 d#5 over #6 "
    },
    "ruleML": {
      "1,6": "<mrow><munder><mo>#2</mo><mrow>#3</mrow></munder>#4<mspace width=\"0.167em\"></mspace><mfrac><mrow><mi>d</mi>#5</mrow><mrow>#6</mrow></mfrac></mrow>"
     }
    },
    "intllim": {  // various integrals
    "alternative": [ ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,5": [ 2, 3, 4, 5 ],  // op, lower lim, "integrand",  var
    },
    "extraArgument": 3,
    "rule": {
      "1,5": "#2_{#3} #4 \\,d#5"
    },
    "speech": {
      "1,5": " #2 over #3 of #4 d#5 "
    },
    "ruleML": {
      "1,5": "<mrow><munder><mo>#2</mo><mrow>#3</mrow></munder>#4<mspace width=\"0.167em\"></mspace><mi>d</mi>#5</</mrow>"
     }
    },
  "int": {
    "alternative": [
      "integral"
    ],
    "type": "function",
    "priority": 55,
    "family": [
      "int",
      "oint"
    ],
    "pairedArgument": "d",
    "rule": {
      "1,2": "\\int #2",
      "1,3": "\\int #2 \\,d#3",
      "1,5": "\\int_{#2}^{3} #4 \\,d#5"
    },
    "speech": {
      "1,2": "integral  #2",
      "1,3": "integral  #2 d#3",
      "1,5": "integral from #2 to #3 of #4 d#5"
    },
    "ruleML": {
      "1,2": "<mo>∫</mo>#2",
      "1,3": "<mo>∫</mo>#2<mspace width=\"0.167em\"></mspace><mi>d</mi>#3"
    }
  },
  "oint": {
    "alternative": [],
    "type": "function",
    "priority": 55,
    "family": [
      "int",
      "oint"
    ],
    "pairedArgument": "d",
    "rule": {
      "1,3": "\\oint #2 \\,d#3",
      "1,2": "\\oint #2"
    }
  },
  "cup": {
    "alternative": [
      "union"
    ],
    "type": "operator",
    "priority": 10,
    "rule": {
      "2,3": "#1 \\cup #3"
    },
    "speech": {
      "2,3": " #1 union #3"
    },
    "ruleML": {
      "2,3": "#1<mo>∪</mo>#3"
    }
  },
  "cap": {
    "alternative": [
      "intersect", "intersection"
    ],
    "type": "operator",
    "priority": 10,
    "rule": {
      "2,3": "#1 \\cap #3"
    },
    "speech": {
      "2,3": " #1 intersect #3"
    },
    "ruleML": {
      "2,3": "#1<mo>∩</mo>#3"
    }
  },
  "in": {
    "alternative": [],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\in #3"
    },
    "speech": {
      "2,3": "#1 in #3"
    },
    "ruleML": {
      "2,3": "#1<mo>&#x2208;</mo>#3"
    }
  },
  "notin": {
    "alternative": ["!in"],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\notin #3"
    },
    "speech": {
      "2,3": "#1 not in #3"
    },
    "ruleML": {
      "2,3": "#1<mo>∉</mo>#3"
    }
  },
  "neq": {
    "alternative": ["!="],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\not= #3"
    },
    "speech": {
      "2,3": "#1 not equals #3"
    },
    "ruleML": {
      "2,3": "#1<mo>≠</mo>#3"
    } 
  },
  "and": {
    "alternative": [],
    "type": "operator",
    "priority": 10,
    "rule": {
      "2,3": "#1 \\land #3"
    }
  },
  "or": {
    "alternative": [],
    "type": "operator",
    "priority": 10,
    "rule": {
      "2,3": "#1 \\lor #3"
    }
  },
  "forall": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\forall"
    }
  },
  "exist": {
    "alternative": [
      "exists"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\exists"
    },
    "speech": {
      "1,1": " there exists "
    },
    "ruleML": {
      "1,1": "<mi>∃</mi>"
    }
  },
  "not": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\neg"
    }
  },
  "perp": {
    "alternative": [
      "perpendicular",
      "bot"
    ],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\bot"
    }
  },
  "dot": {
    "alternative": [],
    "type": "operator",
    "priority": 25,
    "rule": {
      "2,3": "#1 \\cdot #3"
    },
    "speech": {
      "2,3": "#1 dot #3"
    },
    "ruleML": {
      "2,3": "<mrow>#1<mo intent=\"dot-product\">&#x22C5;</mo>#3</mrow>"
    }
  },
//  "prod": {   // conflict with \prod_p L_p(s^{-s})
//    "alternative": [],
//    "type": "operator",
//    "priority": 25,
//    "rule": {
//      "2,3": "#1 \\times #3"
//    },
//    "speech": {
//      "2,3": "product of #1 and #3"
//    },
//    "ruleML": {
//      "2,3": "<mrow>#1<mo intent=\"direct-product\">×</mo>#3</mrow>"
//    }
//  },
  "times": {
    "alternative": ["×"],
    "type": "operator",
    "priority": 25,
    "rule": {
      "2,3": "#1 \\times #3"
    },
    "speech": {
      "2,3": "#1 times #3"
    },
    "ruleML": {
      "2,3": "<mrow>#1<mo>×</mo>#3</mrow>"
    }
  },
  "by": {
    "alternative": [ ],
    "type": "operator",
    "priority": 25,
    "rule": {
      "2,3": "#1 \\times #3"
    },
    "speech": {
      "2,3": "#1 by #3"
    },
    "ruleML": {
      "2,3": "<mrow>#1<mo intent=\"by\">×</mo>#3</mrow>"
    }
  },
  "cross": {
    "alternative": [ ],
    "type": "operator",
    "priority": 20,
    "rule": {
      "2,3": "#1 \\times #3"
    },
    "speech": {
      "2,3": " #1 cross #3 "
    },
    "ruleML": {
      "2,3": "<mrow>#1</mrow><mo intent=\"cross-product\">×</mo><mrow>#3</mrow>"
    }
  },
  "oointerval": {
    "alternative": [ ],
    "type": "operator",
    "delimitedarguments": true,   // omit the temporary () around the input arguments
    "priority": 20,  // experiment, so we get mrows for complicated arguments
    "rule": {
      "2,3": "(#1, #3)"
    },
    "speech": {
      "2,3": " open interval from #1 to #3 endinterval "
    },
    "ruleML": {
      "2,3": "<mrow intent=\"open-interval($x, $y)\"><mo>(</mo><wrap arg=\"x\">#1</wrap><mo>,</mo><wrap arg=\"y\">#3</wrap><mo>)</mo></mrow>"
    }
  },  
  "gcd": {
    "alternative": [ ],
    "type": "operator",
    "delimitedarguments": true,   // omit the temporary () around the input arguments
    "priority": 20,  // experiment, so we get mrows for complicated arguments
    "rule": {
      "2,3": "(#1, #3)"
    },
    "speech": {
      "2,3": " gcd of #1 comma #3 endgcd "
    },  
    "ruleML": {
      "2,3": "<mrow intent=\"gcd($x, $y)\"><mo>(</mo><wrap arg=\"x\">#1</wrap><mo>,</mo><wrap arg=\"y\">#3</wrap><mo>)</mo></mrow>"
    }
  },  
  "cartesianpoint": {
    "alternative": [ ],
    "type": "operator",
    "delimitedarguments": true,   // omit the temporary () around the input arguments
    "priority": 20,
    "rule": {
      "2,3": "(#1, #3)"
    },
    "speech": {
      "2,3": " point with coordinates #1 comma #3 endpoint "
    },
    "ruleML": {
      "2,3": "<mrow intent=\"coordinate($x, $y)\"><mo>(</mo><wrap arg=\"x\">#1</wrap><mo>,</mo><wrap arg=\"y\">#3</wrap><mo>)</mo></mrow>"
    }
  },
  "innerproduct": {
    "alternative": [ ],
    "type": "operator",
    "delimitedarguments": true,   // omit the temporary () around the input arguments
    "priority": 20,
    "rule": {
      "2,3": "\\langle #1, #3\\rangle "
    },
    "speech": {
      "2,3": " inner product of #1 and #3 endinnerproduct "
    },
    "ruleML": {
      "2,3": "<mrow intent=\"inner-product($x, $y)\"><mo>⟨</mo><wrap arg=\"x\">#1</wrap><mo>,</mo><wrap arg=\"y\">#3</wrap><mo>⟩</mo></mrow>"
    }
  }, 
  "twovector": {
    "alternative": [ ],
    "type": "operator",
    "delimitedarguments": true,   // omit the temporary () around the input arguments
    "priority": 20,
    "rule": {
      "2,3": "\\langle #1, #3\\rangle "
    },
    "speech": {
      "2,3": " vector #1 comma #3 endvector "
    },
    "ruleML": {
      "2,3": "<mrow intent=\"vector($x, $y)\"><mo>⟨</mo><wrap arg=\"x\">#1</wrap><mo>,</mo><wrap arg=\"y\">#3</wrap><mo>⟩</mo></mrow>"
    }
  },
  "grouppresentation": {
    "alternative": [ ],
    "type": "operator",
    "delimitedarguments": true,   // omit the temporary () around the input arguments
    "priority": 20,
    "rule": {
      "2,3": "\\langle #1\\ |\\  #3\\rangle "
    },  
    "speech": {
      "2,3": " group generated by #1 with relations #3 endrelations "
    },
    "ruleML": {
      "2,3": "<mrow intent=\"group-presentation($x, $y)\"><mo>⟨</mo><wrap arg=\"x\">#1</wrap><mo stretchy=\"true\">|</mo><wrap arg=\"y\">#3</wrap><mo>⟩</mo></mrow>"
    }
  },
 "setbuilder": {
    "alternative": [ ],
    "type": "operator",
    "delimitedarguments": true,   // omit the temporary () around the input arguments
    "priority": 20,
    "rule": {
      "2,3": "\\{ #1\\ |\\  #3\\} "
    },  
    "speech": {
      "2,3": " set of #1 such that #3 endset "
    },
    "ruleML": {
      "2,3": "<mrow intent=\"set-such-that($x, $y)\"><mo>{</mo><wrap arg=\"x\">#1</wrap><mo>|</mo><wrap arg=\"y\">#3</wrap><mo>}</mo></mrow>"
    }
  }, 
  "braket": {
    "alternative": [ ],
    "type": "operator",
    "delimitedarguments": true,   // omit the temporary () around the input arguments
    "priority": 20,
    "rule": {
      "2,3": "\\langle #1 |  #3\\rangle "
    },
    "speech": {
      "2,3": " bra-ket of #1 and #3 endbra-ket "
    },
    "ruleML": {
      "2,3": "<mrow intent=\"bra-ket($x, $y)\"><mo>⟨</mo><wrap arg=\"x\">#1</wrap><mo>|</mo><wrap arg=\"y\">#3</wrap><mo>⟩</mo></mrow>"
    }
  },
  "isom": {
    "alternative": [
      "isomorphic"
    ],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\cong #3"
    },
    "speech": {
      "2,3": " #1 isomorphic to #3  "
    },
    "ruleML": {
      "2,3": "#1<mo>≅</mo>#3"
    }
  },
  "to": {
    "alternative": [],
    "type": "operator",
    "priority": 20,
    "rule": {
      "2,3": "#1 \\to #3"
    },
    "speech": {
      "2,3": " #1 to #3  "
    },
    "ruleML": {
      "2,3": "#1<mo>→</mo>#3"
    }
  },
  "mapsto": {
    "alternative": [],
    "type": "operator",
    "priority": 20,
    "rule": {
      "2,3": "#1 \\mapsto #3"
    },
    "speech": {
      "2,3": " #1 maps to #3  "
    },
    "ruleML": {
      "2,3": "#1<mo>↦</mo>#3"
    }
  },
  "cong": {
    "alternative": [ "congruent" ],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\equiv #3"
    },
    "speech": {
      "2,3": " #1 congruent to #3  "
    },
    "ruleML": {
      "2,3": "#1<mo intent=\"congruent\">≡</mo>#3"
    }
  },
  "equiv": {
    "alternative": [
      "equivalent", "identical"
    ],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\equiv #3"
    },
    "speech": {
      "2,3": " #1 identical to #3  "
    },
    "ruleML": {
      "2,3": "#1<mo intent=\"identical\">≡</mo>#3"
    }
  },
  "cases:": {
    "alternative": [],
    "type": "multiline",
    "lineBreak": true,
    "params": [
      "caseEnvironment"
    ],
    "note": "cases"
  },
  "system:": {
    "alternative": [],
    "type": "multiline",
    "params": [
      "&beforeFirstRelation"
    ],
    "seperateOut": true,
    "absorbEmptyLine": true,
    "emptyLineBeforeIndent": true,
    "note": "align*"
  },
  "linearsystem:": {
    "alternative": [],
    "type": "multiline",
    "seperateOut": true,
    "absorbEmptyLine": true,
    "emptyLineBeforeIndent": true,
    "noBeginEnd": true,
    "changeLineTurn": ",",
    "note": "\\systeme"
  },
  "ge": {
    "alternative": [
      ">="
    ],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\ge #3"
    }
  },
  "le": {
    "alternative": [
      "<="
    ],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\le #3"
    }
  },
  "hat": {
    "alternative": [],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "\\hat{#2}"
    }
  },
  "overline": {
    "alternative": [
      "conj",
      "conjugate"
    ],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "\\overline{#2}"
    }
  },
  "underline": {
    "alternative": [],
    "type": "function",
    "priority": 55,
    "offpair": {
      "1,2": [
        2
      ]
    },
    "rule": {
      "1,2": "\\underline{#2}"
    }
  },
  "if": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "#&\\text{if }"
    }
  },
  "otherwise": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "#&\\text{otherwise}"
    }
  },
  "when": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "#&\\text{when }"
    }
  },
  "!": {
    "alternative": [],
    "type": "postfix",
    "priority": -1,
    "rule": {
      "1,1": "!"
    },
    "speech": {
      "1,1": " factorial "
    },
    "ruleML": {
      "1,1": "<mo>!</mo>"
    }
  }
}

var integrals = {
    "oint": "∮",
    "iiint": "∭",
    "iint": "∬",
    "int": "∫",
    "oiiint": "∰",
    "oiint": "∯",
    "oint": "∮"
}

var symbolswithlimits = {
    "sum": "∑",
    "union": "⋃",
    "intersection": "⋂",
    "oplus": "⨁",
    "otimes": "⨂",
    "coprod": "∐",
    "prod": "∏"
}

// need to generate this automatically from: integrals, symbolswithlimits, ???

var operatorsymbols = [ "∑","⋃","⋂","⨁","⨂","∐","∏","∮","∭","∬","∫","∰","∯","∮"];
