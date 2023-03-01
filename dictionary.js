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
      "1,2": " quantityN negative #2 Nquantity "
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
      "divides",
      "divide",
      "³ý",
      "³ýÒÔ"
    ],
    "type": "operator",
    "priority": 20,
    "rule": {
      "2,3": "\\frac{#1}{#3}"
    },
    "offpair": {
      "2,3": [
        1,
        3
      ]
    },
    "ruleML": {
      "2,3": "<mfrac><mrow>#1</mrow><mrow>#3</mrow></mfrac>"
    },
    "speech": {
      "2,3": "fraction #1 denominator #3 enddenominator"
    } 
  },
  "//": {
    "alternative": [
      "over"
    ],
    "type": "operator",
    "priority": 20,
    "rule": {
      "2,3": "#1 / #3"
    },
    "offpair": {
      "2,3": [
        1,
        3
      ]
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
      "to",
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
      "from",
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
    }
  },
  "\n": {
    "alternative": [
      ""
    ],
    "type": "relation",
    "priority": -10,
    "rule": {
      "2,3": "#1 \n #3"
    }
  },
  ",": {
    "alternative": [
      ""
    ],
    "type": "operator",
    "priority": -10,
    "rule": {
      "2,3": "#1,#3"
    }
  },
  ";": {
    "alternative": [
      ""
    ],
    "type": "operator",
    "priority": -10,
    "rule": {
      "2,3": "#1;#3"
    }
  },
  "|": {
    "alternative": [
      ""
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
      "1,1": "\\beta"
    }
  },
  "gamma": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\gamma"
    }
  },
  "Gamma": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\Gamma"
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
      "1,1": "\\pi"
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
  "inf": {
    "comment": [
      "ÎÞÇî´ó"
    ],
    "alternative": [
      "infty",
      "infinity",
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
    }
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
    }
  },
  "NN": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\mathbb{N}"
    }
  },
  "QQ": {
    "alternative": [],
    "type": "symbol",
    "priority": -1,
    "rule": {
      "1,1": "\\mathbb{Q}"
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
      "1,2": " square root of quantity #2 endquantity "
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
      "1,2": "cardinality of #2"
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
      "1,2": "absolute value of quantityB #2 Bendquantity"
    },
    "ruleML": {
      "1,2": "<mrow intent=\"absolute-value($x)\"><mo>|</mo><mrow arg=\"x\">#2</mrow><mo>|</mo></mrow>"
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
      "1,2": "determinant of #2"
    },
    "ruleML": {
      "1,2": "<mrow intent=\"determinant($x)\"><mo>|</mo><wrap arg=\"x\">#2</wrap><mo>|</mo></mrow>"
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
      "cos"
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
      "1,3": [
        2,
        3
      ]
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
      "1,3": "\\int #2 \\,d#3",
      "1,2": "\\int #2"
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
    }
  },
  "cap": {
    "alternative": [
      "intersect"
    ],
    "type": "operator",
    "priority": 10,
    "rule": {
      "2,3": "#1 \\cap #3"
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
    }
  },
  "neq": {
    "alternative": ["!="],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\not= #3"
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
  "prod": {
    "alternative": [],
    "type": "operator",
    "priority": 25,
    "rule": {
      "2,3": "#1 \\times #3"
    },
    "speech": {
      "2,3": "product of #1 and #3"
    },
    "ruleML": {
      "2,3": "<mrow>#1<mo intent=\"direct-product\">×</mo>#3</mrow>"
    }
  },
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
    "priority": 25,
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
  "isom": {
    "alternative": [
      "isomorphic"
    ],
    "type": "relation",
    "priority": 0,
    "rule": {
      "2,3": "#1 \\simeq #3"
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
  }
}
