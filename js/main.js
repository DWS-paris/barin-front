/*
BrainJS NeuralNetwork
*/
    // Define NeuralNetwork
    const NeuralNetwork = new brain.NeuralNetwork();

    // Train NeuralNetwork
    NeuralNetwork.train([
        { input: { r: 0.62, g: 0.72, b: 0.88 }, output: { light: 1 } },
        { input: { r: 0.10, g: 0.84, b: 0.72 }, output: { light: 1 } },
        { input: { r: 0.74, g: 0.78, b: 0.86 }, output: { light: 1 } },
        { input: { r: 0.33, g: 0.24, b: 0.29 }, output: { dark: 1 } },
        { input: { r: 0.31, g: 0.35, b: 0.41 }, output: { dark: 1 } },
    ]);
//

/*
Functions
*/
    // HEX color convertor in RGB
    const hexToRgb = (hex) => {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
            g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
            b: Math.round(parseInt(result[3], 16) / 2.55) / 100
        } : null;
    }

    // Start Interface
    const startPicker = () => {
        document.querySelector('input').addEventListener('change', (event) => {
            // Change background color
            document.querySelector('main').style.background = event.target.value;

            // Convert HEX color in RGB
            const inputColor = hexToRgb(event.target.value);

            // Check color with NeuralNetwork
            const NeuralNetworkResult = brain.likely(inputColor, NeuralNetwork)

            // Change H1 color
            NeuralNetworkResult === 'dark' ? document.querySelector('h1').classList.add('light') : document.querySelector('h1').classList.remove('light')

            // Display NeuralNetwork result
            console.log(`Color is: ${NeuralNetworkResult.toUpperCase()}`, NeuralNetwork.run(inputColor))
        })
    }
//

/*
Wait for DOM content
*/
    document.addEventListener('DOMContentLoaded', () => startPicker() );
//
