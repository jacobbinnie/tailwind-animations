/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
    },
    extend: {
      animation: {
        // CLASSICS
        wobble: "wobble 1s infinite",
        melt: "melt 1s infinite",
        float: "float 1s infinite",
        breathe: "breathe 1s infinite",
        squiggle: "squiggle 1s infinite",
        "flip-and-spin": "flip-and-spin 2s infinite",
        twist: "twist 2s infinite",
        pop: "pop 1s infinite",
        scatter: "scatter 1s",

        // GRADIENTS
        "rainbow-river": "rainbow-river 5s ease infinite",
        "green-swoosh": "green-swoosh 2s ease infinite",
        "serene-sunset": "serene-sunset 2s ease infinite",
        "black-swoosh": "black-swoosh 2s ease infinite",
        "tranquil-waters": "tranquil-waters 5s ease infinite",
        "mellow-embers": "mellow-embers 2s ease infinite",
        "vertical-bliss": "vertical-bliss 2s ease infinite",
        "vertical-raindance": "vertical-raindance 2s ease infinite",
        "vertical-azure-wave": "vertical-azure-wave 2s ease infinite",
        "vertical-sunset-tide": "vertical-sunset-tide 2s ease infinite",
        "vertical-golden-dream": "vertical-golden-dream 2s ease infinite",
        "diagonal-blaze": "diagonal-blaze 2s ease infinite",
        "diagonal-ocean-wave": "diagonal-ocean-wave 2s ease infinite",
        "diagonal-purple-dream": "diagonal-purple-dream 2s ease infinite",
        "diagonal-galaxy": "diagonal-galaxy 2s ease infinite",
        "diagonal-rotating-sun": "diagonal-rotating-sun 2s ease infinite",
        "blurred-swoosh": "blurred-swoosh 2s ease infinite",
        "fuzzy-dream": "fuzzy-dream 2s ease infinite",
        "misty-fade": "misty-fade 2s ease infinite",
        "hazy-twist": "hazy-twist 2s ease infinite",
        "mystic-aura": "mystic-aura 2s ease infinite",
        "sunset-spin": "sunset-spin 2s ease infinite",
        "vibrant-sun": "vibrant-sun 2s ease infinite",
        "shifting-triangles": "shifting-triangles 2s ease infinite",

        // MOVEMENTS
        "morphing-rectangle": "morphing-rectangle 2s ease infinite",

        // BACKDROP SPACES
        "blue-galaxy": "blue-galaxy 10s ease infinite",
        "gray-fluff": "gray-fluff 5s ease infinite",
        "earth-light": "earth-light 5s ease infinite",
        "pastel-dream": "pastel-dream 5s ease infinite",
        "vibrant-splash": "vibrant-splash 5s ease infinite",
        "golden-horizon": "golden-horizon 5s ease infinite",
        "rose-blush": "rose-blush 10s ease infinite",
        "lavender-dream": "lavender-dream 5s ease infinite",
        "twilight-mist": "twilight-mist 10s ease infinite",
        "orbiting-nebula": "orbiting-nebula 10s ease infinite",
        "violet-dusk": "violet-dusk 10s ease infinite",
        "starlight-cosmos": "starlight-cosmos 10s ease infinite",
        "amethyst-midnight": "amethyst-midnight 10s ease infinite",
      },
      keyframes: {
        // GRADIENTS
        "rainbow-river": {
          "0%": {
            "background-size": "600% 100%",
            "background-position": "left center",
            "background-image":
              "linear-gradient(to right, rgba(128, 0, 0, 0.8), rgba(255, 165, 0, 0.8), rgba(255, 255, 0, 0.8), rgba(0, 128, 0, 0.8), rgba(0, 0, 255, 0.8), rgba(75, 0, 130, 0.8), rgba(238, 130, 238, 0.8))",
          },
          "50%": {
            "background-size": "600% 100%",
            "background-position": "right center",
            "background-image":
              "linear-gradient(to right, rgba(128, 0, 0, 0.8), rgba(255, 165, 0, 0.8), rgba(255, 255, 0, 0.8), rgba(0, 128, 0, 0.8), rgba(0, 0, 255, 0.8), rgba(75, 0, 130, 0.8), rgba(238, 130, 238, 0.8))",
          },
          "100%": {
            "background-size": "600% 100%",
            "background-position": "left center",
            "background-image":
              "linear-gradient(to right, rgba(128, 0, 0, 0.8), rgba(255, 165, 0, 0.8), rgba(255, 255, 0, 0.8), rgba(0, 128, 0, 0.8), rgba(0, 0, 255, 0.8), rgba(75, 0, 130, 0.8), rgba(238, 130, 238, 0.8))",
          },
        },

        "green-swoosh": {
          "0%": {
            "background-size": "600% 100%",
            "background-position": "left center",
            "background-image":
              "linear-gradient(to right, rgba(0, 128, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 128, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 128, 0, 0.8))",
          },
          "50%": {
            "background-size": "600% 100%",
            "background-position": "right center",
            "background-image":
              "linear-gradient(to right, rgba(0, 128, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 128, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 128, 0, 0.8))",
          },
          "100%": {
            "background-size": "600% 100%",
            "background-position": "left center",
            "background-image":
              "linear-gradient(to right, rgba(0, 128, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 128, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 128, 0, 0.8))",
          },
        },

        "serene-sunset": {
          "0%": {
            "background-size": "600% 100%",
            "background-position": "left center",
            "background-image":
              "linear-gradient(to right, rgba(255, 111, 97, 0.8), rgba(255, 156, 131, 0.8), rgba(255, 200, 164, 0.8))",
          },
          "50%": {
            "background-size": "600% 100%",
            "background-position": "right center",
            "background-image":
              "linear-gradient(to right, rgba(255, 200, 164, 0.8), rgba(255, 156, 131, 0.8), rgba(255, 111, 97, 0.8))",
          },
          "100%": {
            "background-size": "600% 100%",
            "background-position": "left center",
            "background-image":
              "linear-gradient(to right, rgba(255, 111, 97, 0.8), rgba(255, 156, 131, 0.8), rgba(255, 200, 164, 0.8))",
          },
        },

        "black-swoosh": {
          "0%": {
            "background-size": "600% 100%",
            "background-position": "left center",
            "background-image":
              "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(64, 64, 64, 0.8), rgba(128, 128, 128, 0.8), rgba(0, 0, 0, 0.8), rgba(64, 64, 64, 0.8), rgba(128, 128, 128, 0.8), rgba(0, 0, 0, 0.8))",
          },
          "50%": {
            "background-size": "600% 100%",
            "background-position": "right center",
            "background-image":
              "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(64, 64, 64, 0.8), rgba(128, 128, 128, 0.8), rgba(0, 0, 0, 0.8), rgba(64, 64, 64, 0.8), rgba(128, 128, 128, 0.8), rgba(0, 0, 0, 0.8))",
          },
          "100%": {
            "background-size": "600% 100%",
            "background-position": "left center",
            "background-image":
              "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(64, 64, 64, 0.8), rgba(128, 128, 128, 0.8), rgba(0, 0, 0, 0.8), rgba(64, 64, 64, 0.8), rgba(128, 128, 128, 0.8), rgba(0, 0, 0, 0.8))",
          },
        },

        "tranquil-waters": {
          "0%": {
            "background-size": "500% 90%",
            "background-position": "left center",
            "background-image":
              "linear-gradient(to right, rgba(97, 174, 255, 0.8), rgba(131, 192, 255, 0.8), rgba(164, 209, 255, 0.8))",
          },
          "50%": {
            "background-size": "500% 90%",
            "background-position": "right center",
            "background-image":
              "linear-gradient(to right, rgba(164, 209, 255, 0.8), rgba(131, 192, 255, 0.8), rgba(97, 174, 255, 0.8))",
          },
          "100%": {
            "background-size": "500% 90%",
            "background-position": "left center",
            "background-image":
              "linear-gradient(to right, rgba(97, 174, 255, 0.8), rgba(131, 192, 255, 0.8), rgba(164, 209, 255, 0.8))",
          },
        },

        "mellow-embers": {
          "0%": {
            "background-size": "700% 110%",
            "background-position": "left center",
            "background-image":
              "linear-gradient(to right, rgba(226, 97, 97, 0.8), rgba(239, 131, 131, 0.8), rgba(252, 164, 164, 0.8))",
          },
          "50%": {
            "background-size": "700% 110%",
            "background-position": "right center",
            "background-image":
              "linear-gradient(to right, rgba(252, 164, 164, 0.8), rgba(239, 131, 131, 0.8), rgba(226, 97, 97, 0.8))",
          },
          "100%": {
            "background-size": "700% 110%",
            "background-position": "left center",
            "background-image":
              "linear-gradient(to right, rgba(226, 97, 97, 0.8), rgba(239, 131, 131, 0.8), rgba(252, 164, 164, 0.8))",
          },
        },

        "vertical-bliss": {
          "0%": {
            "background-size": "100% 600%",
            "background-position": "center top",
            "background-image":
              "linear-gradient(to bottom, rgba(128, 0, 0, 0.8), rgba(255, 165, 0, 0.8), rgba(255, 255, 0, 0.8))",
          },
          "50%": {
            "background-size": "100% 600%",
            "background-position": "center bottom",
            "background-image":
              "linear-gradient(to bottom, rgba(255, 255, 0, 0.8), rgba(255, 165, 0, 0.8), rgba(128, 0, 0, 0.8))",
          },
          "100%": {
            "background-size": "100% 600%",
            "background-position": "center top",
            "background-image":
              "linear-gradient(to bottom, rgba(128, 0, 0, 0.8), rgba(255, 165, 0, 0.8), rgba(255, 255, 0, 0.8))",
          },
        },

        "vertical-raindance": {
          "0%": {
            "background-size": "100% 800%",
            "background-position": "center top",
            "background-image":
              "linear-gradient(to bottom, rgba(0, 128, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 255, 0, 0.8))",
          },
          "50%": {
            "background-size": "100% 800%",
            "background-position": "center bottom",
            "background-image":
              "linear-gradient(to bottom, rgba(0, 255, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 128, 0, 0.8))",
          },
          "100%": {
            "background-size": "100% 800%",
            "background-position": "center top",
            "background-image":
              "linear-gradient(to bottom, rgba(0, 128, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 255, 0, 0.8))",
          },
        },

        "vertical-azure-wave": {
          "0%": {
            "background-size": "100% 500%",
            "background-position": "center top",
            "background-image":
              "linear-gradient(to bottom, rgba(97, 174, 255, 0.8), rgba(131, 192, 255, 0.8), rgba(164, 209, 255, 0.8))",
          },
          "50%": {
            "background-size": "100% 500%",
            "background-position": "center bottom",
            "background-image":
              "linear-gradient(to bottom, rgba(164, 209, 255, 0.8), rgba(131, 192, 255, 0.8), rgba(97, 174, 255, 0.8))",
          },
          "100%": {
            "background-size": "100% 500%",
            "background-position": "center top",
            "background-image":
              "linear-gradient(to bottom, rgba(97, 174, 255, 0.8), rgba(131, 192, 255, 0.8), rgba(164, 209, 255, 0.8))",
          },
        },

        "vertical-sunset-tide": {
          "0%": {
            "background-size": "100% 700%",
            "background-position": "center top",
            "background-image":
              "linear-gradient(to bottom, rgba(255, 99, 71, 0.8), rgba(255, 140, 71, 0.8), rgba(255, 165, 71, 0.8))",
          },
          "50%": {
            "background-size": "100% 700%",
            "background-position": "center bottom",
            "background-image":
              "linear-gradient(to bottom, rgba(255, 165, 71, 0.8), rgba(255, 140, 71, 0.8), rgba(255, 99, 71, 0.8))",
          },
          "100%": {
            "background-size": "100% 700%",
            "background-position": "center top",
            "background-image":
              "linear-gradient(to bottom, rgba(255, 99, 71, 0.8), rgba(255, 140, 71, 0.8), rgba(255, 165, 71, 0.8))",
          },
        },

        "vertical-golden-dream": {
          "0%": {
            "background-size": "100% 600%",
            "background-position": "center top",
            "background-image":
              "linear-gradient(to bottom, rgba(218, 165, 32, 0.8), rgba(224, 186, 94, 0.8), rgba(232, 207, 157, 0.8))",
          },
          "50%": {
            "background-size": "100% 600%",
            "background-position": "center bottom",
            "background-image":
              "linear-gradient(to bottom, rgba(232, 207, 157, 0.8), rgba(224, 186, 94, 0.8), rgba(218, 165, 32, 0.8))",
          },
          "100%": {
            "background-size": "100% 600%",
            "background-position": "center top",
            "background-image":
              "linear-gradient(to bottom, rgba(218, 165, 32, 0.8), rgba(224, 186, 94, 0.8), rgba(232, 207, 157, 0.8))",
          },
        },

        "diagonal-blaze": {
          "0%": {
            "background-size": "200% 200%",
            "background-position": "top left",
            "background-image":
              "linear-gradient(to bottom right, rgba(255, 0, 0, 0.8), rgba(255, 165, 0, 0.8))",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "bottom right",
            "background-image":
              "linear-gradient(to bottom right, rgba(255, 165, 0, 0.8), rgba(255, 0, 0, 0.8))",
          },
          "100%": {
            "background-size": "200% 200%",
            "background-position": "top left",
            "background-image":
              "linear-gradient(to bottom right, rgba(255, 0, 0, 0.8), rgba(255, 165, 0, 0.8))",
          },
        },

        "diagonal-ocean-wave": {
          "0%": {
            "background-size": "200% 200%",
            "background-position": "top left",
            "background-image":
              "linear-gradient(to bottom right, rgba(0, 128, 128, 0.8), rgba(32, 178, 170, 0.8))",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "bottom right",
            "background-image":
              "linear-gradient(to bottom right, rgba(32, 178, 170, 0.8), rgba(0, 128, 128, 0.8))",
          },
          "100%": {
            "background-size": "200% 200%",
            "background-position": "top left",
            "background-image":
              "linear-gradient(to bottom right, rgba(0, 128, 128, 0.8), rgba(32, 178, 170, 0.8))",
          },
        },

        "diagonal-purple-dream": {
          "0%": {
            "background-size": "200% 200%",
            "background-position": "top left",
            "background-image":
              "linear-gradient(to bottom right, rgba(128, 0, 128, 0.8), rgba(218, 112, 214, 0.8))",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "bottom right",
            "background-image":
              "linear-gradient(to bottom right, rgba(218, 112, 214, 0.8), rgba(128, 0, 128, 0.8))",
          },
          "100%": {
            "background-size": "200% 200%",
            "background-position": "top left",
            "background-image":
              "linear-gradient(to bottom right, rgba(128, 0, 128, 0.8), rgba(218, 112, 214, 0.8))",
          },
        },

        "diagonal-galaxy": {
          "0%": {
            "background-size": "200% 200%",
            "background-position": "top left",
            "background-image":
              "linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(135, 206, 250, 0.8))",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "bottom right",
            "background-image":
              "linear-gradient(to bottom right, rgba(135, 206, 250, 0.8), rgba(0, 0, 0, 0.8))",
          },
          "100%": {
            "background-size": "200% 200%",
            "background-position": "top left",
            "background-image":
              "linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(135, 206, 250, 0.8))",
          },
        },

        "diagonal-rotating-sun": {
          "0%": {
            "background-size": "200% 200%",
            "background-position": "top left",
            "background-image":
              "linear-gradient(to bottom right, rgba(255, 255, 0, 0.8), rgba(255, 165, 0, 0.8))",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "bottom right",
            "background-image":
              "linear-gradient(to bottom right, rgba(255, 165, 0, 0.8), rgba(255, 255, 0, 0.8))",
          },
          "100%": {
            "background-size": "200% 200%",
            "background-position": "top left",
            "background-image":
              "linear-gradient(to bottom right, rgba(255, 255, 0, 0.8), rgba(255, 165, 0, 0.8))",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },

        "blurred-swoosh": {
          "0%": {
            "background-size": "600% 100%",
            "background-position": "left center",
            "background-image":
              "linear-gradient(to right, rgba(0, 128, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 128, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 128, 0, 0.8))",
            filter: "blur(0)",
          },
          "50%": {
            "background-size": "600% 100%",
            "background-position": "right center",
            "background-image":
              "linear-gradient(to right, rgba(0, 128, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 128, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 128, 0, 0.8))",
            filter: "blur(5px)",
          },
          "100%": {
            "background-size": "600% 100%",
            "background-position": "left center",
            "background-image":
              "linear-gradient(to right, rgba(0, 128, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 128, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 128, 0, 0.8))",
            filter: "blur(0)",
          },
        },

        "fuzzy-dream": {
          "0%": {
            "background-size": "600% 100%",
            "background-position": "left center",
            "background-image":
              "linear-gradient(to right, rgba(255, 0, 0, 0.8), rgba(255, 255, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 0, 255, 0.8), rgba(75, 0, 130, 0.8), rgba(238, 130, 238, 0.8))",
            filter: "blur(0)",
          },
          "50%": {
            "background-size": "600% 100%",
            "background-position": "right center",
            "background-image":
              "linear-gradient(to right, rgba(255, 0, 0, 0.8), rgba(255, 255, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 0, 255, 0.8), rgba(75, 0, 130, 0.8), rgba(238, 130, 238, 0.8))",
            filter: "blur(10px)",
          },
          "100%": {
            "background-size": "600% 100%",
            "background-position": "left center",
            "background-image":
              "linear-gradient(to right, rgba(255, 0, 0, 0.8), rgba(255, 255, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 0, 255, 0.8), rgba(75, 0, 130, 0.8), rgba(238, 130, 238, 0.8))",
            filter: "blur(0)",
          },
        },

        "misty-fade": {
          "0%": {
            "background-size": "600% 100%",
            "background-position": "left center",
            "background-image":
              "linear-gradient(to right, rgba(128, 128, 128, 0.8), rgba(192, 192, 192, 0.8), rgba(224, 224, 224, 0.8), rgba(128, 128, 128, 0.8), rgba(192, 192, 192, 0.8), rgba(224, 224, 224, 0.8), rgba(128, 128, 128, 0.8))",
            filter: "blur(0)",
          },
          "50%": {
            "background-size": "600% 100%",
            "background-position": "right center",
            "background-image":
              "linear-gradient(to right, rgba(128, 128, 128, 0.8), rgba(192, 192, 192, 0.8), rgba(224, 224, 224, 0.8), rgba(128, 128, 128, 0.8), rgba(192, 192, 192, 0.8), rgba(224, 224, 224, 0.8), rgba(128, 128, 128, 0.8))",
            filter: "blur(7px)",
          },
          "100%": {
            "background-size": "600% 100%",
            "background-position": "left center",
            "background-image":
              "linear-gradient(to right, rgba(128, 128, 128, 0.8), rgba(192, 192, 192, 0.8), rgba(224, 224, 224, 0.8), rgba(128, 128, 128, 0.8), rgba(192, 192, 192, 0.8), rgba(224, 224, 224, 0.8), rgba(128, 128, 128, 0.8))",
            filter: "blur(0)",
          },
        },

        "hazy-twist": {
          "0%": {
            "background-size": "600% 100%",
            "background-position": "left center",
            "background-image":
              "linear-gradient(to right, rgba(0, 0, 255, 0.8), rgba(75, 0, 130, 0.8), rgba(238, 130, 238, 0.8), rgba(0, 0, 255, 0.8), rgba(75, 0, 130, 0.8), rgba(238, 130, 238, 0.8), rgba(0, 0, 255, 0.8))",
            filter: "blur(0)",
          },
          "50%": {
            "background-size": "600% 100%",
            "background-position": "right center",
            "background-image":
              "linear-gradient(to right, rgba(0, 0, 255, 0.8), rgba(75, 0, 130, 0.8), rgba(238, 130, 238, 0.8), rgba(0, 0, 255, 0.8), rgba(75, 0, 130, 0.8), rgba(238, 130, 238, 0.8), rgba(0, 0, 255, 0.8))",
            filter: "blur(9px)",
          },
          "100%": {
            "background-size": "600% 100%",
            "background-position": "left center",
            "background-image":
              "linear-gradient(to right, rgba(0, 0, 255, 0.8), rgba(75, 0, 130, 0.8), rgba(238, 130, 238, 0.8), rgba(0, 0, 255, 0.8), rgba(75, 0, 130, 0.8), rgba(238, 130, 238, 0.8), rgba(0, 0, 255, 0.8))",
            filter: "blur(0)",
          },
        },
        "mystic-aura": {
          "0%": {
            "background-size": "600% 100%",
            "background-position": "left center",
            "background-image":
              "linear-gradient(to right, rgba(128, 0, 128, 0.8), rgba(255, 0, 255, 0.8), rgba(128, 0, 128, 0.8), rgba(255, 0, 255, 0.8), rgba(128, 0, 128, 0.8), rgba(255, 0, 255, 0.8), rgba(128, 0, 128, 0.8))",
            filter: "blur(0)",
          },
          "50%": {
            "background-size": "600% 100%",
            "background-position": "right center",
            "background-image":
              "linear-gradient(to right, rgba(128, 0, 128, 0.8), rgba(255, 0, 255, 0.8), rgba(128, 0, 128, 0.8), rgba(255, 0, 255, 0.8), rgba(128, 0, 128, 0.8), rgba(255, 0, 255, 0.8), rgba(128, 0, 128, 0.8))",
            filter: "blur(8px)",
          },
          "100%": {
            "background-size": "600% 100%",
            "background-position": "left center",
            "background-image":
              "linear-gradient(to right, rgba(128, 0, 128, 0.8), rgba(255, 0, 255, 0.8), rgba(128, 0, 128, 0.8), rgba(255, 0, 255, 0.8), rgba(128, 0, 128, 0.8), rgba(255, 0, 255, 0.8), rgba(128, 0, 128, 0.8))",
            filter: "blur(0)",
          },
        },
        "vibrant-sun": {
          "0%": {
            "background-image":
              "radial-gradient(circle at 50% 50%, #FF5252, #FFAB40)",
            "background-size": "100% 100%",
          },
          "50%": {
            "background-image":
              "radial-gradient(circle at 60% 40%, #FFAB40, #FF5252)",
            "background-size": "110% 110%",
          },
          "100%": {
            "background-image":
              "radial-gradient(circle at 50% 50%, #FF5252, #FFAB40)",
            "background-size": "100% 100%",
          },
        },
        "shifting-triangles": {
          "0%": {
            "background-image":
              "linear-gradient(60deg, rgba(255, 0, 0, 0.8) 25%, rgba(0, 255, 0, 0.8) 50%, rgba(0, 0, 255, 0.8) 75%)",
            "background-size": "200% 200%",
            "background-position": "top left",
          },
          "50%": {
            "background-image":
              "linear-gradient(60deg, rgba(0, 0, 255, 0.8) 25%, rgba(255, 0, 0, 0.8) 50%, rgba(0, 255, 0, 0.8) 75%)",
            "background-size": "200% 200%",
            "background-position": "bottom right",
          },
          "100%": {
            "background-image":
              "linear-gradient(60deg, rgba(255, 0, 0, 0.8) 25%, rgba(0, 255, 0, 0.8) 50%, rgba(0, 0, 255, 0.8) 75%)",
            "background-size": "200% 200%",
            "background-position": "top left",
          },
        },

        // MOVEMENTS
        "morphing-rectangle": {
          "0%": {
            "border-radius": "0%",
            transform: "scale(1)",
            backgroundColor: "black",
          },
          "50%": {
            "border-radius": "20%",
            transform: "scale(0.75)",
            backgroundColor: "gray",
          },
          "100%": {
            "border-radius": "0%",
            transform: "scale(1)",
            backgroundColor: "black",
          },
        },

        // BACKDROP SPACES
        "blue-galaxy": {
          "0%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #50009a 0, #001aff 100%), linear-gradient(100deg, #fb00a5 50%, #6900cb 100%), linear-gradient(200deg, #8dada4 0, #12de81 100%), linear-gradient(-3deg, #1dadfe 0, #50009a 50%)",
            backgroundSize: "100% 100%",
            backgroundPosition: "0% 100%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "20%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #50009a 0, #001aff 100%), linear-gradient(100deg, #fb00a5 50%, #6900cb 100%), linear-gradient(200deg, #8dada4 0, #12de81 100%), linear-gradient(-3deg, #1dadfe 0, #50009a 50%)",
            backgroundSize: "105% 105%",
            backgroundPosition: "10% 100%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "40%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #50009a 0, #001aff 100%), linear-gradient(100deg, #fb00a5 50%, #6900cb 100%), linear-gradient(200deg, #8dada4 0, #12de81 100%), linear-gradient(-3deg, #1dadfe 0, #50009a 50%)",
            backgroundSize: "110% 300%",
            backgroundPosition: "20% 80%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "60%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #50009a 0, #001aff 100%), linear-gradient(100deg, #fb00a5 50%, #6900cb 100%), linear-gradient(200deg, #8dada4 0, #12de81 100%), linear-gradient(-3deg, #1dadfe 0, #50009a 50%)",
            backgroundSize: "115% 115%",
            backgroundPosition: "30% 70%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "80%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #50009a 0, #001aff 100%), linear-gradient(100deg, #fb00a5 50%, #6900cb 100%), linear-gradient(200deg, #8dada4 0, #12de81 100%), linear-gradient(-3deg, #1dadfe 0, #50009a 50%)",
            backgroundSize: "250% 120%",
            backgroundPosition: "40% 60%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "100%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #50009a 0, #001aff 100%), linear-gradient(100deg, #fb00a5 50%, #6900cb 100%), linear-gradient(200deg, #8dada4 0, #12de81 100%), linear-gradient(-3deg, #1dadfe 0, #50009a 50%)",
            backgroundSize: "100% 100%",
            backgroundPosition: "0% 100%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
        },

        "gray-fluff": {
          "0%": {
            "background-size": "100% 100%",
            "background-position": "left top",
            "background-image":
              "linear-gradient(to bottom right, rgba(96, 96, 96, 0.8), rgba(0, 0, 0, 0.8))",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right bottom",
            "background-image":
              "linear-gradient(to bottom right, rgba(96, 96, 96, 0.8), rgba(0, 0, 0, 0.8))",
          },
          "100%": {
            "background-size": "100% 100%",
            "background-position": "left top",
            "background-image":
              "linear-gradient(to bottom right, rgba(96, 96, 96, 0.8), rgba(0, 0, 0, 0.8))",
          },
        },

        "earth-light": {
          "0%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #320656 0, #5f04a8 100%), linear-gradient(100deg, #9b00a4 50%, #ad00c6 100%), linear-gradient(200deg, #95a50c 0, #33da33 100%), linear-gradient(-3deg, #d928ff 0, #320656 50%)",
            backgroundSize: "100% 100%",
            backgroundPosition: "100% 150%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "20%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #320656 0, #5f04a8 100%), linear-gradient(100deg, #9b00a4 50%, #ad00c6 100%), linear-gradient(200deg, #95a50c 0, #33da33 100%), linear-gradient(-3deg, #d928ff 0, #320656 50%)",
            backgroundSize: "105% 105%",
            backgroundPosition: "100% 100%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "40%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #320656 0, #5f04a8 100%), linear-gradient(100deg, #9b00a4 50%, #ad00c6 100%), linear-gradient(200deg, #95a50c 0, #33da33 100%), linear-gradient(-3deg, #d928ff 0, #320656 50%)",
            backgroundSize: "110% 300%",
            backgroundPosition: "120% 80%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "60%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #320656 0, #5f04a8 100%), linear-gradient(100deg, #9b00a4 50%, #ad00c6 100%), linear-gradient(200deg, #95a50c 0, #33da33 100%), linear-gradient(-3deg, #d928ff 0, #320656 50%)",
            backgroundSize: "115% 115%",
            backgroundPosition: "30% 70%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "80%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #320656 0, #5f04a8 100%), linear-gradient(100deg, #9b00a4 50%, #ad00c6 100%), linear-gradient(200deg, #95a50c 0, #33da33 100%), linear-gradient(-3deg, #d928ff 0, #320656 50%)",
            backgroundSize: "250% 120%",
            backgroundPosition: "40% 60%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "100%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #320656 0, #5f04a8 100%), linear-gradient(100deg, #9b00a4 50%, #ad00c6 100%), linear-gradient(200deg, #95a50c 0, #33da33 100%), linear-gradient(-3deg, #d928ff 0, #320656 50%)",
            backgroundSize: "100% 100%",
            backgroundPosition: "0% 100%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
        },

        "pastel-dream": {
          "0%": {
            background:
              "linear-gradient(45deg, #ffadc1, #ff9e80, #fcbf49, #a4e057, #64d2ff)",
            backgroundSize: "200% 200%",
            backgroundPosition: "0% 100%",
            filter: "blur(10px)",
          },
          "50%": {
            background:
              "linear-gradient(90deg, #ffadc1, #ff9e80, #fcbf49, #a4e057, #64d2ff)",
            backgroundSize: "200% 200%",
            backgroundPosition: "100% 0%",
            filter: "blur(5px)",
          },
          "100%": {
            background:
              "linear-gradient(45deg, #ffadc1, #ff9e80, #fcbf49, #a4e057, #64d2ff)",
            backgroundSize: "200% 200%",
            backgroundPosition: "0% 100%",
            filter: "blur(10px)",
          },
        },

        "vibrant-splash": {
          "0%": {
            background:
              "linear-gradient(0deg, #ff0000, #ff7700, #ffdd00, #00e03c, #00d8ff)",
            backgroundSize: "200% 200%",
            backgroundPosition: "0% 100%",
            filter: "blur(10px)",
          },
          "50%": {
            background:
              "linear-gradient(90deg, #ff0000, #ff7700, #ffdd00, #00e03c, #00d8ff)",
            backgroundSize: "200% 200%",
            backgroundPosition: "100% 0%",
            filter: "blur(5px)",
          },
          "100%": {
            background:
              "linear-gradient(0deg, #ff0000, #ff7700, #ffdd00, #00e03c, #00d8ff)",
            backgroundSize: "200% 200%",
            backgroundPosition: "0% 100%",
            filter: "blur(10px)",
          },
        },

        "golden-horizon": {
          "0%": {
            background:
              "linear-gradient(-45deg, #ffd400, #ffad00, #ff6e00, #ff2700)",
            backgroundSize: "200% 200%",
            backgroundPosition: "0% 100%",
          },
          "50%": {
            background:
              "linear-gradient(-90deg, #ffd400, #ffad00, #ff6e00, #ff2700)",
            backgroundSize: "200% 200%",
            backgroundPosition: "100% 0%",
          },
          "100%": {
            background:
              "linear-gradient(-45deg, #ffd400, #ffad00, #ff6e00, #ff2700)",
            backgroundSize: "200% 200%",
            backgroundPosition: "0% 100%",
          },
        },

        "rose-blush": {
          "0%": {
            background:
              "linear-gradient(45deg, #ff446b, #ff7b6b, #ffad7b, #ffda8a)",
            backgroundSize: "200% 200%",
            backgroundPosition: "0% 100%",
          },
          "50%": {
            background:
              "linear-gradient(90deg, #ff446b, #ff7b6b, #ffad7b, #ffda8a)",
            backgroundSize: "200% 200%",
            backgroundPosition: "100% 0%",
          },
          "100%": {
            background:
              "linear-gradient(45deg, #ff446b, #ff7b6b, #ffad7b, #ffda8a)",
            backgroundSize: "200% 200%",
            backgroundPosition: "0% 100%",
          },
        },

        "lavender-dream": {
          "0%": {
            background:
              "linear-gradient(-45deg, #a96dc5, #8f7fc7, #7091c8, #49a3c9)",
            backgroundSize: "200% 200%",
            backgroundPosition: "0% 100%",
          },
          "50%": {
            background:
              "linear-gradient(-90deg, #a96dc5, #8f7fc7, #7091c8, #49a3c9)",
            backgroundSize: "200% 200%",
            backgroundPosition: "100% 0%",
          },
          "100%": {
            background:
              "linear-gradient(-45deg, #a96dc5, #8f7fc7, #7091c8, #49a3c9)",
            backgroundSize: "200% 200%",
            backgroundPosition: "0% 100%",
          },
        },

        "twilight-mist": {
          "0%": {
            background:
              "linear-gradient(45deg, #5071ff, #3966db, #275db7, #18538e)",
            backgroundSize: "200% 200%",
            backgroundPosition: "0% 100%",
          },
          "50%": {
            background:
              "linear-gradient(90deg, #5071ff, #3966db, #275db7, #18538e)",
            backgroundSize: "200% 200%",
            backgroundPosition: "100% 0%",
          },
          "100%": {
            background:
              "linear-gradient(45deg, #5071ff, #3966db, #275db7, #18538e)",
            backgroundSize: "200% 200%",
            backgroundPosition: "0% 100%",
          },
        },

        "orbiting-nebula": {
          "0%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #ff00ff 0, #6600cc 100%), linear-gradient(100deg, #fb00a5 50%, #6900cb 100%), linear-gradient(200deg, #8dada4 0, #12de81 100%), linear-gradient(-3deg, #1dadfe 0, #50009a 50%)",
            backgroundSize: "100% 100%",
            backgroundPosition: "0% 100%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "20%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #ff00ff 0, #6600cc 100%), linear-gradient(100deg, #fb00a5 50%, #6900cb 100%), linear-gradient(200deg, #8dada4 0, #12de81 100%), linear-gradient(-3deg, #1dadfe 0, #50009a 50%)",
            backgroundSize: "105% 105%",
            backgroundPosition: "10% 100%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "40%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #ff00ff 0, #6600cc 100%), linear-gradient(100deg, #fb00a5 50%, #6900cb 100%), linear-gradient(200deg, #8dada4 0, #12de81 100%), linear-gradient(-3deg, #1dadfe 0, #50009a 50%)",
            backgroundSize: "110% 300%",
            backgroundPosition: "20% 80%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "60%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #ff00ff 0, #6600cc 100%), linear-gradient(100deg, #fb00a5 50%, #6900cb 100%), linear-gradient(200deg, #8dada4 0, #12de81 100%), linear-gradient(-3deg, #1dadfe 0, #50009a 50%)",
            backgroundSize: "115% 115%",
            backgroundPosition: "30% 70%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "80%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #ff00ff 0, #6600cc 100%), linear-gradient(100deg, #fb00a5 50%, #6900cb 100%), linear-gradient(200deg, #8dada4 0, #12de81 100%), linear-gradient(-3deg, #1dadfe 0, #50009a 50%)",
            backgroundSize: "250% 120%",
            backgroundPosition: "40% 60%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "100%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #ff00ff 0, #6600cc 100%), linear-gradient(100deg, #fb00a5 50%, #6900cb 100%), linear-gradient(200deg, #8dada4 0, #12de81 100%), linear-gradient(-3deg, #1dadfe 0, #50009a 50%)",
            backgroundSize: "100% 100%",
            backgroundPosition: "0% 100%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
        },

        "violet-dusk": {
          "0%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #260a52 0, #520d97 100%), linear-gradient(100deg, #b108b0 50%, #f804f8 100%), linear-gradient(200deg, #545454 0, #6b02c9 100%), linear-gradient(-3deg, #5806b7 0, #260a52 50%)",
            backgroundSize: "100% 100%",
            backgroundPosition: "0% 60%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "20%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #260a52 0, #520d97 100%), linear-gradient(100deg, #b108b0 50%, #f804f8 100%), linear-gradient(200deg, #545454 0, #6b02c9 100%), linear-gradient(-3deg, #5806b7 0, #260a52 50%)",
            backgroundSize: "105% 105%",
            backgroundPosition: "10% 50%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "40%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #260a52 0, #520d97 100%), linear-gradient(100deg, #b108b0 50%, #f804f8 100%), linear-gradient(200deg, #545454 0, #6b02c9 100%), linear-gradient(-3deg, #5806b7 0, #260a52 50%)",
            backgroundSize: "110% 300%",
            backgroundPosition: "20% 40%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "60%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #260a52 0, #520d97 100%), linear-gradient(100deg, #b108b0 50%, #f804f8 100%), linear-gradient(200deg, #545454 0, #6b02c9 100%), linear-gradient(-3deg, #5806b7 0, #260a52 50%)",
            backgroundSize: "115% 115%",
            backgroundPosition: "30% 30%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "80%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #260a52 0, #520d97 100%), linear-gradient(100deg, #b108b0 50%, #f804f8 100%), linear-gradient(200deg, #545454 0, #6b02c9 100%), linear-gradient(-3deg, #5806b7 0, #260a52 50%)",
            backgroundSize: "250% 120%",
            backgroundPosition: "40% 20%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "100%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #260a52 0, #520d97 100%), linear-gradient(100deg, #b108b0 50%, #f804f8 100%), linear-gradient(200deg, #545454 0, #6b02c9 100%), linear-gradient(-3deg, #5806b7 0, #260a52 50%)",
            backgroundSize: "100% 100%",
            backgroundPosition: "0% 60%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
        },

        "starlight-cosmos": {
          "0%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #3d0066 0, #7d00c3 100%), linear-gradient(100deg, #c600ff 50%, #9300cc 100%), linear-gradient(200deg, #4c4c4c 0, #8a00ff 100%), linear-gradient(-3deg, #330066 0, #3d0066 50%)",
            backgroundSize: "100% 100%",
            backgroundPosition: "0% 60%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "20%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #3d0066 0, #7d00c3 100%), linear-gradient(100deg, #c600ff 50%, #9300cc 100%), linear-gradient(200deg, #4c4c4c 0, #8a00ff 100%), linear-gradient(-3deg, #330066 0, #3d0066 50%)",
            backgroundSize: "105% 105%",
            backgroundPosition: "10% 50%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "40%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #3d0066 0, #7d00c3 100%), linear-gradient(100deg, #c600ff 50%, #9300cc 100%), linear-gradient(200deg, #4c4c4c 0, #8a00ff 100%), linear-gradient(-3deg, #330066 0, #3d0066 50%)",
            backgroundSize: "110% 300%",
            backgroundPosition: "20% 40%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "60%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #3d0066 0, #7d00c3 100%), linear-gradient(100deg, #c600ff 50%, #9300cc 100%), linear-gradient(200deg, #4c4c4c 0, #8a00ff 100%), linear-gradient(-3deg, #330066 0, #3d0066 50%)",
            backgroundSize: "115% 115%",
            backgroundPosition: "30% 30%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "80%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #3d0066 0, #7d00c3 100%), linear-gradient(100deg, #c600ff 50%, #9300cc 100%), linear-gradient(200deg, #4c4c4c 0, #8a00ff 100%), linear-gradient(-3deg, #330066 0, #3d0066 50%)",
            backgroundSize: "250% 120%",
            backgroundPosition: "40% 20%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "100%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #3d0066 0, #7d00c3 100%), linear-gradient(100deg, #c600ff 50%, #9300cc 100%), linear-gradient(200deg, #4c4c4c 0, #8a00ff 100%), linear-gradient(-3deg, #330066 0, #3d0066 50%)",
            backgroundSize: "100% 100%",
            backgroundPosition: "0% 60%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
        },

        "amethyst-midnight": {
          "0%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #3a006b 0, #6c0098 100%), linear-gradient(100deg, #9c00ff 50%, #7500c4 100%), linear-gradient(200deg, #4c4c4c 0, #9300ff 100%), linear-gradient(-3deg, #6c0098 0, #3a006b 50%)",
            backgroundSize: "100% 100%",
            backgroundPosition: "0% 60%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "20%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #3a006b 0, #6c0098 100%), linear-gradient(100deg, #9c00ff 50%, #7500c4 100%), linear-gradient(200deg, #4c4c4c 0, #9300ff 100%), linear-gradient(-3deg, #6c0098 0, #3a006b 50%)",
            backgroundSize: "105% 105%",
            backgroundPosition: "10% 50%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "40%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #3a006b 0, #6c0098 100%), linear-gradient(100deg, #9c00ff 50%, #7500c4 100%), linear-gradient(200deg, #4c4c4c 0, #9300ff 100%), linear-gradient(-3deg, #6c0098 0, #3a006b 50%)",
            backgroundSize: "110% 300%",
            backgroundPosition: "20% 40%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "60%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #3a006b 0, #6c0098 100%), linear-gradient(100deg, #9c00ff 50%, #7500c4 100%), linear-gradient(200deg, #4c4c4c 0, #9300ff 100%), linear-gradient(-3deg, #6c0098 0, #3a006b 50%)",
            backgroundSize: "115% 115%",
            backgroundPosition: "30% 30%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "80%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #3a006b 0, #6c0098 100%), linear-gradient(100deg, #9c00ff 50%, #7500c4 100%), linear-gradient(200deg, #4c4c4c 0, #9300ff 100%), linear-gradient(-3deg, #6c0098 0, #3a006b 50%)",
            backgroundSize: "250% 120%",
            backgroundPosition: "40% 20%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "100%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #3a006b 0, #6c0098 100%), linear-gradient(100deg, #9c00ff 50%, #7500c4 100%), linear-gradient(200deg, #4c4c4c 0, #9300ff 100%), linear-gradient(-3deg, #6c0098 0, #3a006b 50%)",
            backgroundSize: "100% 100%",
            backgroundPosition: "0% 60%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
        },

        // CLASSICS
        wobble: {
          "0%": { transform: "rotate(-5deg)" },
          "25%": { transform: "rotate(5deg)" },
          "50%": { transform: "rotate(-5deg)" },
          "75%": { transform: "rotate(5deg)" },
          "100%": { transform: "rotate(-5deg)" },
        },
        melt: {
          "0%": { transform: "scale(1)" },
          "20%": { transform: "scale(0.8)" },
          "40%": { transform: "scale(1.2)" },
          "60%": { transform: "scale(0.9)" },
          "80%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        float: {
          "0%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(0)" },
          "75%": { transform: "translateY(5px)" },
          "100%": { transform: "translateY(0)" },
        },
        breathe: {
          "0%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.1)" },
          "50%": { transform: "scale(1)" },
          "75%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
        squiggle: {
          "0%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-5px)" },
          "40%": { transform: "translateX(5px)" },
          "60%": { transform: "translateX(-3px)" },
          "80%": { transform: "translateX(3px)" },
          "100%": { transform: "translateX(0)" },
        },
        "flip-and-spin": {
          "0%": { transform: "rotateY(0) rotateZ(0)" },
          "20%": { transform: "rotateY(1turn) rotateZ(0.5turn)" },
          "40%": { transform: "rotateY(2turn) rotateZ(1turn)" },
          "60%": { transform: "rotateY(3turn) rotateZ(1.5turn)" },
          "80%": { transform: "rotateY(4turn) rotateZ(2turn)" },
          "100%": { transform: "rotateY(5turn) rotateZ(2.5turn)" },
        },
        twist: {
          "0%": { transform: "rotateY(0) skewY(0)" },
          "20%": { transform: "rotateY(1turn) skewY(-10deg)" },
          "40%": { transform: "rotateY(2turn) skewY(10deg)" },
          "60%": { transform: "rotateY(3turn) skewY(-10deg)" },
          "80%": { transform: "rotateY(4turn) skewY(10deg)" },
          "100%": { transform: "rotateY(5turn) skewY(0)" },
        },
        pop: {
          "0%": { transform: "scale(1)" },
          "20%": { transform: "scale(1.2)" },
          "40%": { transform: "scale(0.8)" },
          "60%": { transform: "scale(1.1)" },
          "80%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
        scatter: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-50px, -50px)" },
          "40%": { transform: "translate(50px, -50px)" },
          "60%": { transform: "translate(-50px, 50px)" },
          "80%": { transform: "translate(50px, 50px)" },
          "100%": { transform: "translate(0)" },
        },
        "morph-colors": {
          "0%": { color: "#000" },
          "20%": { color: "#888" },
          "40%": { color: "#555" },
          "60%": { color: "#333" },
          "80%": { color: "#777" },
          "100%": { color: "#000" },
        },
        drift: {
          "0%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(50px)" },
          "40%": { transform: "translateX(-50px)" },
          "60%": { transform: "translateX(50px)" },
          "80%": { transform: "translateX(-50px)" },
          "100%": { transform: "translateX(0)" },
        },
        pixelate: {
          "0%": { filter: "none" },
          "20%": { filter: "grayscale(1) contrast(0.5)" },
          "40%": { filter: "blur(2px)" },
          "60%": { filter: "grayscale(0) contrast(1)" },
          "80%": { filter: "blur(0px)" },
          "100%": { filter: "none" },
        },
        "rotate-and-scale": {
          "0%": { transform: "rotate(0) scale(1)" },
          "20%": { transform: "rotate(90deg) scale(1.2)" },
          "40%": { transform: "rotate(180deg) scale(1.5)" },
          "60%": { transform: "rotate(270deg) scale(1.2)" },
          "80%": { transform: "rotate(360deg) scale(1)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
        disintegrate: {
          "0%": { opacity: "1", transform: "scale(1)" },
          "20%": { opacity: "0.8", transform: "scale(0.8)" },
          "40%": { opacity: "0.6", transform: "scale(0.6)" },
          "60%": { opacity: "0.4", transform: "scale(0.4)" },
          "80%": { opacity: "0.2", transform: "scale(0.2)" },
          "100%": { opacity: "0", transform: "scale(0)" },
        },
        shimmer: {
          "0%": { opacity: "0.5" },
          "20%": { opacity: "1" },
          "40%": { opacity: "0.5" },
          "60%": { opacity: "1" },
          "80%": { opacity: "0.5" },
          "100%": { opacity: "0.5" },
        },
        " liquid-fill": {
          "0%": { transform: "scaleY(0)" },
          "20%": { transform: "scaleY(0.2)" },
          "40%": { transform: "scaleY(0.4)" },
          "60%": { transform: "scaleY(0.6)" },
          "80%": { transform: "scaleY(0.8)" },
          "100%": { transform: "scaleY(1)" },
        },
        " teleport": {
          "0%": { opacity: "1", transform: "translate(0)" },
          "20%": { opacity: "0", transform: "translate(-100px, -100px)" },
          "40%": { opacity: "0", transform: "translate(-100px, 100px)" },
          "60%": { opacity: "0", transform: "translate(100px, -100px)" },
          "80%": { opacity: "0", transform: "translate(100px, 100px)" },
          "100%": { opacity: "1", transform: "translate(0)" },
        },
        confetti: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-20px, -20px)" },
          "40%": { transform: "translate(20px, -20px)" },
          "60%": { transform: "translate(-20px, 20px)" },
          "80%": { transform: "translate(20px, 20px)" },
          "100%": { transform: "translate(0)" },
        },
        " unravel": {
          "0%": { transform: "scaleY(0)" },
          "20%": { transform: "scaleY(0.2)" },
          "40%": { transform: "scaleY(0.4)" },
          "60%": { transform: "scaleY(0.6)" },
          "80%": { transform: "scaleY(0.8)" },
          "100%": { transform: "scaleY(1)" },
        },
        " time-warp": {
          "0%": { transform: "rotate(0) scale(1)" },
          "20%": { transform: "rotate(-20deg) scale(0.8)" },
          "40%": { transform: "rotate(20deg) scale(1.2)" },
          "60%": { transform: "rotate(-20deg) scale(0.9)" },
          "80%": { transform: "rotate(20deg) scale(1.1)" },
          "100%": { transform: "rotate(0) scale(1)" },
        },
      },
      colors: {
        primary: {
          light: "#111827",
          dark: "#f3f4f6",
        },
        secondary: {
          light: "f3f4f6",
          dark: "#111827",
        },
        accent: {
          main: "#3730a3",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
