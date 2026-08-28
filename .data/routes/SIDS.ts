type TSids = {
	[airportCode: string]: {
		[runway: string]: {
			[sidNamw: string]: string[]
		}
	}
}

export const SIDS: TSids = {
	"MDPC": {
		"09": {
			"KATOK2T": [
				"MAROG", "KATOK"
			],
			"CHUMA2T": [
				"MAROG", "PC114", "CHUMA"
			],
			"PIXAR2T": [
				"MAROG", "PC114", "PIXAR"
			],
			"ETBOD2T": [
				"MAROG", "PC103", "PC106", "MIBNI", "PC200", "ETBOD"
			]
		},
		"27": {
			"KATOK3T": [
				"PC199", "PC201", "PC114", "KATOK"
			],
			"CHUMA3T": [
				"PC199", "PC201", "PC114", "CHUMA"
			],
			"PIXAR3T": [
				"PC199", "PC201", "PC202", "PIXAR"
			],
			"ETBOD3T": [
				"PC199", "PC201", "PC202", "PIXAR"
			]
		},
		"08": {
			"KATOK2T": [
				"MAROG", "KATOK"
			],
			"CHUMA2T": [
				"MAROG", "PC114", "CHUMA"
			],
			"PIXAR2T": [
				"MAROG", "PC114", "PIXAR"
			],
			"ETBOD2T": [
				"MAROG", "PC103", "PC106", "MIBNI", "PC200", "ETBOD"
			]
		},
		"26": {
			"KATOK3T": [
				"PC199", "PC201", "PC114", "KATOK"
			],
			"CHUMA3T": [
				"PC199", "PC201", "PC114", "CHUMA"
			],
			"PIXAR3T": [
				"PC199", "PC201", "PC202", "PIXAR"
			],
			"ETBOD3T": [
				"PC199", "PC201", "PC202", "PIXAR"
			]
		}
	},

	"MDST": {
		"11": {
			"Vectors": []
		},
		"29": {
			"Vectors": []
		}
	},

	"MDAB": {
		"11": {
			"Vectors": []
		},
		"29": {
			"Vectors": []
		}
	},

	"MTCA": {
		"08": {
			"Vectors": []
		},
		"26": {
			"Vectors": []
		}
	},

	"MDCR": {
		"12": {
			"Vectors": []
		},
		"30": {
			"Vectors": []
		}
	},

	"EGKK": {
		"08L": {
			"Vectors": []
		},
		"08R": {
			"Vectors": []
		},
		"26L": {
			"BOGNA1X": [
				"KKW06", "KKW08", "KKS11", "KKS20", "KKS25", "BOGNA"
			],
			"NOVMA1X": [
				"KKW07", "KKW09", "NOVMA"
			],
			"WIZAD1X": [
				"KKW04", "KKW06", "KKS09", "KKS14", "KKS33", "WIZAD"
			]
		}
	},

	"GCLP": {
		"03L": {
			"KOPUD1A": [
				"ECKOS", "KOPUD"
			],
			"KOPUD1B": [
				"LP101", "TUPIK", "KOPUD"
			],
			"COSTI4A": [
				"ECKOS", "COSTI"
			],
			"COSTI4B": [
				"LP101", "COSTI"
			],
			"ODEGI2A": [
				"ECKOS", "LP102", "LP103", "ODEGI"
			],
			"ODEGI2B": [
				"DRANO", "ODEGI"
			]
		},
		"03R": {
			"KOPUD1A": [
				"ECKOS", "KOPUD"
			],
			"KOPUD1B": [
				"LP101", "TUPIK", "KOPUD"
			],
			"COSTI4A": [
				"ECKOS", "COSTI"
			],
			"COSTI4B": [
				"LP101", "COSTI"
			],
			"ODEGI2A": [
				"ECKOS", "LP102", "LP103", "ODEGI"
			],
			"ODEGI2B": [
				"DRANO", "ODEGI"
			]
		},
		"21L": {
			"KOPUD1A": [
				"ECKOS", "KOPUD"
			],
			"KOPUD1B": [
				"LP101", "TUPIK", "KOPUD"
			],
			"COSTI4A": [
				"ECKOS", "COSTI"
			],
			"COSTI4B": [
				"LP101", "COSTI"
			],
			"ODEGI2A": [
				"ECKOS", "LP102", "LP103", "ODEGI"
			],
			"ODEGI2B": [
				"DRANO", "ODEGI"
			]
		},
		"21R": {
			"KOPUD1A": [
				"ECKOS", "KOPUD"
			],
			"KOPUD1B": [
				"LP101", "TUPIK", "KOPUD"
			],
			"COSTI4A": [
				"ECKOS", "COSTI"
			],
			"COSTI4B": [
				"LP101", "COSTI"
			],
			"ODEGI2A": [
				"ECKOS", "LP102", "LP103", "ODEGI"
			],
			"ODEGI2B": [
				"DRANO", "ODEGI"
			]
		}
	},

	"LEMH": {
		"01": {
			"SARGO2B": [
				"SARGO"
			],
			"MEROS3C": [
				"MEROS"
			]
		},
		"19": {
			"Vectors": []
		}
	},

	"EFKT": {
		"16": {
			"Vectors": []
		},
		"34": {
			"SPECA1A": [
				"KITTL", "HTML"
			],
			"KEFT2D": [
				"KRDSH", "KEDF"
			],
			"ROSE3C": [
				"DELTA", "ROSE"
			]
		}
	},

	"EGHI": {
		"02": {
			"Vectors": []
		},
		"20": {
			"Vectors": []
		}
  },

  "EGLC": {
		"09": {
			"BPK1H": [
				"LCE01", "LCN03", "BPK"
      ],
			"ODUKU1H": [
				"LCE01", "LCE02", "ODUKU"
			]
    },
		"27": {
			"BPK1A": [
				"LCW01", "LCN01", "LCN04", "LCN05", "BPK"
      ],
      "ODUKU1A": [
				"LCW01", "LCN02", "LCE04", "ODUKU"
			]
		}
	},

	"LCLK": {
		"04": {
			"BONEK2W": [
				"LK400", "OTESA", "ADLAS", "DAROS", "BONEK"
			],
			"NORDI1W": [
				"LK400", "OTESA", "ADLAS", "NORDI"
			],
			"RUDER1W": [
				"LK400", "SOBOS", "RUDER"
			],
			"EMEDA1W": [
				"LK400", "REXAL", "EMEDA"
			]
		},
		"22": {
			"LUBES1W": [
				"LK601", "RIMEX", "PEEKO", "NORDI", "LUBES"
			],
			"KURSA1W": [
				"LK601", "RIMEX", "GIPRO", "KURSA"
			],
			"RUDER1D": [
				"LK601", "BOSIS", "KOBER", "RUDER"
			],
			"EMEDA1D": [
				"LK601", "BOSIS", "EMEDA"
			]
		}
	},

	"LCPH": {
		"11": {
			"Vectors": []
		},
		"29": {
			"Vectors": []
		}
	},

	"LCRA": {
		"10": {
			"Vectors": []
		},
		"28": {
			"Vectors": []
		}
	}
};

const uniqueSidNames = new Set<string>();

for (const airportCode in SIDS) {
	if (Object.prototype.hasOwnProperty.call(SIDS, airportCode)) {
		const airportSids = SIDS[airportCode];

		for (const runway in airportSids) {
			if (Object.prototype.hasOwnProperty.call(airportSids, runway)) {
				const runwaySids = airportSids[runway];

				for (const sidName in runwaySids) {
					if (Object.prototype.hasOwnProperty.call(runwaySids, sidName)) {
						uniqueSidNames.add(sidName);
					}
				}
			}
		}
	}
}

export const SIDNAMES: string[] = Array.from(uniqueSidNames);
